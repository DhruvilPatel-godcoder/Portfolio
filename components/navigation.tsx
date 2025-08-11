"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X, Code2, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About" },
    { id: "/skills", label: "Skills" },
    { id: "/projects", label: "Projects" },
    { id: "/certificates", label: "Certificates" },
    { id: "/contact", label: "Contact" },
  ]

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname === path) return true
    return false
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gray-950/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
        : 'bg-gray-950/80 backdrop-blur-sm border-b border-gray-800/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-950 animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Dhruvil Patel
              </div>
              {/* <div className="text-xs text-gray-400 -mt-1">Full Stack Developer</div> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 mx-auto bg-gray-900/50 backdrop-blur-sm rounded-full px-2 py-2 border border-gray-800/50">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                onClick={() => setIsOpen(false)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive(item.id)
                    ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg" 
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {item.label}
                {isActive(item.id) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Status Badge & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Status Badge - Hidden on mobile */}
            <div className="hidden lg:block">
              <Badge variant="outline" className="border-green-500/50 text-green-400 bg-green-500/10 px-3 py-1 text-xs">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Available
              </Badge>
            </div>

            {/* Mobile Navigation Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-gray-800/50 relative group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`} />
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-800/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.id}
                  onClick={() => setIsOpen(false)}
                  className={`text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform ${
                    isActive(item.id)
                      ? "text-white bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-l-4 border-blue-500 translate-x-2" 
                      : "text-gray-300 hover:text-white hover:bg-gray-800/30 hover:translate-x-1"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {isActive(item.id) && (
                      <Sparkles className="h-4 w-4 text-blue-400 animate-pulse" />
                    )}
                  </div>
                </Link>
              ))}
              
              {/* Mobile Status */}
              <div className="px-4 py-2 mt-4 border-t border-gray-800/50">
                <Badge variant="outline" className="border-green-500/50 text-green-400 bg-green-500/10 px-3 py-1 text-xs">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available for opportunities
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
