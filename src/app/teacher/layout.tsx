import { requireTeacher } from '@/lib/auth/guard'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { UserMenu } from '@/components/UserMenu'

export default async function TeacherLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = await requireTeacher()
  const supabase = await createServerSupabaseClient()
  const { data: profile } = await supabase
    .from('users')
    .select('full_name')
    .eq('id', user.id)
    .single()

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 px-4 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="font-sans text-lg font-bold text-foreground">EdEquity AI — Teacher</h1>
          <nav className="flex items-center gap-4">
            <a href="/teacher/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Class Dashboard
            </a>
            <UserMenu
              userName={profile?.full_name ?? user.email ?? 'Teacher'}
              role="teacher"
            />
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl p-4">
        {children}
      </main>
    </div>
  )
}
