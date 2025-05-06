import { EventsSection } from "../components/events-section"

import { HeroSection } from "../components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <EventsSection />
    </main>
  )
}
