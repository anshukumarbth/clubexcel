import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { DomainsSection } from "@/components/sections/domains-section-new"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { GallerySection } from "@/components/sections/gallery-section-new"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DomainsSection />
      <AchievementsSection />
      <GallerySection />
    </>
  );
}
