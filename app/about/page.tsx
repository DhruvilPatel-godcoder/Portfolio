import { About } from "@/components/about"
import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main className="pt-20">
        <About />
      </main>
    </div>
  )
}
