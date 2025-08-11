import { Projects } from "@/components/projects"
import { Navigation } from "@/components/navigation"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main className="pt-20">
        <Projects />
      </main>
    </div>
  )
}
