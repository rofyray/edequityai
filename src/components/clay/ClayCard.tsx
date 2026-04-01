import { cn } from '@/lib/utils'

interface ClayCardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
  accent?: string
  elevation?: 'default' | 'raised'
}

export function ClayCard({
  className,
  size = 'md',
  elevation = 'default',
  children,
  ...props
}: ClayCardProps) {
  return (
    <div
      className={cn(
        'rounded-clay bg-card text-card-foreground',
        elevation === 'default' ? 'shadow-clay' : 'shadow-clay-sm',
        size === 'sm' && 'p-4',
        size === 'md' && 'p-6',
        size === 'lg' && 'p-8',
        className
      )}
      style={{
        background: `linear-gradient(135deg, color-mix(in srgb, var(--card) 95%, white 5%) 0%, var(--card) 60%)`,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
