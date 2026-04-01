import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginPage from '@/app/(auth)/login/page'

const mockPush = vi.fn()
const mockRefresh = vi.fn()

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    refresh: mockRefresh,
  }),
}))

// Mock Supabase browser client
const mockSignIn = vi.fn()
vi.mock('@/lib/supabase/client', () => ({
  createClient: () => ({
    auth: {
      signInWithPassword: mockSignIn,
    },
  }),
}))

// Mock sonner toast
vi.mock('sonner', () => ({
  toast: Object.assign(vi.fn(), {
    success: vi.fn(),
    error: vi.fn(),
    warning: vi.fn(),
    info: vi.fn(),
  }),
  Toaster: () => null,
}))

describe('LoginPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders email and password fields', () => {
    render(<LoginPage />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  it('renders sign in button', () => {
    render(<LoginPage />)
    expect(screen.getByTestId('login-btn')).toBeInTheDocument()
    expect(screen.getByTestId('login-btn')).toHaveTextContent('Sign In')
  })

  it('renders link to registration page', () => {
    render(<LoginPage />)
    expect(screen.getByText('Sign up')).toHaveAttribute('href', '/register')
  })

  it('navigates to dashboard on successful login', async () => {
    // Mock lockout check passes
    global.fetch = vi.fn()
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ ok: true, isLocked: false }),
      })
      // Mock record-success
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ ok: true }),
      })

    mockSignIn.mockResolvedValue({
      data: {
        user: { user_metadata: { role: 'student' } },
        session: {},
      },
      error: null,
    })

    render(<LoginPage />)
    const user = userEvent.setup()

    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'Password1')
    await user.click(screen.getByTestId('login-btn'))

    // Wait for async operations
    await vi.waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/dashboard')
    })
    expect(mockRefresh).toHaveBeenCalled()
  })

  it('shows toast on failed login', async () => {
    const { toast } = await import('sonner')

    // Mock lockout check passes
    global.fetch = vi.fn()
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ ok: true, isLocked: false }),
      })
      // Mock record-failure
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ ok: true, isLocked: false }),
      })

    mockSignIn.mockResolvedValue({
      data: { user: null, session: null },
      error: { message: 'Invalid credentials' },
    })

    render(<LoginPage />)
    const user = userEvent.setup()

    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'wrongpass')
    await user.click(screen.getByTestId('login-btn'))

    await vi.waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        'The email or password you entered is incorrect'
      )
    })
  })

  it('shows lockout toast when account is locked', async () => {
    const { toast } = await import('sonner')

    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ ok: false, isLocked: true, unlockAt: new Date() }),
    })

    render(<LoginPage />)
    const user = userEvent.setup()

    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Password'), 'wrong')
    await user.click(screen.getByTestId('login-btn'))

    await vi.waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        'Too many login attempts. Please try again in 15 minutes'
      )
    })
  })
})
