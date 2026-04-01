import { cn } from '@/lib/utils'

interface ProgressRingProps {
  percent: number
  label?: string
  color?: string
  size?: number
  strokeWidth?: number
  className?: string
}

export function ProgressRing({
  percent,
  label,
  color = 'var(--primary)',
  size = 80,
  strokeWidth = 8,
  className,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <svg
        width={size}
        height={size}
        className="animate-progress-fill"
        style={{ '--progress-offset': `${offset}` } as React.CSSProperties}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--muted)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="transition-all duration-1000 ease-out"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-foreground font-semibold"
          fontSize={size * 0.2}
        >
          {percent}%
        </text>
      </svg>
      {label && (
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
      )}
    </div>
  )
}
