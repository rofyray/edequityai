import { ClayCard } from '@/components/clay'

const FEATURES = [
  {
    emoji: '🧠',
    title: 'NAANO AI Tutor',
    description:
      'A voice-first AI tutor that speaks your student\u2019s dialect and knows their community. Ask questions, get explanations, practice problems \u2014 all in conversation.',
  },
  {
    emoji: '🌍',
    title: 'Cultural Adaptation',
    description:
      'Math problems about catfish farming in the Delta. Reading passages about Appalachian folk tales. Every lesson reflects your student\u2019s world.',
  },
  {
    emoji: '📡',
    title: 'Works Offline',
    description:
      'Download lessons at school, learn at home with no internet. Everything syncs automatically when you\u2019re back online. Built for rural connectivity.',
  },
  {
    emoji: '📚',
    title: 'Full K-12 Curriculum',
    description:
      '330 standards-aligned modules across Math and ELA, from Kindergarten through 12th grade. Three grade bands, two subjects, one platform.',
  },
  {
    emoji: '📊',
    title: 'Progress Tracking',
    description:
      'Real-time mastery tracking, adaptive difficulty, streak rewards, XP system, and PDF progress reports for teachers and parents.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-20 bg-muted/30 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Built for communities, not just classrooms
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center font-sans text-lg text-muted-foreground">
          Every feature is designed for the realities of rural education &mdash; limited
          connectivity, diverse cultures, and students who deserve more.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <ClayCard key={feature.title} size="md">
              <div className="mb-4 text-3xl" role="img" aria-label={feature.title}>
                {feature.emoji}
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="font-sans text-muted-foreground">
                {feature.description}
              </p>
            </ClayCard>
          ))}
        </div>
      </div>
    </section>
  )
}
