import Link from 'next/link'
import { ClayButton } from '@/components/clay'

export function CTASection() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 text-5xl" role="img" aria-label="Seedling">
          🌱
        </div>
        <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Ready to grow?
        </h2>
        <p className="mb-8 font-sans text-lg text-muted-foreground">
          Join students, teachers, and parents building equitable education together.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <ClayButton size="lg" asChild>
            <Link href="/register">Create Your Account</Link>
          </ClayButton>
          <ClayButton variant="secondary" size="lg" asChild>
            <Link href="/login">Sign In</Link>
          </ClayButton>
        </div>
      </div>
    </section>
  )
}
