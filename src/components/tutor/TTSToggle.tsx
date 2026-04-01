'use client'

import { Volume2, VolumeX } from 'lucide-react'
import { ClayButton } from '../clay/ClayButton'
import { useTutorStore } from '@/lib/stores/tutor-store'

export function TTSToggle() {
  const { ttsEnabled, toggleTTS } = useTutorStore()

  return (
    <ClayButton
      variant="ghost"
      size="sm"
      onClick={toggleTTS}
      aria-label={ttsEnabled ? 'Disable voice responses' : 'Enable voice responses'}
    >
      {ttsEnabled ? (
        <Volume2 className="h-4 w-4 mr-1" />
      ) : (
        <VolumeX className="h-4 w-4 mr-1" />
      )}
      {ttsEnabled ? 'Voice On' : 'Voice Off'}
    </ClayButton>
  )
}
