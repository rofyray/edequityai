import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import {
  registerStudentSchema,
  registerTeacherSchema,
  registerParentSchema,
  requiresCoppa,
} from '@/lib/auth/validation'
import { recordCoppaConsent, sendConsentEmail } from '@/lib/auth/coppa'
import type { UserRole } from '@/lib/auth/types'
import crypto from 'crypto'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const action: string = body.action || 'validate'
    const role: UserRole = body.role || 'student'

    // --- Action: validate inputs (no user creation) ---
    if (action === 'validate') {
      let validated: Record<string, unknown>
      if (role === 'student') {
        validated = registerStudentSchema.parse(body)
      } else if (role === 'teacher') {
        validated = registerTeacherSchema.parse(body)
      } else if (role === 'parent') {
        validated = registerParentSchema.parse(body)
      } else {
        return NextResponse.json({ error: 'Invalid role' }, { status: 400 })
      }

      // Check COPPA for students
      if (role === 'student') {
        const needsCoppa = requiresCoppa(validated.dateOfBirth as string)
        if (needsCoppa && !validated.parentEmail) {
          return NextResponse.json(
            { error: 'Parent email required for students under 13', requiresParentConsent: true },
            { status: 400 }
          )
        }
      }

      // Check email uniqueness
      const supabase = await createServiceRoleClient()
      const { data: existingUsers } = await supabase
        .from('users')
        .select('id')
        .eq('email', validated.email as string)
        .limit(1)

      if (existingUsers && existingUsers.length > 0) {
        return NextResponse.json(
          { error: 'User already registered' },
          { status: 409 }
        )
      }

      return NextResponse.json({ ok: true })
    }

    // --- Action: create-profile (after client-side signUp) ---
    if (action === 'create-profile') {
      const userId = body.userId as string
      const email = body.email as string
      const fullName = body.fullName as string

      if (!userId || !email || !fullName) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
      }

      const supabase = await createServiceRoleClient()

      // Insert into users table
      const { error: userError } = await supabase.from('users').insert({
        id: userId,
        email,
        full_name: fullName,
        role,
      })

      if (userError) {
        return NextResponse.json({ error: userError.message }, { status: 400 })
      }

      // Role-specific profile creation
      if (role === 'student') {
        const { error: studentError } = await supabase.from('students').insert({
          id: userId,
          date_of_birth: body.dateOfBirth as string,
          onboarding_completed: false,
          onboarding_step: 1,
        })

        if (studentError) {
          return NextResponse.json({ error: studentError.message }, { status: 400 })
        }

        // COPPA check for under-13
        const needsCoppa = requiresCoppa(body.dateOfBirth as string)
        if (needsCoppa && body.parentEmail) {
          const ipHash = crypto
            .createHash('sha256')
            .update(req.headers.get('x-forwarded-for') || 'unknown')
            .digest('hex')

          await recordCoppaConsent({
            studentId: userId,
            parentEmail: body.parentEmail as string,
            ipAddressHash: ipHash,
          })

          await sendConsentEmail(body.parentEmail as string, userId)

          return NextResponse.json({
            ok: true,
            requiresParentConsent: true,
          })
        }
      } else if (role === 'teacher') {
        await supabase.from('teachers').insert({
          id: userId,
          school_name: body.schoolName as string | undefined,
          region: body.region as string | undefined,
          state: body.state as string | undefined,
        })
      } else if (role === 'parent') {
        await supabase.from('parents').insert({ id: userId })
      }

      return NextResponse.json({ ok: true, requiresParentConsent: false })
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    if (error instanceof Error && 'issues' in error) {
      return NextResponse.json({ error: 'Validation failed' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 })
  }
}
