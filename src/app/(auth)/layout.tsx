import Link from 'next/link'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 justify-center">
            <span className="text-3xl" role="img" aria-label="EdEquity AI logo">🌱</span>
            <h1 className="font-sans text-3xl font-bold text-foreground">EdEquity AI</h1>
          </Link>
          <p className="mt-2 font-serif text-muted-foreground">
            Learning that meets you where you are
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}
