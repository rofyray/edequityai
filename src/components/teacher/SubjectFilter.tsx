'use client'

interface SubjectFilterProps {
  value: 'all' | 'math' | 'ela'
  onChange: (value: 'all' | 'math' | 'ela') => void
}

export function SubjectFilter({ value, onChange }: SubjectFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as 'all' | 'math' | 'ela')}
      className="text-sm bg-card border border-border rounded-lg px-3 py-2 shadow-clay"
      aria-label="Filter by subject"
    >
      <option value="all">All Subjects</option>
      <option value="math">Math</option>
      <option value="ela">ELA</option>
    </select>
  )
}
