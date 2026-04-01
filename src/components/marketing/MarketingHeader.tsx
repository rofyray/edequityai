import Link from 'next/link'
import { ClayButton } from '@/components/clay'
import { MobileNav } from './MobileNav'

const NAV_LINKS = [
  { href: '/#features', label: 'Features' },
  { href: '/#who-its-for', label: 'Who It\'s For' },
  { href: '/#regions', label: 'Regions' },
  { href: '/help', label: 'Help' },
]

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl" role="img" aria-label="EdEquity AI logo">🌱</span>
          <span className="font-sans text-lg font-bold text-foreground">EdEquity AI</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <ClayButton variant="ghost" size="sm" asChild>
            <Link href="/login">Sign In</Link>
          </ClayButton>
          <ClayButton size="sm" asChild>
            <Link href="/register">Get Started</Link>
          </ClayButton>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
