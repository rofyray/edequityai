import Link from 'next/link'
import { ClayCard, ClayButton } from '@/components/clay'

const ROLES = [
  {
    emoji: '🎒',
    title: 'Students',
    description:
      'Learn at your own pace with an AI tutor who understands where you come from. Earn XP, build streaks, and master your subjects \u2014 your way.',
    cta: 'Start Learning',
    href: '/register?role=student',
  },
  {
    emoji: '📋',
    title: 'Teachers',
    description:
      'Track your class, assign modules, identify at-risk students, and export progress reports. Student conversations stay private \u2014 always.',
    cta: 'Set Up Your Class',
    href: '/register?role=teacher',
  },
  {
    emoji: '👨\u200D👩\u200D👧',
    title: 'Parents',
    description:
      'See how your child is doing with weekly summaries, achievement showcases, and activity feeds. Read-only and completely private.',
    cta: 'Connect to Your Child',
    href: '/register?role=parent',
  },
]

export function WhoItsForSection() {
  return (
    <section id="who-its-for" className="scroll-mt-20 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Made for everyone in the learning journey
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center font-sans text-lg text-muted-foreground">
          Whether you&apos;re studying, teaching, or supporting from home &mdash;
          EdEquity AI has a place for you.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {ROLES.map((role) => (
            <ClayCard key={role.title} size="lg" className="text-center">
              <div className="mb-4 text-5xl" role="img" aria-label={role.title}>
                {role.emoji}
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">
                {role.title}
              </h3>
              <p className="mb-6 font-sans text-muted-foreground">
                {role.description}
              </p>
              <ClayButton asChild>
                <Link href={role.href}>{role.cta}</Link>
              </ClayButton>
            </ClayCard>
          ))}
        </div>
      </div>
    </section>
  )
}
