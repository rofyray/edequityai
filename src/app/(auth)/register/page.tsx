'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ClayCard, ClayButton, ClayInput } from '@/components/clay'
import { createClient } from '@/lib/supabase/client'
import { showToast, friendlyError } from '@/lib/toast'
import Link from 'next/link'
import type { UserRole } from '@/lib/auth/types'

function RegisterPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialRole = (['student', 'teacher', 'parent'].includes(searchParams.get('role') || '')
    ? searchParams.get('role') as UserRole
    : 'student')
  const [role, setRole] = useState<UserRole>(initialRole)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [parentEmail, setParentEmail] = useState('')
  const [schoolName, setSchoolName] = useState('')
  const [region, setRegion] = useState('')
  const [state, setState] = useState('')
  const [loading, setLoading] = useState(false)
  const [coppaRequired, setCoppaRequired] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const profileData: Record<string, unknown> = { email, password, fullName, role, action: 'validate' }

      if (role === 'student') {
        Object.assign(profileData, { dateOfBirth, parentEmail: parentEmail || undefined })
      } else if (role === 'teacher') {
        Object.assign(profileData, { schoolName: schoolName || undefined, region: region || undefined, state: state || undefined })
      }

      // Step 1: Validate inputs server-side
      const validateRes = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      })

      const validateData = await validateRes.json()

      if (!validateRes.ok) {
        if (validateData.requiresParentConsent) {
          setCoppaRequired(true)
          showToast.warning('Parent or guardian email is required for students under 13')
          return
        }
        showToast.error(friendlyError(validateData.error || 'Validation failed'))
        return
      }

      // Step 2: Sign up via browser client (triggers Supabase email verification)
      const supabase = createClient()
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            role,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (signUpError) {
        showToast.error(friendlyError(signUpError.message))
        return
      }

      if (!signUpData.user) {
        showToast.error('Something went wrong. Please try again in a moment')
        return
      }

      // Step 3: Create profile records server-side
      const profileRes = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create-profile',
          userId: signUpData.user.id,
          email,
          fullName,
          role,
          ...(role === 'student' && { dateOfBirth, parentEmail: parentEmail || undefined }),
          ...(role === 'teacher' && { schoolName: schoolName || undefined, region: region || undefined, state: state || undefined }),
        }),
      })

      const profileResult = await profileRes.json()

      if (!profileRes.ok) {
        showToast.error('Account created but profile setup failed. Please contact support')
        return
      }

      // Step 4: Handle COPPA consent redirect
      if (profileResult.requiresParentConsent) {
        showToast.info('A consent email has been sent to your parent or guardian')
        router.push('/consent-pending')
        return
      }

      // Step 5: Redirect to email verification
      showToast.success('Account created! Check your email to verify your account')
      router.push(`/verify-email?email=${encodeURIComponent(email)}`)
    } catch (err) {
      console.error('Registration error:', err)
      showToast.error('Something went wrong. Please try again in a moment')
    } finally {
      setLoading(false)
    }
  }

  return (
    <ClayCard>
      <h2 className="mb-6 font-sans text-2xl font-bold text-center">Create Account</h2>

      {/* Role selector */}
      <div className="mb-6 flex gap-2 justify-center">
        {(['student', 'teacher', 'parent'] as UserRole[]).map((r) => (
          <ClayButton
            key={r}
            variant={role === r ? 'primary' : 'secondary'}
            size="sm"
            type="button"
            onClick={() => setRole(r)}
          >
            {r.charAt(0).toUpperCase() + r.slice(1)}
          </ClayButton>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <ClayInput
          label="Full Name"
          name="fullName"
          placeholder="Your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <ClayInput
          label="Email"
          type="email"
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <ClayInput
          label="Password"
          type="password"
          name="password"
          placeholder="At least 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Student-specific fields */}
        {role === 'student' && (
          <>
            <ClayInput
              label="Date of Birth"
              type="date"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />

            {coppaRequired && (
              <ClayInput
                label="Parent/Guardian Email"
                type="email"
                name="parentEmail"
                placeholder="parent@example.com"
                hint="Required for students under 13 (COPPA)"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                required
              />
            )}
          </>
        )}

        {/* Teacher-specific fields */}
        {role === 'teacher' && (
          <ClayInput
            label="School Name"
            name="schoolName"
            placeholder="Your school"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        )}

        <ClayButton type="submit" disabled={loading}>
          {loading ? 'Creating account...' : 'Create Account'}
        </ClayButton>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link href="/login" className="text-primary font-semibold hover:opacity-80">
          Sign in
        </Link>
      </p>
    </ClayCard>
  )
}

export default function RegisterPage() {
  return (
    <Suspense>
      <RegisterPageContent />
    </Suspense>
  )
}
