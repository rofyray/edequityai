import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

interface ClayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const ClayButton = forwardRef<HTMLButtonElement, ClayButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-clay-btn font-semibold',
          'shadow-clay transition-all duration-100',
          'active:translate-y-[3px] active:shadow-clay-pressed',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          'min-h-[44px] min-w-[44px]',
          // Variants
          variant === 'primary' && 'bg-primary text-primary-foreground hover:opacity-90',
          variant === 'secondary' && 'bg-secondary text-secondary-foreground hover:opacity-90',
          variant === 'ghost' && 'bg-transparent shadow-none hover:bg-muted active:shadow-none',
          variant === 'destructive' && 'bg-destructive text-destructive-foreground hover:opacity-90',
          // Sizes
          size === 'sm' && 'px-4 py-2 text-sm',
          size === 'md' && 'px-7 py-3.5 text-base',
          size === 'lg' && 'px-10 py-4 text-lg',
          className
        )}
        {...props}
      />
    )
  }
)
ClayButton.displayName = 'ClayButton'

export { ClayButton }
