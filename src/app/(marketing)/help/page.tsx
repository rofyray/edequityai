import type { Metadata } from 'next'
import { ClayCard } from '@/components/clay'

export const metadata: Metadata = {
  title: 'Help Center — EdEquity AI',
  description: 'Get help with EdEquity AI — FAQ for students, teachers, and parents.',
}

const FAQ_SECTIONS = [
  {
    title: 'Getting Started',
    questions: [
      {
        q: 'What is EdEquity AI?',
        a: 'EdEquity AI is a culturally-adaptive K-12 learning platform built for underserved students in Appalachia, the Mississippi Delta, and Tribal lands. It provides an AI-powered tutor named NAANO that understands your community, speaks your dialect, and teaches standards-aligned Math and ELA — even without internet access.',
      },
      {
        q: 'How do I create an account?',
        a: 'Click "Get Started" on the homepage and choose your role — Student, Teacher, or Parent. Students will need to provide their grade level and region. Students under 13 require parental consent per COPPA regulations.',
      },
      {
        q: 'Is EdEquity AI free?',
        a: 'Yes. EdEquity AI is free for all students, teachers, and parents in our supported regions. Our mission is equitable access to quality education, and cost should never be a barrier.',
      },
      {
        q: 'What grades and subjects are available?',
        a: 'We offer 330 standards-aligned modules covering Math and ELA from Kindergarten through 12th grade, organized into three bands: K-5, 6-8, and 9-12.',
      },
    ],
  },
  {
    title: 'For Students',
    questions: [
      {
        q: 'How does the NAANO AI tutor work?',
        a: 'NAANO is your personal AI tutor. You can type or speak to it, and it responds with explanations, practice problems, and hints tailored to your grade level and cultural background. It uses your curriculum modules to give accurate, relevant answers.',
      },
      {
        q: 'Can I use EdEquity AI without internet?',
        a: 'Yes! Download your modules at school or anywhere with Wi-Fi, then study at home — even with no connection. Your progress saves locally and syncs automatically when you\u2019re back online.',
      },
      {
        q: 'What are XP and streaks?',
        a: 'XP (experience points) are earned by completing modules and practice problems. Streaks track how many consecutive days you\u2019ve studied. Both reward consistency and help you see your growth over time.',
      },
      {
        q: 'How does the hint system work?',
        a: 'When you\u2019re stuck on a problem, you can request up to three levels of hints — from a gentle nudge to a detailed walkthrough. If you\u2019re still stuck after all three hints, the answer is revealed with a full explanation.',
      },
    ],
  },
  {
    title: 'For Teachers',
    questions: [
      {
        q: 'How do I see my students\u2019 progress?',
        a: 'Your Teacher Dashboard shows each student\u2019s mastery levels, module completion, streaks, and at-risk/on-track/excelling status. You can filter by subject and export class data as CSV.',
      },
      {
        q: 'Can I assign specific modules?',
        a: 'Yes. Use the Module Picker in your dashboard to assign modules to individual students or your entire class. Students will see assigned modules highlighted in their dashboard.',
      },
      {
        q: 'Can I see student conversations with the tutor?',
        a: 'No. Student conversations with NAANO are private by design. You can see progress metrics, mastery data, and module completion — but never the content of tutor conversations. This protects student trust and encourages honest learning.',
      },
    ],
  },
  {
    title: 'For Parents',
    questions: [
      {
        q: 'How do I link to my child\u2019s account?',
        a: 'During your child\u2019s registration, they provide your email address. You\u2019ll receive a verification email to confirm the link. Once verified, your Parent Dashboard shows your child\u2019s progress.',
      },
      {
        q: 'What can I see on the Parent Dashboard?',
        a: 'You can see weekly summaries including study time, modules completed, streaks, XP earned, and top subjects. You\u2019ll also see achievement badges and an activity feed — all read-only.',
      },
      {
        q: 'Is my child\u2019s data safe?',
        a: 'Absolutely. EdEquity AI is COPPA and FERPA compliant. Students under 13 require verified parental consent. All data is encrypted, never sold, and you can request deletion at any time.',
      },
    ],
  },
  {
    title: 'Technical',
    questions: [
      {
        q: 'What devices does EdEquity AI work on?',
        a: 'EdEquity AI works on any device with a modern web browser — phones, tablets, Chromebooks, laptops, and desktops. It\u2019s a Progressive Web App (PWA), so you can install it on your home screen for an app-like experience.',
      },
      {
        q: 'How does offline sync work?',
        a: 'When you download modules, they\u2019re stored locally using IndexedDB. Your progress is saved to local storage while offline. When you reconnect, the sync engine automatically uploads your progress with conflict resolution to prevent data loss.',
      },
      {
        q: 'What if I have very slow internet?',
        a: 'EdEquity AI is built for low-bandwidth environments. Download modules when you have a good connection (like at school or a library), then work offline at home. The sync process is lightweight and works on 2G connections.',
      },
    ],
  },
]

export default function HelpPage() {
  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Help Center
        </h1>
        <p className="mb-12 text-center font-sans text-lg text-muted-foreground">
          Everything you need to know about using EdEquity AI.
        </p>

        <div className="space-y-8">
          {FAQ_SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.questions.map((item) => (
                  <ClayCard key={item.q} size="sm">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between font-serif text-base font-bold text-foreground [&::-webkit-details-marker]:hidden">
                        {item.q}
                        <span className="ml-2 text-muted-foreground transition-transform group-open:rotate-180">
                          ▾
                        </span>
                      </summary>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </details>
                  </ClayCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
