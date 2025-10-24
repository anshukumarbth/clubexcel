import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { DomainsSection } from "@/components/sections/domains-section-new"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { Gallery } from "@/components/sections/gallery-section-new"
import ChatBoard from "./chatboard/page"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DomainsSection />
      <AchievementsSection />
      <Gallery />
      <div className="fixed bottom-24 right-5">
        <ChatBoard />
      </div>
    </>
  );
}
