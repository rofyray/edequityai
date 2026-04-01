import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import VerifyEmailPage from '@/app/(auth)/verify-email/page'

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  useSearchParams: () => new URLSearchParams('email=test@test.com'),
}))

const mockResend = vi.fn()
vi.mock('@/lib/supabase/client', () => ({
  createClient: () => ({
    auth: {
      resend: mockResend,
    },
  }),
}))

vi.mock('sonner', () => ({
  toast: Object.assign(vi.fn(), {
    success: vi.fn(),
    error: vi.fn(),
    warning: vi.fn(),
    info: vi.fn(),
  }),
  Toaster: () => null,
}))

describe('VerifyEmailPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders check your email message', () => {
    render(<VerifyEmailPage />)
    expect(screen.getByText('Check Your Email')).toBeInTheDocument()
    expect(screen.getByText(/verification link/)).toBeInTheDocument()
  })

  it('shows masked email address', () => {
    render(<VerifyEmailPage />)
    expect(screen.getByText(/t\*\*\*@test\.com/)).toBeInTheDocument()
  })

  it('has a link to sign in page', () => {
    render(<VerifyEmailPage />)
    expect(screen.getByTestId('go-to-login-btn')).toHaveTextContent('Go to Sign In')
  })

  it('resend button sends new verification email', async () => {
    const { toast } = await import('sonner')

    mockResend.mockResolvedValue({ error: null })

    render(<VerifyEmailPage />)
    const user = userEvent.setup()

    await user.click(screen.getByTestId('resend-btn'))

    await vi.waitFor(() => {
      expect(mockResend).toHaveBeenCalledWith({
        type: 'signup',
        email: 'test@test.com',
        options: {
          emailRedirectTo: 'http://localhost:3000/auth/callback',
        },
      })
      expect(toast.success).toHaveBeenCalledWith(
        'A new verification email has been sent'
      )
    })
  })
})
