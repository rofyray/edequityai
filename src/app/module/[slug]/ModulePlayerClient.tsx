'use client'

import { useEffect, useCallback } from 'react'
import { useModulePlayerStore } from '@/lib/stores/module-player-store'
import { createAutoSave } from '@/lib/module-player/auto-save'
import { SmartSaveTransport } from '@/lib/offline/transport'
import { initSyncEngine } from '@/lib/offline/sync-engine'
import { ModuleHeader } from '@/components/module/ModuleHeader'
import { IntroView } from '@/components/module/IntroView'
import { SegmentView } from '@/components/module/SegmentView'
import { PracticeView } from '@/components/module/PracticeView'
import { AssessmentView } from '@/components/module/AssessmentView'
import { CompletionView } from '@/components/module/CompletionView'
import { ModuleNavigation } from '@/components/module/ModuleNavigation'
import type { ModuleContent } from '@/lib/ingestion/types'
import type { ExistingProgress } from '@/types/module-player'

interface ModulePlayerClientProps {
  moduleId: string
  moduleSlug: string
  moduleTitle: string
  moduleDescription: string
  moduleContent: ModuleContent
  xpReward: number
  sessionId: string
  existingProgress?: ExistingProgress
}

export function ModulePlayerClient({
  moduleId,
  moduleSlug,
  moduleTitle,
  moduleDescription,
  moduleContent,
  xpReward,
  sessionId,
  existingProgress,
}: ModulePlayerClientProps) {
  const store = useModulePlayerStore()

  // Initialize store on mount
  useEffect(() => {
    store.initialize(moduleId, moduleSlug, moduleContent, xpReward, sessionId, existingProgress)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleId])

  // Auto-save subscription (SmartSaveTransport: online → fetch, offline → IndexedDB)
  useEffect(() => {
    const transport = new SmartSaveTransport(moduleId)
    const autoSave = createAutoSave(transport, 500)

    const unsubscribe = useModulePlayerStore.subscribe((state) => {
      if (state.phase !== 'intro' && state.phase !== 'complete') {
        autoSave(state.getSnapshot())
      }
    })

    return unsubscribe
  }, [moduleId])

  // Sync engine: uploads queued offline events when reconnecting
  useEffect(() => {
    const { cleanup } = initSyncEngine()
    return cleanup
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') store.nextStep()
      if (e.key === 'ArrowLeft') store.prevStep()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [store])

  // Calculate progress percentage
  const calculateProgress = useCallback(() => {
    const content = store.moduleContent
    if (!content) return 0

    const totalSteps = 1 + content.segments.length + content.practice.length + content.assessment.questions.length + 1
    let completed = 0

    if (store.phase !== 'intro') completed += 1 // intro done
    if (store.phase === 'segment') completed += store.segmentIndex
    if (store.phase === 'practice') {
      completed += content.segments.length
      completed += store.practiceIndex
    }
    if (store.phase === 'assessment') {
      completed += content.segments.length + content.practice.length
      completed += store.assessmentIndex
    }
    if (store.phase === 'complete') completed = totalSteps

    return (completed / totalSteps) * 100
  }, [store.phase, store.segmentIndex, store.practiceIndex, store.assessmentIndex, store.moduleContent])

  // Navigation guards
  const canGoBack = store.phase === 'segment' || store.phase === 'practice' || (store.phase === 'assessment' && store.assessmentIndex > 0)

  const canGoForward = (() => {
    if (store.phase === 'segment') return true
    if (store.phase === 'practice') {
      const currentState = store.practiceStates[store.practiceIndex]
      return currentState?.isCorrect !== null // must have answered
    }
    if (store.phase === 'assessment') {
      const currentState = store.assessmentStates[store.assessmentIndex]
      return currentState?.isCorrect !== null
    }
    return false
  })()

  if (!store.moduleContent) return null

  return (
    <div className="flex flex-col h-screen bg-background">
      <ModuleHeader title={moduleTitle} progress={calculateProgress()} />

      <main className="flex-1 overflow-y-auto">
        {store.phase === 'intro' && (
          <IntroView
            intro={store.moduleContent.intro}
            description={moduleDescription}
            onStart={() => store.nextStep()}
          />
        )}

        {store.phase === 'segment' && store.moduleContent.segments[store.segmentIndex] && (
          <SegmentView
            segment={store.moduleContent.segments[store.segmentIndex]}
            segmentIndex={store.segmentIndex}
            totalSegments={store.moduleContent.segments.length}
          />
        )}

        {store.phase === 'practice' && (
          <PracticeView
            questions={store.moduleContent.practice}
            states={store.practiceStates}
            currentIndex={store.practiceIndex}
            onSelectAnswer={(i, a) => store.selectAnswer(i, a, true)}
            onSubmit={(i) => store.submitAnswer(i, true)}
            onRequestHint={(i) => store.requestHint(i)}
          />
        )}

        {store.phase === 'assessment' && (
          <AssessmentView
            questions={store.moduleContent.assessment.questions}
            states={store.assessmentStates}
            currentIndex={store.assessmentIndex}
            onSelectAnswer={(i, a) => store.selectAnswer(i, a, false)}
            onSubmit={(i) => store.submitAnswer(i, false)}
          />
        )}

        {store.phase === 'complete' && (
          <CompletionView
            score={store.score ?? 0}
            completionResult={store.completionResult}
            onReview={() => store.initialize(moduleId, moduleSlug, moduleContent, xpReward, sessionId)}
          />
        )}

        {store.error && (
          <div className="max-w-md mx-auto px-4 py-2">
            <div className="bg-destructive/10 text-destructive rounded-lg px-4 py-2 text-sm text-center">
              {store.error}
            </div>
          </div>
        )}
      </main>

      <ModuleNavigation
        phase={store.phase}
        canGoBack={canGoBack}
        canGoForward={canGoForward}
        onBack={() => store.prevStep()}
        onNext={() => store.nextStep()}
      />
    </div>
  )
}
