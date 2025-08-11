import { Skills } from "@/components/skills"
import { Navigation } from "@/components/navigation"

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main className="pt-20">
        <Skills />
      </main>
    </div>
  )
}
