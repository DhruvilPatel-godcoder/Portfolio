import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dhruvil Patel - Portfolio",
  description: "Professional portfolio of Dhruvil Patel, Full Stack Developer specializing in modern web technologies"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Animated Background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Primary animated orbs */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-float-slow"></div>
            
            {/* Secondary smaller orbs */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl animate-float-reverse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-500/15 rounded-full blur-2xl animate-float-delayed"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-emerald-500/15 rounded-full blur-xl animate-float"></div>
            
            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400/60 rounded-full animate-float-particle"></div>
            <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-float-particle-delayed"></div>
            <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-pink-400/60 rounded-full animate-float-particle-slow"></div>
            <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-cyan-400/60 rounded-full animate-float-particle"></div>
            <div className="absolute top-2/3 right-1/2 w-2 h-2 bg-indigo-400/60 rounded-full animate-float-particle-delayed"></div>
            
            {/* Gradient mesh overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5 animate-gradient-shift"></div>
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
