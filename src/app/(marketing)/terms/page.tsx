import type { Metadata } from 'next'
import { ClayCard } from '@/components/clay'

export const metadata: Metadata = {
  title: 'Terms of Service — EdEquity AI',
  description: 'Terms and conditions for using the EdEquity AI platform.',
}

export default function TermsPage() {
  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Terms of Service
        </h1>
        <p className="mb-8 text-center font-sans text-sm text-muted-foreground">
          Last updated: March 31, 2026
        </p>

        <ClayCard size="lg">
          <div className="space-y-8 font-sans text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using EdEquity AI (&ldquo;the Service&rdquo;), you agree to be bound by these
                Terms of Service. If you are registering on behalf of a student under 13, you represent that
                you are the student&apos;s parent or legal guardian and consent to these terms on their behalf.
                If you do not agree to these terms, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                2. Description of Service
              </h2>
              <p>
                EdEquity AI is a culturally-adaptive K-12 learning platform that provides AI-powered tutoring,
                standards-aligned curriculum modules, progress tracking, and assessment tools. The Service is
                designed for students, teachers, and parents in underserved communities across Appalachia,
                the Mississippi Delta, and Tribal lands.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                3. User Accounts and Registration
              </h2>
              <ul className="ml-4 list-disc space-y-1">
                <li>You must provide accurate and complete information when creating an account.</li>
                <li>You are responsible for maintaining the security of your account credentials.</li>
                <li>One account per person. Shared accounts are not permitted.</li>
                <li>Student accounts for children under 13 require verified parental consent per COPPA.</li>
                <li>Teachers and parents access student data only through authorized relationships verified by the platform.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                4. Acceptable Use
              </h2>
              <p className="mb-2">You agree not to:</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Use the Service for any purpose other than educational learning.</li>
                <li>Attempt to manipulate, exploit, or abuse the AI tutor system.</li>
                <li>Share, publish, or redistribute curriculum content outside the platform.</li>
                <li>Impersonate another user or misrepresent your role or identity.</li>
                <li>Attempt to access data belonging to other users without authorization.</li>
                <li>Use automated tools, bots, or scripts to access the Service.</li>
                <li>Submit profane, harmful, or inappropriate content through the tutor interface.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                5. Intellectual Property
              </h2>
              <p>
                All content on the platform — including curriculum modules, AI-generated responses, design
                elements, and software code — is the intellectual property of EdEquity AI or its licensors.
                You may use the educational content for personal, non-commercial learning purposes only.
                Redistribution, modification, or commercial use of any platform content is prohibited.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                6. AI Tutor Disclaimer
              </h2>
              <p>
                The NAANO AI tutor is powered by artificial intelligence and provides educational assistance.
                While we strive for accuracy, AI-generated content may occasionally contain errors.
                The AI tutor is a supplementary educational tool and should not replace professional
                instruction. We employ profanity filters and content safety measures, but no AI system
                is infallible.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                7. Disclaimers
              </h2>
              <p>
                The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind,
                whether express or implied. We do not guarantee that the Service will be uninterrupted,
                error-free, or free of harmful components. We make no guarantees regarding specific
                educational outcomes or academic performance.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                8. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, EdEquity AI and its officers, directors, employees,
                and agents shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages arising from your use of the Service. Our total liability for any claim
                shall not exceed the amount paid by you (if any) for use of the Service.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                9. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                United States of America. Any disputes arising from these Terms or your use of the
                Service shall be resolved in the appropriate courts of the applicable jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                10. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be
                communicated via the platform and/or email to registered users. Continued use of the
                Service after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                11. Contact Information
              </h2>
              <p>
                For questions about these Terms of Service, please contact us at{' '}
                <span className="font-semibold text-primary">legal@edequity.ai</span>.
              </p>
            </section>
          </div>
        </ClayCard>
      </div>
    </div>
  )
}
