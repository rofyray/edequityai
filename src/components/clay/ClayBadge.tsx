import { cn } from '@/lib/utils'

interface ClayBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: 'success' | 'warn' | 'info' | 'destructive'
}

export function ClayBadge({
  className,
  color = 'info',
  children,
  ...props
}: ClayBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1',
        'text-sm font-semibold shadow-clay-sm',
        color === 'success' && 'bg-[#7da67c] text-white',
        color === 'warn' && 'bg-[#c0a050] text-white',
        color === 'info' && 'bg-primary text-primary-foreground',
        color === 'destructive' && 'bg-destructive text-destructive-foreground',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
