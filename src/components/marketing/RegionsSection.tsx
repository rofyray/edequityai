import { ClayCard, RegionPill } from '@/components/clay'

const REGIONS = [
  {
    region: 'appalachia' as const,
    emoji: '⛰️',
    title: 'Appalachia',
    description:
      'Mountain communities across North Carolina and Kentucky. Folk tales, farming, and coal country woven into every lesson.',
    expansion: 'MVP: NC, KY \u2014 Expanding to WV, TN, VA, PA, OH, GA',
  },
  {
    region: 'delta' as const,
    emoji: '🎵',
    title: 'Mississippi Delta',
    description:
      'Mississippi and Arkansas river communities. Blues music, catfish farming, and civil rights history in the curriculum.',
    expansion: 'MVP: MS, AR \u2014 Expanding to LA, AL, TN, MO, IL, KY',
  },
  {
    region: 'tribal' as const,
    emoji: '🪶',
    title: 'Tribal Lands',
    description:
      'Oklahoma and Arizona Tribal communities. Beadwork, powwow traditions, and oral history honored in every module.',
    expansion: 'MVP: OK, AZ \u2014 Expanding to NM, MT, SD, ND, WA, MN',
  },
]

export function RegionsSection() {
  return (
    <section id="regions" className="scroll-mt-20 bg-muted/30 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Serving three communities across America
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center font-sans text-lg text-muted-foreground">
          Education should reflect where you live. Our curriculum is built with
          and for the communities it serves.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {REGIONS.map((region) => (
            <ClayCard key={region.title} size="lg" className="text-center">
              <div className="mb-4 flex justify-center">
                <RegionPill region={region.region} />
              </div>
              <div className="mb-4 text-4xl" role="img" aria-label={region.title}>
                {region.emoji}
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
                {region.title}
              </h3>
              <p className="mb-3 font-sans text-sm text-muted-foreground">
                {region.description}
              </p>
              <p className="font-sans text-xs text-muted-foreground">
                {region.expansion}
              </p>
            </ClayCard>
          ))}
        </div>
      </div>
    </section>
  )
}
