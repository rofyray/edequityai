'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ClayCard, ClayButton, ClayInput } from '@/components/clay'
import { createClient } from '@/lib/supabase/client'
import { showToast, friendlyError } from '@/lib/toast'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      // Step 1: Check lockout status
      const checkRes = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, action: 'check' }),
      })

      if (!checkRes.ok) {
        const checkData = await checkRes.json()
        if (checkData.isLocked) {
          showToast.error('Too many login attempts. Please try again in 15 minutes')
          return
        }
      }

      // Step 2: Sign in via browser client (manages SSR cookies properly)
      const supabase = createClient()
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        // Record failure server-side
        await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, action: 'record-failure' }),
        }).catch(() => {}) // Don't fail if lockout recording fails

        showToast.error(friendlyError(error.message))
        return
      }

      // Step 3: Record success server-side (clears lockout counter)
      await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, action: 'record-success' }),
      }).catch(() => {})

      // Step 4: Navigate to role-based dashboard
      const role = data.user?.user_metadata?.role || 'student'
      const routes: Record<string, string> = {
        student: '/dashboard',
        teacher: '/teacher/dashboard',
        parent: '/parent/dashboard',
        admin: '/admin/dashboard',
      }

      showToast.success('Welcome back!')
      router.push(routes[role] || '/dashboard')
      router.refresh()
    } catch {
      showToast.error('Something went wrong. Please try again in a moment')
    } finally {
      setLoading(false)
    }
  }

  return (
    <ClayCard>
      <h2 className="mb-6 font-sans text-2xl font-bold text-center">Sign In</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <ClayButton type="submit" disabled={loading} data-testid="login-btn">
          {loading ? 'Signing in...' : 'Sign In'}
        </ClayButton>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="text-primary font-semibold hover:opacity-80">
          Sign up
        </Link>
      </p>
    </ClayCard>
  )
}
