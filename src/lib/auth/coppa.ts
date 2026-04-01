import { createServiceRoleClient } from '@/lib/supabase/server'
import { randomBytes, createHash } from 'crypto'

const CONSENT_TOKEN_EXPIRY_HOURS = 48

interface CoppaConsentParams {
  studentId: string
  parentEmail: string
  ipAddressHash?: string
}

/**
 * Record a COPPA consent request and generate a secure token.
 * Returns the raw token to include in the consent email.
 */
export async function recordCoppaConsent({
  studentId,
  parentEmail,
  ipAddressHash,
}: CoppaConsentParams): Promise<string> {
  const supabase = await createServiceRoleClient()

  // Generate cryptographic consent token
  const rawToken = `${crypto.randomUUID()}-${randomBytes(16).toString('hex')}`
  const tokenHash = createHash('sha256').update(rawToken).digest('hex')

  const { error } = await supabase.from('parent_consents').insert({
    student_id: studentId,
    parent_email: parentEmail,
    consent_given: false,
    ip_address_hash: tokenHash, // Store hashed token here
    consent_version: '1.0',
  })

  if (error) throw new Error(`Failed to record COPPA consent: ${error.message}`)

  return rawToken
}

export async function sendConsentEmail(parentEmail: string, consentToken: string) {
  // TODO: Integrate email provider (Resend, SendGrid, etc.)
  const consentUrl = `${process.env.NEXT_PUBLIC_APP_URL}/consent?token=${consentToken}`
  console.log(`[COPPA] Consent email to ${parentEmail}: ${consentUrl}`)
}

/**
 * Verify a COPPA consent token.
 * Hashes the provided token and matches against stored hash.
 * Tokens expire after 48 hours.
 */
export async function verifyConsent(rawToken: string): Promise<boolean> {
  const supabase = await createServiceRoleClient()
  const tokenHash = createHash('sha256').update(rawToken).digest('hex')

  // Find the consent record by token hash
  const { data, error } = await supabase
    .from('parent_consents')
    .select('id, consent_timestamp')
    .eq('ip_address_hash', tokenHash)
    .eq('consent_given', false)
    .single()

  if (error || !data) return false

  // Check token expiry
  const createdAt = new Date(data.consent_timestamp).getTime()
  const expiryMs = CONSENT_TOKEN_EXPIRY_HOURS * 60 * 60 * 1000
  if (Date.now() - createdAt > expiryMs) return false

  // Mark as consented
  const { error: updateError } = await supabase
    .from('parent_consents')
    .update({ consent_given: true })
    .eq('id', data.id)

  return !updateError
}

/** Check if student requires COPPA consent based on age (under 13). */
export function requiresCoppa(dateOfBirth: string): boolean {
  const dob = new Date(dateOfBirth)
  const today = new Date()
  const age = today.getFullYear() - dob.getFullYear()
  const monthDiff = today.getMonth() - dob.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    return age - 1 < 13
  }
  return age < 13
}
