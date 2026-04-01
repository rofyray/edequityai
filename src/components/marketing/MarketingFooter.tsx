import Link from 'next/link'

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-card/50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="text-2xl" role="img" aria-label="EdEquity AI logo">🌱</span>
              <span className="font-sans text-lg font-bold text-foreground">EdEquity AI</span>
            </div>
            <p className="font-sans text-sm text-muted-foreground">
              Culturally-adaptive K-12 learning for every child.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-3 font-serif text-sm font-bold uppercase tracking-wider text-foreground">
              Product
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Features
              </Link>
              <Link href="/register?role=student" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                For Students
              </Link>
              <Link href="/register?role=teacher" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                For Teachers
              </Link>
              <Link href="/register?role=parent" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                For Parents
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 font-serif text-sm font-bold uppercase tracking-wider text-foreground">
              Legal
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/help" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Help Center
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-3 font-serif text-sm font-bold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <p className="text-sm text-muted-foreground">
              Built for communities that need it most.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} EdEquity AI. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            EdEquity AI is FERPA and COPPA compliant. Student data is never sold.
          </p>
        </div>
      </div>
    </footer>
  )
}
