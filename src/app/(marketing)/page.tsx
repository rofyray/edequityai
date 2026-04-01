import { HeroSection } from '@/components/marketing/HeroSection'
import { FeaturesSection } from '@/components/marketing/FeaturesSection'
import { WhoItsForSection } from '@/components/marketing/WhoItsForSection'
import { RegionsSection } from '@/components/marketing/RegionsSection'
import { CTASection } from '@/components/marketing/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <WhoItsForSection />
      <RegionsSection />
      <CTASection />
    </>
  )
}
