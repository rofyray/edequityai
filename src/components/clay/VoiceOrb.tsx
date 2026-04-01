import { cn } from '@/lib/utils'
import { Mic, Loader2, Square } from 'lucide-react'

interface VoiceOrbProps {
  state: 'idle' | 'listening' | 'processing'
  onClick?: () => void
  className?: string
}

export function VoiceOrb({ state, onClick, className }: VoiceOrbProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center justify-center rounded-full shadow-clay',
        'min-h-[56px] min-w-[56px] transition-all duration-200',
        'active:translate-y-[3px] active:shadow-clay-pressed',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        state === 'idle' && 'bg-primary text-primary-foreground',
        state === 'listening' && 'bg-destructive text-destructive-foreground animate-pulse-glow',
        state === 'processing' && 'bg-muted text-muted-foreground pointer-events-none',
        className
      )}
      aria-label={
        state === 'idle' ? 'Start recording' :
        state === 'listening' ? 'Stop recording' :
        'Processing audio'
      }
    >
      {state === 'idle' && <Mic className="h-6 w-6" />}
      {state === 'listening' && <Square className="h-5 w-5" />}
      {state === 'processing' && <Loader2 className="h-6 w-6 animate-spin" />}
    </button>
  )
}
