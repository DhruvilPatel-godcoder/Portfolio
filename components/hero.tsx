"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Download, ChevronDown, Play, ExternalLink, MapPin, Calendar, Code2, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function Hero() {
  const [text, setText] = useState("")
  const [currentRole, setCurrentRole] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  
  const roles = [
    "Full Stack Developer",
    "Frontend Specialist", 
    "Backend Engineer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Mobile App Developer",
    "Tech Innovator",
    "Open Source Contributor",
  ]
  
  useEffect(() => {
    setIsVisible(true)
    let index = 0
    const currentRoleText = roles[currentRole]
    
    const timer = setInterval(() => {
      setText(currentRoleText.slice(0, index))
      index++
      if (index > currentRoleText.length) {
        clearInterval(timer)
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 2000)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [currentRole])

  const quickStats = [
    { label: "Projects", value: "10+", icon: Code2 },
    { label: "Education", value: "2 Years", icon: Calendar },
    { label: "Technologies", value: "15+", icon: Sparkles }
  ]

  const socialLinks = [
    { 
      icon: Github, 
      label: "GitHub", 
      href: "#", 
      color: "hover:text-gray-300",
      followers: "200"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "#", 
      color: "hover:text-blue-400",
      followers: "200"
    },
    { 
      icon: Mail, 
      label: "Email", 
      href: "mailto:dhruvilpatel159@email.com", 
      color: "hover:text-green-400",
      followers: "Contact"
    }
  ]

  const currentStatus = {
    availability: "Available for opportunities",
    location: "Ahmedabad, Gujarat",
    timezone: "GMT+5:30",
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="text-center max-w-6xl mx-auto relative z-10 mt-20">
        {/* Status Badge */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Badge variant="outline" className="border-green-500/50 text-green-400 bg-green-500/10 px-4 py-2 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            {currentStatus.availability}
          </Badge>
        </div>

        {/* Profile Section */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src="/placeholder.svg?height=200&width=200&text=Profile+Photo"
                alt="Dhruvil Patel"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-950 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-white mb-2">Hi, I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
                Dhruvil Patel
              </span>
            </h1>
            
            <div className="text-2xl md:text-4xl text-gray-300 mb-6 h-16 flex items-center justify-center">
              <span className="mr-2">I'm a</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-semibold min-w-[300px] text-left">
                {text}
                <span className="animate-pulse text-blue-400">|</span>
              </span>
            </div>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Passionate IT student specializing in modern web technologies. 
              I build scalable applications and love solving complex problems through clean, efficient code.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            {quickStats.map((stat, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-blue-500 transition-all duration-300 group">
                <CardContent className="p-4 text-center">
                  <stat.icon className="h-6 w-6 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                View My Work
              </Button>
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className={`mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <div key={index} className="group relative">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className={`border-gray-600 text-gray-300 hover:text-white ${social.color} hover:border-current transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {social.followers}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Availability */}
        <div className={`mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span>{currentStatus.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-purple-400" />
              <span>{currentStatus.timezone}</span>
            </div>
          </div>
        </div>

        {/* Featured Work Preview */}
        {/* <div className={`mb-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { title: "E-Commerce Platform", tech: "Next.js", image: "/placeholder.svg?height=120&width=200&text=E-Commerce", href: "/projects" },
              { title: "Task Management", tech: "React", image: "/placeholder.svg?height=120&width=200&text=Task+App", href: "/projects" },
              { title: "Weather Dashboard", tech: "Vue.js", image: "/placeholder.svg?height=120&width=200&text=Weather", href: "/projects" }
            ].map((project, index) => (
              <Link key={index} href={project.href}>
                <Card className="bg-gray-900/30 border-gray-800 hover:border-blue-500 transition-all duration-300 group cursor-pointer overflow-hidden">
                  <div className="relative">
                    <img 
                      src={project.image || "/placeholder.svg"} 
                      alt={project.title}
                      className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-white text-sm">{project.title}</h4>
                    <p className="text-xs text-gray-400">{project.tech}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div> */}

        {/* Scroll Indicator */}
        {/* <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link href="/about" className="group flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
            <span className="text-sm font-medium">Discover More</span>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center group-hover:border-blue-400 transition-colors duration-300">
              <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-bounce group-hover:bg-blue-400 transition-colors duration-300"></div>
            </div>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </Link>
        </div> */}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </section>
  )
}
