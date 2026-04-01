'use client'

import { ClayCard } from '../clay/ClayCard'

// MVP state definitions per region
const REGION_DATA = {
  appalachia: {
    label: 'Appalachia',
    color: 'bg-amber-500',
    hoverColor: 'hover:bg-amber-400',
    mvpStates: ['NC', 'KY'],
    allStates: ['NC', 'KY', 'WV', 'TN', 'VA', 'PA', 'OH', 'GA', 'AL', 'SC', 'MD', 'NY', 'MS'],
  },
  delta: {
    label: 'Mississippi Delta',
    color: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-400',
    mvpStates: ['MS', 'AR'],
    allStates: ['MS', 'AR', 'LA', 'TN', 'AL', 'MO', 'KY', 'IL'],
  },
  tribal: {
    label: 'Tribal Lands',
    color: 'bg-emerald-500',
    hoverColor: 'hover:bg-emerald-400',
    mvpStates: ['OK', 'AZ'],
    allStates: ['OK', 'AZ', 'NM', 'SD', 'MT', 'ND', 'MN', 'WI', 'MI', 'WA', 'OR', 'CA'],
  },
} as const

interface RegionMapProps {
  onRegionClick: (region: string) => void
  selectedRegion: string | null
}

export function RegionMap({ onRegionClick, selectedRegion }: RegionMapProps) {
  return (
    <ClayCard className="p-4">
      <h3 className="text-sm font-semibold mb-3">Curriculum by Region</h3>
      <div className="grid grid-cols-3 gap-3" data-testid="region-map">
        {(Object.entries(REGION_DATA) as [string, (typeof REGION_DATA)[keyof typeof REGION_DATA]][]).map(
          ([key, region]) => (
            <button
              key={key}
              data-testid={`region-${key}`}
              onClick={() => onRegionClick(key)}
              className={`rounded-xl p-4 text-white text-center transition-all ${region.color} ${region.hoverColor} ${
                selectedRegion === key ? 'ring-2 ring-primary ring-offset-2 scale-105' : ''
              }`}
            >
              <p className="font-bold text-sm">{region.label}</p>
              <p className="text-xs opacity-80 mt-1">
                {region.mvpStates.join(', ')} (MVP)
              </p>
              <p className="text-xs opacity-60">
                +{region.allStates.length - region.mvpStates.length} Phase 2
              </p>
            </button>
          )
        )}
      </div>

      {selectedRegion && (
        <div className="mt-4">
          <h4 className="text-xs font-semibold text-muted-foreground mb-2">
            {REGION_DATA[selectedRegion as keyof typeof REGION_DATA]?.label} States
          </h4>
          <div className="flex flex-wrap gap-2">
            {REGION_DATA[selectedRegion as keyof typeof REGION_DATA]?.allStates.map((state) => {
              const isMvp = (REGION_DATA[selectedRegion as keyof typeof REGION_DATA]?.mvpStates as readonly string[]).includes(state)
              return (
                <span
                  key={state}
                  className={`inline-flex items-center rounded-clay-btn px-3 py-1.5 text-sm font-semibold ${
                    isMvp
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {state}
                  {isMvp && <span className="ml-1 text-xs opacity-70">MVP</span>}
                </span>
              )
            })}
          </div>
        </div>
      )}
    </ClayCard>
  )
}
