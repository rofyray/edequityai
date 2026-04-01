import { cn } from '@/lib/utils'

type Region = 'appalachia' | 'delta' | 'tribal'

interface RegionPillProps {
  region: Region
  className?: string
}

const regionConfig: Record<Region, { label: string; color: string }> = {
  appalachia: { label: 'Appalachia', color: 'bg-[#7da67c] text-white' },
  delta: { label: 'Mississippi Delta', color: 'bg-[#5c8ab5] text-white' },
  tribal: { label: 'Tribal Lands', color: 'bg-[#b5845c] text-white' },
}

export function RegionPill({ region, className }: RegionPillProps) {
  const config = regionConfig[region]

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1',
        'text-sm font-semibold shadow-clay-sm',
        config.color,
        className
      )}
    >
      {config.label}
    </span>
  )
}
