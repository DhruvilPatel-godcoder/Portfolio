import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main className="pt-20">
        <Contact />
      </main>
    </div>
  )
}
