import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'

/**
 * Handles Supabase email confirmation redirect.
 * Supabase sends users here after they click the "Confirm your mail" link.
 * Exchanges the auth code for a session, then redirects to /login.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const code = searchParams.get('code')
  const redirectTo = request.nextUrl.clone()
  redirectTo.pathname = '/login'
  redirectTo.searchParams.delete('code')

  if (code) {
    const supabase = await createServerSupabaseClient()
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(redirectTo)
}
