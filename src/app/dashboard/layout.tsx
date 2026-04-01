import { requireStudent } from '@/lib/auth/guard'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { UserMenu } from '@/components/UserMenu'

export default async function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = await requireStudent()
  const supabase = await createServerSupabaseClient()
  const { data: profile } = await supabase
    .from('users')
    .select('full_name')
    .eq('id', user.id)
    .single()

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 px-4 py-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <h1 className="font-sans text-lg font-bold text-foreground flex items-center gap-2">
            <span className="text-xl" role="img" aria-label="EdEquity AI logo">🌱</span>
            EdEquity AI
          </h1>
          <nav className="flex items-center gap-4">
            <a href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Dashboard
            </a>
            <a href="/tutor" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              NAANO Tutor
            </a>
            <UserMenu
              userName={profile?.full_name ?? user.email ?? 'Student'}
              role="student"
              profileHref="/dashboard/profile"
            />
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl p-4">
        {children}
      </main>
    </div>
  )
}
