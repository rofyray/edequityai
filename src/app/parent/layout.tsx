import { requireParent } from '@/lib/auth/guard'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { UserMenu } from '@/components/UserMenu'

export default async function ParentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = await requireParent()
  const supabase = await createServerSupabaseClient()
  const { data: profile } = await supabase
    .from('users')
    .select('full_name')
    .eq('id', user.id)
    .single()

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 px-4 py-3">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <h1 className="font-sans text-lg font-bold text-foreground">EdEquity AI — Parent</h1>
          <nav className="flex items-center gap-4">
            <UserMenu
              userName={profile?.full_name ?? user.email ?? 'Parent'}
              role="parent"
            />
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-4xl p-4">
        {children}
      </main>
    </div>
  )
}
