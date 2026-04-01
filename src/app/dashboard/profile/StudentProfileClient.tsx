'use client'

import { useState } from 'react'
import { ClayCard, ClayButton, ClayInput, RegionPill } from '@/components/clay'
import { StreakCounter, XPCounter } from '@/components/dashboard'
import { showToast } from '@/lib/toast'
import {
  GRADES,
  STATE_NAMES,
  DIALECT_OPTIONS,
  SUBJECT_OPTIONS,
} from '@/lib/constants/student-options'
import { ArrowLeft } from 'lucide-react'

interface StudentProfileProps {
  studentId: string
  fullName: string
  email: string
  grade: number
  region: 'appalachia' | 'delta' | 'tribal'
  state: string
  subjects: ('math' | 'ela')[]
  dialectPreference: string
  offlineDownloadPreference: boolean
  streakDays: number
  xpTotal: number
  memberSince: string
}

export function StudentProfileClient({
  studentId,
  fullName: initialName,
  email,
  grade,
  region,
  state,
  subjects: initialSubjects,
  dialectPreference: initialDialect,
  offlineDownloadPreference: initialOffline,
  streakDays,
  xpTotal,
  memberSince,
}: StudentProfileProps) {
  const [fullName, setFullName] = useState(initialName)
  const [subjects, setSubjects] = useState<('math' | 'ela')[]>(initialSubjects)
  const [dialectPreference, setDialectPreference] = useState(initialDialect)
  const [offlineDownloadPreference, setOfflineDownloadPreference] = useState(initialOffline)
  const [saving, setSaving] = useState(false)

  const hasChanges =
    fullName !== initialName ||
    JSON.stringify(subjects.sort()) !== JSON.stringify([...initialSubjects].sort()) ||
    dialectPreference !== initialDialect ||
    offlineDownloadPreference !== initialOffline

  async function handleSave() {
    setSaving(true)
    try {
      const res = await fetch(`/api/student/${studentId}/profile`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          subjects,
          dialectPreference,
          offlineDownloadPreference,
        }),
      })

      if (!res.ok) throw new Error()
      showToast.success('Profile updated!')
    } catch {
      showToast.error('Could not save your changes. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  function toggleSubject(subject: 'math' | 'ela') {
    setSubjects((prev) => {
      const has = prev.includes(subject)
      if (has && prev.length === 1) return prev // keep at least 1
      return has ? prev.filter((s) => s !== subject) : [...prev, subject]
    })
  }

  const gradeLabel = GRADES.find((g) => g.value === grade)?.label ?? `Grade ${grade}`
  const stateLabel = STATE_NAMES[state] ?? state
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(memberSince))

  return (
    <div className="flex flex-col gap-6">
      {/* Back link */}
      <a
        href="/dashboard"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </a>

      <h2 className="font-sans text-2xl font-bold text-foreground">My Profile</h2>

      {/* Section 1: Identity (read-only) */}
      <ClayCard>
        <h3 className="font-sans text-lg font-bold text-foreground mb-4">Account Info</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Email</p>
            <p className="text-sm font-medium text-foreground">{email}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Grade</p>
            <p className="text-sm font-medium text-foreground">{gradeLabel}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Region</p>
            <RegionPill region={region} />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">State</p>
            <p className="text-sm font-medium text-foreground">{stateLabel}</p>
          </div>
        </div>
      </ClayCard>

      {/* Section 2: Editable Preferences */}
      <ClayCard>
        <h3 className="font-sans text-lg font-bold text-foreground mb-4">Preferences</h3>
        <div className="flex flex-col gap-5">
          {/* Full Name */}
          <ClayInput
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            maxLength={100}
          />

          {/* Subjects */}
          <div className="flex flex-col gap-1.5">
            <p className="font-serif text-sm font-medium text-foreground">Subjects</p>
            <div className="flex gap-2">
              {SUBJECT_OPTIONS.map((s) => (
                <ClayButton
                  key={s.value}
                  variant={subjects.includes(s.value) ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => toggleSubject(s.value)}
                >
                  {s.label}
                </ClayButton>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">Select one or both subjects</p>
          </div>

          {/* Dialect Preference */}
          <div className="flex flex-col gap-1.5">
            <p className="font-serif text-sm font-medium text-foreground">Voice Preference</p>
            <div className="flex flex-wrap gap-2">
              {DIALECT_OPTIONS.map((d) => (
                <ClayButton
                  key={d.value}
                  variant={dialectPreference === d.value ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setDialectPreference(d.value)}
                >
                  {d.label}
                </ClayButton>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              This helps NAANO understand and speak with you better
            </p>
          </div>

          {/* Offline Download Preference */}
          <div className="flex flex-col gap-1.5">
            <p className="font-serif text-sm font-medium text-foreground">Offline Mode</p>
            <div className="flex gap-2">
              <ClayButton
                variant={offlineDownloadPreference ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setOfflineDownloadPreference(true)}
              >
                Download for offline
              </ClayButton>
              <ClayButton
                variant={!offlineDownloadPreference ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setOfflineDownloadPreference(false)}
              >
                Online only
              </ClayButton>
            </div>
          </div>

          {/* Save button */}
          <div className="pt-2">
            <ClayButton
              onClick={handleSave}
              disabled={!hasChanges || saving || fullName.trim().length < 2}
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </ClayButton>
          </div>
        </div>
      </ClayCard>

      {/* Section 3: Stats */}
      <ClayCard>
        <h3 className="font-sans text-lg font-bold text-foreground mb-4">Stats</h3>
        <div className="grid grid-cols-2 gap-3">
          <StreakCounter days={streakDays} />
          <XPCounter xp={xpTotal} />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Member since {formattedDate}
        </p>
      </ClayCard>
    </div>
  )
}
