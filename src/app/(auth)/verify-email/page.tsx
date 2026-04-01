'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ClayCard, ClayButton } from '@/components/clay'
import { createClient } from '@/lib/supabase/client'
import { showToast } from '@/lib/toast'
import Link from 'next/link'

function maskEmail(email: string): string {
  const [local, domain] = email.split('@')
  if (!local || !domain) return email
  const visible = local.slice(0, 1)
  return `${visible}${'*'.repeat(Math.max(local.length - 1, 2))}@${domain}`
}

export default function VerifyEmailPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ''
  const [resending, setResending] = useState(false)

  async function handleResend() {
    if (!email) {
      showToast.error('Email address is missing. Please register again')
      return
    }

    setResending(true)

    try {
      const supabase = createClient()
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) {
        showToast.error('Could not resend email. Please try again in a moment')
        return
      }

      showToast.success('A new verification email has been sent')
    } catch {
      showToast.error('Something went wrong. Please try again in a moment')
    } finally {
      setResending(false)
    }
  }

  return (
    <ClayCard>
      <div className="text-center mb-2">
        <span className="text-4xl" role="img" aria-label="Email">
          &#9993;
        </span>
      </div>
      <h2 className="mb-2 font-sans text-2xl font-bold text-center">Check Your Email</h2>
      <p className="mb-6 text-center text-sm text-muted-foreground">
        We sent a verification link to{' '}
        <span className="font-semibold text-foreground">{email ? maskEmail(email) : 'your email'}</span>.
        Click the link in the email to verify your account.
      </p>

      <div className="flex flex-col gap-3">
        <Link href="/login">
          <ClayButton className="w-full" data-testid="go-to-login-btn">
            Go to Sign In
          </ClayButton>
        </Link>

        <p className="text-center text-sm text-muted-foreground">
          Didn&apos;t receive an email?{' '}
          <button
            type="button"
            onClick={handleResend}
            disabled={resending}
            className="text-primary font-semibold hover:opacity-80 disabled:opacity-50"
            data-testid="resend-btn"
          >
            {resending ? 'Sending...' : 'Resend email'}
          </button>
        </p>
      </div>
    </ClayCard>
  )
}
