import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ClayInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

const ClayInput = forwardRef<HTMLInputElement, ClayInputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="font-serif text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'rounded-clay-input border-2 border-border bg-card px-4 py-3',
            'shadow-clay-sm font-serif text-base text-foreground',
            'placeholder:text-muted-foreground',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary',
            'min-h-[44px]',
            error && 'border-destructive focus:ring-destructive',
            className
          )}
          {...props}
        />
        {hint && !error && (
          <p className="text-sm text-muted-foreground">{hint}</p>
        )}
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    )
  }
)
ClayInput.displayName = 'ClayInput'

export { ClayInput }
