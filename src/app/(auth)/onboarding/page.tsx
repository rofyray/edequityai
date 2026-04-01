'use client'

import { useState, useEffect } from 'react'
import { ClayCard, ClayButton, RegionPill } from '@/components/clay'
import { ONBOARDING_STEPS, TOTAL_STEPS } from '@/lib/auth/onboarding'
import { showToast } from '@/lib/toast'
import { GRADES, REGIONS, STATE_NAMES, DIALECT_OPTIONS } from '@/lib/constants/student-options'

interface OnboardingData {
  grade?: number
  region?: 'appalachia' | 'delta' | 'tribal'
  state?: string
  subjects?: ('math' | 'ela')[]
  dialectPreference?: string
  offlineDownloadPreference?: boolean
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [data, setData] = useState<OnboardingData>({})
  const [loading, setLoading] = useState(false)

  // Load saved onboarding state (runs once on mount)
  useEffect(() => {
    async function loadState() {
      try {
        const res = await fetch('/api/auth/onboarding')
        if (res.ok) {
          const saved = await res.json()
          if (saved.data) {
            const filtered: Record<string, unknown> = {}
            for (const [key, value] of Object.entries(saved.data)) {
              if (value != null) filtered[key] = value
            }
            setData(filtered as OnboardingData)
          }
          if (saved.nextStep) {
            if (saved.nextStep > TOTAL_STEPS) {
              window.location.href = '/dashboard'
              return
            }
            setCurrentStep(saved.nextStep)
          }
        }
      } catch {
        // First time — start fresh
      }
    }
    loadState()
  }, [])

  function updateData(updates: Partial<OnboardingData>) {
    setData((prev) => ({ ...prev, ...updates }))
  }

  async function saveAndAdvance() {
    setLoading(true)
    try {
      const res = await fetch('/api/auth/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ step: currentStep, data }),
      })

      if (!res.ok) {
        throw new Error('Save failed')
      }

      if (currentStep >= TOTAL_STEPS) {
        showToast.success("You're all set! Let's start learning")
        window.location.href = '/dashboard'
      } else {
        setCurrentStep((s) => s + 1)
      }
    } catch {
      showToast.warning('Could not save your progress, but you can continue')
      if (currentStep < TOTAL_STEPS) {
        setCurrentStep((s) => s + 1)
      }
    } finally {
      setLoading(false)
    }
  }

  const stepInfo = ONBOARDING_STEPS[currentStep - 1]

  // Safety: if step index is out of bounds, show nothing while redirecting
  if (!stepInfo) {
    return null
  }

  return (
    <ClayCard size="lg">
      {/* Step indicator */}
      <div className="mb-6 flex items-center justify-center gap-2">
        {ONBOARDING_STEPS.map((s) => (
          <div
            key={s.step}
            data-testid={`step-indicator-${s.step}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              s.step < currentStep
                ? 'bg-primary'
                : s.step === currentStep
                ? 'bg-primary animate-pulse-glow'
                : 'bg-muted'
            }`}
          />
        ))}
      </div>

      <p className="text-sm text-muted-foreground text-center mb-1">
        Step {currentStep} of {TOTAL_STEPS}
      </p>
      <h2 className="font-sans text-xl font-bold text-center mb-2">{stepInfo.label}</h2>
      <p className="font-serif text-muted-foreground text-center mb-6">{stepInfo.description}</p>

      {/* Step 1: Grade */}
      {currentStep === 1 && (
        <div className="grid grid-cols-3 gap-2">
          {GRADES.map((g) => (
            <ClayButton
              key={g.value}
              variant={data.grade === g.value ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => updateData({ grade: g.value })}
            >
              {g.label}
            </ClayButton>
          ))}
        </div>
      )}

      {/* Step 2: Region + State */}
      {currentStep === 2 && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {REGIONS.map((r) => (
              <ClayButton
                key={r.value}
                variant={data.region === r.value ? 'primary' : 'secondary'}
                size="md"
                onClick={() => updateData({ region: r.value, state: undefined })}
                className="justify-start"
              >
                <RegionPill region={r.value} className="mr-2" />
                {r.label}
              </ClayButton>
            ))}
          </div>

          {data.region && (
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm font-medium text-foreground">Select your state:</p>
              {REGIONS.find((r) => r.value === data.region)?.states.map((s) => (
                <ClayButton
                  key={s}
                  variant={data.state === s ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => updateData({ state: s })}
                >
                  {STATE_NAMES[s]}
                </ClayButton>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Step 3: Subjects */}
      {currentStep === 3 && (
        <div className="flex flex-col gap-3">
          {(['math', 'ela'] as const).map((subject) => {
            const selected = data.subjects?.includes(subject) ?? false
            return (
              <ClayButton
                key={subject}
                variant={selected ? 'primary' : 'secondary'}
                size="md"
                onClick={() => {
                  const current = data.subjects || []
                  const next = selected
                    ? current.filter((s) => s !== subject)
                    : [...current, subject]
                  updateData({ subjects: next.length > 0 ? next : [subject] })
                }}
              >
                {subject === 'math' ? 'Mathematics' : 'English Language Arts'}
              </ClayButton>
            )
          })}
          <p className="text-xs text-muted-foreground text-center mt-1">
            Select one or both subjects
          </p>
        </div>
      )}

      {/* Step 4: Dialect / Voice preference */}
      {currentStep === 4 && (
        <div className="flex flex-col gap-2">
          {DIALECT_OPTIONS.map((d) => (
            <ClayButton
              key={d.value}
              variant={data.dialectPreference === d.value ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => updateData({ dialectPreference: d.value })}
            >
              {d.label}
            </ClayButton>
          ))}
          <p className="text-xs text-muted-foreground text-center mt-1">
            This helps NAANO understand and speak with you better
          </p>
        </div>
      )}

      {/* Step 5: Offline download preference */}
      {currentStep === 5 && (
        <div className="flex flex-col gap-3">
          <ClayButton
            variant={data.offlineDownloadPreference === true ? 'primary' : 'secondary'}
            size="md"
            onClick={() => updateData({ offlineDownloadPreference: true })}
          >
            Yes, download lessons for offline use
          </ClayButton>
          <ClayButton
            variant={data.offlineDownloadPreference === false ? 'primary' : 'secondary'}
            size="md"
            onClick={() => updateData({ offlineDownloadPreference: false })}
          >
            No, I&apos;ll use online mode
          </ClayButton>
          <p className="text-xs text-muted-foreground text-center mt-1">
            Offline mode lets you learn even without internet. You can change this later.
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        {currentStep > 1 ? (
          <ClayButton
            variant="ghost"
            size="sm"
            onClick={() => setCurrentStep((s) => s - 1)}
          >
            Back
          </ClayButton>
        ) : (
          <div />
        )}

        <ClayButton
          size="sm"
          onClick={saveAndAdvance}
          disabled={loading || !isStepValid(currentStep, data)}
        >
          {loading
            ? 'Saving...'
            : currentStep >= TOTAL_STEPS
            ? 'Get Started'
            : 'Next'}
        </ClayButton>
      </div>
    </ClayCard>
  )
}

function isStepValid(step: number, data: OnboardingData): boolean {
  switch (step) {
    case 1: return data.grade !== undefined
    case 2: return !!data.region && !!data.state
    case 3: return (data.subjects?.length ?? 0) > 0
    case 4: return !!data.dialectPreference
    case 5: return data.offlineDownloadPreference !== undefined
    default: return false
  }
}
