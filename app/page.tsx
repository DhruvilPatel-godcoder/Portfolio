import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main>
        <Hero />
      </main>
    </div>
  )
}
