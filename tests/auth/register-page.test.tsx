import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RegisterPage from '@/app/(auth)/register/page'

const mockPush = vi.fn()

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
  useSearchParams: () => new URLSearchParams(),
}))

const mockSignUp = vi.fn()
vi.mock('@/lib/supabase/client', () => ({
  createClient: () => ({
    auth: {
      signUp: mockSignUp,
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

describe('RegisterPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders role selector with student, teacher, parent options', () => {
    render(<RegisterPage />)
    expect(screen.getByText('Student')).toBeInTheDocument()
    expect(screen.getByText('Teacher')).toBeInTheDocument()
    expect(screen.getByText('Parent')).toBeInTheDocument()
  })

  it('shows student-specific fields by default', () => {
    render(<RegisterPage />)
    expect(screen.getByLabelText('Date of Birth')).toBeInTheDocument()
    // Grade and region are captured during onboarding, not signup
    expect(screen.queryByText('Grade')).not.toBeInTheDocument()
    expect(screen.queryByText('Region')).not.toBeInTheDocument()
  })

  it('shows teacher-specific fields when teacher role selected', async () => {
    render(<RegisterPage />)
    const user = userEvent.setup()
    await user.click(screen.getByText('Teacher'))

    expect(screen.getByLabelText('School Name')).toBeInTheDocument()
    expect(screen.queryByLabelText('Date of Birth')).not.toBeInTheDocument()
  })

  it('does not show grade/region/state fields for students (captured in onboarding)', () => {
    render(<RegisterPage />)
    expect(screen.queryByText('Grade')).not.toBeInTheDocument()
    expect(screen.queryByText('Region')).not.toBeInTheDocument()
    expect(screen.queryByText('State')).not.toBeInTheDocument()
  })

  it('validates that COPPA age check utility works for under-13', async () => {
    // Unit test for the COPPA check — UI integration tested via E2E
    const { requiresCoppa } = await import('@/lib/auth/validation')
    expect(requiresCoppa('2016-01-01')).toBe(true)  // Age 10 — requires COPPA
    expect(requiresCoppa('2012-01-01')).toBe(false)  // Age 14 — no COPPA
  })

  it('renders link to login page', () => {
    render(<RegisterPage />)
    expect(screen.getByText('Sign in')).toHaveAttribute('href', '/login')
  })

  it('redirects to verify-email on successful registration', async () => {
    const { toast } = await import('sonner')

    // Mock validate API
    global.fetch = vi.fn()
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ ok: true }),
      })
      // Mock create-profile API
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ ok: true, requiresParentConsent: false }),
      })

    mockSignUp.mockResolvedValue({
      data: { user: { id: 'test-user-id' } },
      error: null,
    })

    render(<RegisterPage />)
    const user = userEvent.setup()

    await user.type(screen.getByLabelText('Full Name'), 'Test User')
    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'Password1')
    await user.type(screen.getByLabelText('Date of Birth'), '2012-01-01')

    await user.click(screen.getByRole('button', { name: 'Create Account' }))

    await vi.waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith(
        'Account created! Check your email to verify your account'
      )
      expect(mockPush).toHaveBeenCalledWith('/verify-email?email=test%40test.com')
    })
  })
})
