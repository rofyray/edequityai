'use client'

import { useState, useEffect, useCallback } from 'react'
import { Download, FileText } from 'lucide-react'
import { ClayButton } from '@/components/clay/ClayButton'
import { StudentCard } from '@/components/teacher/StudentCard'
import { ClassStats } from '@/components/teacher/ClassStats'
import { SubjectFilter } from '@/components/teacher/SubjectFilter'
import { RegionMap } from '@/components/teacher/RegionMap'
import { ModulePicker } from '@/components/teacher/ModulePicker'
import type { TeacherClassRoster, StudentStatus } from '@/lib/dashboard/teacher-types'

interface TeacherDashboardClientProps {
  teacherId: string
}

export function TeacherDashboardClient({ teacherId }: TeacherDashboardClientProps) {
  const [roster, setRoster] = useState<TeacherClassRoster | null>(null)
  const [loading, setLoading] = useState(true)
  const [subject, setSubject] = useState<'all' | 'math' | 'ela'>('all')
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [assigningStudent, setAssigningStudent] = useState<StudentStatus | null>(null)

  const fetchRoster = useCallback(async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (subject !== 'all') params.set('subject', subject)

    const res = await fetch(`/api/teacher/roster?${params}`)
    if (res.ok) {
      setRoster(await res.json())
    }
    setLoading(false)
  }, [subject])

  useEffect(() => {
    fetchRoster()
  }, [fetchRoster])

  const handleAssign = async (studentId: string, moduleId: string) => {
    await fetch('/api/teacher/assignments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentIds: [studentId], moduleId }),
    })
    setAssigningStudent(null)
  }

  const handleExportCSV = () => {
    window.open('/api/teacher/class/export?format=csv', '_blank')
  }

  return (
    <div className="space-y-6">
      {/* Stats bar */}
      {roster && <ClassStats stats={roster.stats} />}

      {/* Toolbar */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <SubjectFilter value={subject} onChange={setSubject} />
        <div className="flex gap-2">
          <ClayButton variant="secondary" size="sm" onClick={handleExportCSV}>
            <Download className="h-4 w-4 mr-1" />
            Export CSV
          </ClayButton>
        </div>
      </div>

      {/* Student roster */}
      {loading ? (
        <p className="text-sm text-muted-foreground text-center py-8">Loading class roster...</p>
      ) : roster && roster.students.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roster.students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onClick={() => setAssigningStudent(student)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No students assigned to your class yet.</p>
          <p className="text-xs text-muted-foreground mt-1">
            Students are assigned by administrators.
          </p>
        </div>
      )}

      {/* Region map for curriculum browsing */}
      <RegionMap
        onRegionClick={setSelectedRegion}
        selectedRegion={selectedRegion}
      />

      {/* Privacy notice */}
      <p className="text-xs text-muted-foreground text-center" data-testid="privacy-notice">
        AI conversation history is private to each student and not accessible to teachers.
      </p>

      {/* Module picker modal */}
      {assigningStudent && (
        <ModulePicker
          studentId={assigningStudent.id}
          studentName={assigningStudent.fullName}
          onAssign={handleAssign}
          onClose={() => setAssigningStudent(null)}
        />
      )}
    </div>
  )
}
