import { Certificates } from "@/components/certificates"
import { Navigation } from "@/components/navigation"

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main className="pt-20">
        <Certificates />
      </main>
    </div>
  )
}
