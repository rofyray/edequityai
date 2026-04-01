import type { Metadata } from 'next'
import { ClayCard } from '@/components/clay'

export const metadata: Metadata = {
  title: 'Privacy Policy — EdEquity AI',
  description: 'How EdEquity AI collects, uses, and protects your data.',
}

export default function PrivacyPage() {
  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mb-8 text-center font-sans text-sm text-muted-foreground">
          Last updated: March 31, 2026
        </p>

        <ClayCard size="lg">
          <div className="space-y-8 font-sans text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                1. Information We Collect
              </h2>
              <p className="mb-2">We collect only the information necessary to provide our educational service:</p>
              <ul className="ml-4 list-disc space-y-1">
                <li><strong>Account information:</strong> Name, email address, password (hashed), role (student/teacher/parent).</li>
                <li><strong>Student profile:</strong> Grade level, region, state, date of birth (for COPPA compliance), dialect preference.</li>
                <li><strong>Learning data:</strong> Module progress, assessment scores, mastery levels, streaks, XP, and tutor conversation history.</li>
                <li><strong>Technical data:</strong> Device type, browser, and connection status (online/offline) for service optimization.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                2. How We Use Information
              </h2>
              <ul className="ml-4 list-disc space-y-1">
                <li>Personalize the AI tutor experience based on region, grade, and learning progress.</li>
                <li>Track and display academic progress to the student, their teacher, and their parent/guardian.</li>
                <li>Generate adaptive assessments and curriculum recommendations.</li>
                <li>Improve our platform and curriculum based on aggregate, anonymized usage data.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                3. COPPA Compliance (Students Under 13)
              </h2>
              <p className="mb-2">
                We take the protection of children&apos;s privacy seriously. For students under 13:
              </p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Verifiable parental consent is required before account creation.</li>
                <li>Parents receive a consent request via email with a secure, time-limited verification token.</li>
                <li>Student accounts are not activated until parental consent is verified.</li>
                <li>Parents can review their child&apos;s data and request deletion at any time.</li>
                <li>We do not collect more information than is reasonably necessary for educational purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                4. FERPA Compliance
              </h2>
              <p>
                EdEquity AI operates as a &ldquo;school official&rdquo; under FERPA when used by educational institutions.
                Student education records are accessible only to the student, their assigned teacher, and their
                linked parent/guardian. We do not disclose student records to third parties without consent.
                Teachers cannot access student tutor conversation content &mdash; only progress metrics.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                5. Data Storage and Security
              </h2>
              <ul className="ml-4 list-disc space-y-1">
                <li>Data is stored in Supabase (PostgreSQL) with Row-Level Security enforcing access controls.</li>
                <li>Passwords are hashed using industry-standard algorithms.</li>
                <li>Authentication tokens are stored in httpOnly cookies to prevent XSS attacks.</li>
                <li>All data in transit is encrypted via TLS/HTTPS.</li>
                <li>Rate limiting and brute-force protection are enforced on all authentication endpoints.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                6. Third-Party Services
              </h2>
              <p className="mb-2">We use the following third-party services to power our platform:</p>
              <ul className="ml-4 list-disc space-y-1">
                <li><strong>Supabase:</strong> Database hosting, authentication, and file storage.</li>
                <li><strong>OpenAI:</strong> Powers the NAANO AI tutor and assessment generation. Conversation data is sent to OpenAI for processing but is not used to train their models.</li>
                <li><strong>ElevenLabs:</strong> Provides text-to-speech and speech-to-text for voice interactions.</li>
                <li><strong>Upstash:</strong> Redis caching for performance optimization. No personally identifiable information is stored in cache.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                7. Data Retention and Deletion
              </h2>
              <p>
                We retain student data for as long as the account is active. Upon account deletion or
                a verified deletion request, all personal data and learning records are permanently removed
                within 30 days. Anonymized, aggregate data may be retained for platform improvement.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                8. Your Rights
              </h2>
              <ul className="ml-4 list-disc space-y-1">
                <li>Access your data at any time through your dashboard or by contacting us.</li>
                <li>Request correction of inaccurate personal information.</li>
                <li>Request deletion of your account and all associated data.</li>
                <li>Parents may review, modify, or delete their child&apos;s information at any time.</li>
                <li>Opt out of non-essential data collection (analytics, usage tracking).</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                9. Contact Information
              </h2>
              <p>
                If you have questions about this privacy policy or wish to exercise your data rights,
                please contact us at{' '}
                <span className="font-semibold text-primary">privacy@edequity.ai</span>.
              </p>
            </section>
          </div>
        </ClayCard>
      </div>
    </div>
  )
}
