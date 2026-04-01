import type { StudentStatus } from '../dashboard/teacher-types'

/**
 * Generate a CSV string for class-level progress export.
 */
export function generateClassCSV(students: StudentStatus[]): string {
  const headers = [
    'Name',
    'Grade',
    'Region',
    'Math Mastery %',
    'ELA Mastery %',
    'Modules Completed',
    'Avg Score',
    'Status',
    'Last Active',
  ]

  const rows = students.map((s) => {
    const avgScore =
      s.recentScores.length > 0
        ? Math.round(s.recentScores.reduce((a, b) => a + b, 0) / s.recentScores.length)
        : 0

    return [
      escapeCsvField(s.fullName),
      s.grade === 0 ? 'K' : String(s.grade),
      s.region,
      String(s.mastery.math),
      String(s.mastery.ela),
      String(s.modulesCompleted),
      String(avgScore),
      s.status,
      s.lastActive ? new Date(s.lastActive).toLocaleDateString() : 'Never',
    ]
  })

  return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')
}

function escapeCsvField(field: string): string {
  if (field.includes(',') || field.includes('"') || field.includes('\n')) {
    return `"${field.replace(/"/g, '""')}"`
  }
  return field
}
