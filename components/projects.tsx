"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Calendar, Star, Users, Code, Zap, Filter, Search, TrendingUp } from 'lucide-react'

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projectCategories = [
    { id: "all", label: "All Projects", count: 11 },
    { id: "mobile", label: "Mobile Apps", count: 2 },
    { id: "fullstack", label: "Full Stack", count: 6 },
    { id: "frontend", label: "Frontend", count: 1 },
    { id: "backend", label: "Backend", count: 3 }
  ]

  const projects = [
  {
    id: 1,
    title: "SENTRA – Smart Enforcement of Traffic Rules using AI",
    category: "fullstack",
    description: "An AI-powered traffic enforcement system using Python and MERN stack with TypeScript, enabling automated violation detection, number plate recognition, memo generation, and fine management.",
    image: "/placeholder.svg?height=300&width=500&text=SENTRA+Traffic+AI",
    technologies: ["Python", "React", "Node.js", "Express.js", "MongoDB", "TypeScript", "OpenCV"],
    github: "#",
    demo: "#",
    date: "2025",
    status: "Completed",
    featured: true,
    stats: { stars: 41, forks: 10, commits: 135 },
    highlights: ["Violation Detection", "Number Plate Recognition", "Automated Fines", "AI Processing"]
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "frontend",
    description: "A professional and responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS to showcase skills, projects, and achievements.",
    image: "/placeholder.svg?height=300&width=500&text=Portfolio+Website",
    technologies: ["Next.js", "React", "Node.js", "Express.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
    date: "2025",
    status: "Completed",
    featured: false,
    stats: { stars: 21, forks: 6, commits: 58 },
    highlights: ["Responsive Design", "Smooth Animations", "SEO Optimized", "Project Showcase"]
  },
  {
    id: 3,
    title: "BoltRide Website",
    category: "fullstack",
    description: "An electric vehicle rental platform developed using Python and MERN stack, featuring ride booking, real-time tracking, payment system, and geofencing for ride completion enforcement.",
    image: "/placeholder.svg?height=300&width=500&text=BoltRide",
    technologies: ["Python", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "#",
    demo: "#",
    date: "2025",
    status: "In Progress",
    featured: true,
    stats: { stars: 36, forks: 11, commits: 102 },
    highlights: ["Ride Booking", "Real-time Tracking", "Payment Gateway", "Geo-fencing"]
  },
  {
    id: 4,
    title: "Finverse – One Stop Finance Solution",
    category: "fullstack",
    description: "A comprehensive finance platform built with MERN stack, Python, and PostgreSQL, offering banking, loans, insurance, investment, and credit card management features.",
    image: "/placeholder.svg?height=300&width=500&text=Finverse",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Python", "PostgreSQL", "HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS"],
    github: "#",
    demo: "#",
    date: "2025",
    status: "Completed",
    featured: true,
    stats: { stars: 50, forks: 9, commits: 190 },
    highlights: ["Banking Services", "Loan Management", "Insurance Tracking", "Investment Insights", "Credit Card Management", "Stock Market"]
  },
  {
    id: 5,
    title: "Mobile Recharge App",
    category: "mobile",
    description: "A mobile recharge and bill payment application built with Flutter, Firebase, and MERN backend integration, featuring secure authentication, multiple payment options, and real-time transaction updates.",
    image: "/placeholder.svg?height=300&width=500&text=Mobile+Recharge+App",
    technologies: ["Flutter", "Firebase", "React", "Node.js", "Express.js", "MongoDB"],
    github: "#",
    demo: "#",
    date: "2025",
    status: "In Progress",
    featured: true,
    stats: { stars: 22, forks: 6, commits: 54 },
    highlights: ["Mobile Recharges", "Bill Payments", "Secure Login", "Real-time Transactions", "Offers & Coupons"]
  },
  {
    id: 6,
    title: "Smart Supermart Management System",
    category: "fullstack",
    description: "A supermarket management system with laptop camera barcode scanning as the main feature, built using MERN stack, Python, and PostgreSQL for real-time inventory and billing.",
    image: "/placeholder.svg?height=300&width=500&text=Smart+Supermart",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Python", "HTML", "CSS", "JavaScript", "PostgreSQL", "OpenCV"],
    github: "#",
    demo: "#",
    date: "2024",
    status: "Completed",
    featured: false,
    stats:{ stars: 29, forks: 7, commits: 95 },
    highlights: ["Barcode Scanning", "Real-time Inventory", "Billing System", "Reports Generation", "Stock Alerts"]
  },
  {
    id: 7,
    title: "BMI Calculator App",
    category: "mobile",
    description: "A BMI calculator mobile app built using Flutter, Firebase, and MERN backend integration, providing instant BMI results, health recommendations, and history tracking for users.",
    image: "/placeholder.svg?height=300&width=500&text=BMI+App",
    technologies: ["Flutter", "Firebase", "React", "Node.js", "Express.js", "MongoDB"],
    github: "#",
    demo: "#",
    date: "2024",
    status: "Completed",
    featured: false,
    stats: { stars: 18, forks: 5, commits: 47 },
    highlights: ["Instant BMI Calculation", "Health Recommendations", "History Tracking", "Responsive UI"]
  },
  {
    id: 8,
    title: "E-Commerce Website",
    category: "fullstack",
    description: "A fully functional e-commerce platform built with MERN stack, featuring product listing, shopping cart, payment integration, order tracking, and responsive design.",
    image: "/placeholder.svg?height=300&width=500&text=E-Commerce+Website",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Stripe/PayPal"],
    github: "#",
    demo: "#",
    date: "2024",
    status: "Completed",
    featured: true,
    stats: { stars: 52, forks: 18, commits: 178 },
    highlights: ["Payment Integration", "Order Tracking", "Product Search", "Responsive UI"]
  },
  {
    id: 9,
    title: "College Management System",
    category: "backend",
    description: "A robust college management system built with Java, MERN stack for APIs, and PostgreSQL, featuring student and faculty management, course scheduling, attendance tracking, and result generation.",
    image: "/placeholder.svg?height=300&width=500&text=College+Management+System",
    technologies: ["Java", "React", "Node.js", "Express.js", "PostgreSQL", "HTML", "CSS"],
    github: "#",
    demo: "#",
    date: "2024",
    status: "Completed",
    featured: true,
    stats: { stars: 15, forks: 5, commits: 25 },
    highlights: ["Student Management", "Faculty Management", "Attendance Tracking", "Result Generation"]
  },
  {
    id: 10,
    title: "Loan Master",
    category: "backend",
    description: "A Java and PostgreSQL-based loan management system for handling loan applications, payment schedules, interest calculations, and customer records.",
    image: "/placeholder.svg?height=300&width=500&text=Loan%20Master",
    technologies: ["Java", "PostgreSQL"],
    github: "#",
    demo: "#",
    date: "2024",
    status: "Completed",
    featured: false,
    stats: { stars: 19, forks: 4, commits: 85 },
    highlights: ["Loan Applications", "Payment Scheduling", "Interest Calculation", "Customer Records"]
  },
  {
    id: 11,
    title: "Airline Reservation System",
    category: "backend",
    description: "A flight booking and management system developed with Java and PostgreSQL, supporting ticket reservations, cancellations, and passenger management.",
    image: "/placeholder.svg?height=300&width=500&text=Airline%20Reservation%20System",
    technologies: ["Java", "PostgreSQL"],
    github: "#",
    demo: "#",
    date: "2023",
    status: "Completed",
    featured: false,
    stats: { stars: 21, forks: 5, commits: 95 },
    highlights: ["Flight Booking", "Ticket Cancellation", "Passenger Records", "Schedule Management"]
  }
];



  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/20 text-green-400 border-green-500/30"
      case "In Progress": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Planning": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            A showcase of my recent work, demonstrating expertise in full-stack development, modern frameworks, and innovative solutions
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Total Projects", value: "11+", icon: Code },
            { label: "GitHub Stars", value: "184+", icon: Star },
            { label: "Technologies", value: "18+", icon: Zap },
            { label: "Collaborators", value: "6+", icon: Users }
          ].map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
              }`}
            >
              <Filter className="h-4 w-4" />
              {category.label}
              <Badge variant="secondary" className="ml-1 bg-gray-700 text-gray-300 text-xs">
                {category.count}
              </Badge>
            </button>
          ))}
        </div>

        {/* Featured Projects Highlight */}
        {/* {activeFilter === "all" && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-400 flex items-center justify-center gap-2">
              <TrendingUp className="h-6 w-6" />
              Featured Projects
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <Card key={project.id} className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-500 group overflow-hidden">
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Button>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                      <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {project.stats.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <Code className="h-3 w-3" />
                          {project.stats.commits}
                        </span>
                      </div>
                      <span>{project.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )} */}

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-500 group overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 text-xs">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Key Highlights */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Key Features</div>
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.slice(0, 5).map((highlight, highlightIndex) => (
                      <Badge key={highlightIndex} variant="secondary" className="text-xs bg-blue-600/20 text-blue-400 border-blue-600/30">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Technologies</div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 8).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-800">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {project.stats.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <Code className="h-3 w-3" />
                      {project.stats.commits}
                    </span>
                  </div>
                  <span className="capitalize text-blue-400">{project.category}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 border-blue-800/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Code className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">More Projects Coming Soon</h3>
              <p className="text-gray-400 mb-6">
                I'm constantly working on new projects and exploring emerging technologies. 
                Check out my GitHub for the latest updates and contributions.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Github className="mr-2 h-4 w-4" />
                View GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
