import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { generateClassCSV } from '@/lib/progress/export-csv'

export async function GET(req: NextRequest) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.user_metadata?.role !== 'teacher') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const format = req.nextUrl.searchParams.get('format') ?? 'csv'

  // Fetch roster data by calling the roster logic inline
  const rosterResponse = await fetch(
    `${req.nextUrl.origin}/api/teacher/roster`,
    { headers: { cookie: req.headers.get('cookie') ?? '' } }
  )

  if (!rosterResponse.ok) {
    return NextResponse.json({ error: 'Failed to fetch roster' }, { status: 500 })
  }

  const roster = await rosterResponse.json()

  if (format === 'csv') {
    const csv = generateClassCSV(roster.students)
    return new Response(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="class-progress.csv"',
      },
    })
  }

  // PDF format — redirect to individual exports (class-level PDF is a future enhancement)
  return NextResponse.json({ error: 'PDF class export coming soon. Use CSV for now.' }, { status: 501 })
}
