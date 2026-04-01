import Link from 'next/link'
import { ClayButton } from '@/components/clay'

export function HeroSection() {
  return (
    <section className="px-4 py-20 text-center md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-7xl md:text-8xl" role="img" aria-label="Seedling">
          🌱
        </div>

        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          Every child deserves a tutor who knows their world
        </h1>

        <p className="mx-auto mb-10 max-w-2xl font-sans text-lg text-muted-foreground md:text-xl">
          Culturally-adaptive AI learning for K-12 students in Appalachia,
          the Mississippi Delta, and Tribal lands &mdash; online or offline.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <ClayButton size="lg" asChild>
            <Link href="/register">Get Started Free</Link>
          </ClayButton>
          <ClayButton variant="secondary" size="lg" asChild>
            <Link href="#features">See How It Works</Link>
          </ClayButton>
        </div>
      </div>
    </section>
  )
}
