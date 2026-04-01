import { toast } from 'sonner'

/** User-friendly toast helpers. Never expose backend error messages. */
export const showToast = {
  success: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
  warning: (message: string) => toast.warning(message),
  info: (message: string) => toast.info(message),
}

/** Map backend error strings to user-friendly messages */
export function friendlyError(backendError: string): string {
  const lower = backendError.toLowerCase()

  if (lower.includes('invalid credentials') || lower.includes('invalid login')) {
    return 'The email or password you entered is incorrect'
  }
  if (lower.includes('account locked') || lower.includes('too many')) {
    return 'Too many login attempts. Please try again in 15 minutes'
  }
  if (lower.includes('already registered') || lower.includes('already been registered') || lower.includes('duplicate') || lower.includes('already exists')) {
    return 'An account with this email already exists. Try signing in instead'
  }
  if (lower.includes('validation failed') || lower.includes('invalid')) {
    return 'Please check your information and try again'
  }
  if (lower.includes('email not confirmed')) {
    return 'Please verify your email before signing in. Check your inbox for a verification code'
  }

  return 'Something went wrong. Please try again in a moment'
}
