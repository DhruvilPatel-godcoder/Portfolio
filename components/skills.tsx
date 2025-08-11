"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Server, Palette, Shield, Cloud, Smartphone, GitBranch, Layers, Zap, Settings, Monitor, Cpu, HardDrive, Wifi, Star, BookOpen, Trophy } from 'lucide-react'

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [visibleSkills, setVisibleSkills] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const skillElements = document.querySelectorAll('[data-skill]')
    skillElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    { id: "all", label: "All Skills", icon: Layers },
    { id: "frontend", label: "Frontend", icon: Monitor },
    { id: "backend", label: "Backend", icon: Server },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "database", label: "Database", icon: Database },
    { id: "tools", label: "Tools & Others", icon: Settings }
  ]

  const technicalSkills = [
  {
    name: "React",
    category: "frontend",
    icon: "⚛️",
    color: "from-blue-500 to-cyan-400",
    description: "Component-based UI development with hooks and state management",
    experience: "6+ months",
    proficiency: "Advanced",
    projects: ["Portfolio Website", "E-Commerce Website", "SENTRA", "BoltRide Website"]
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "🟨",
    color: "from-yellow-500 to-orange-400",
    description: "Modern ES6+ features, async programming, and DOM manipulation",
    experience: "2+ years",
    proficiency: "Advanced",
    projects: [
      "Portfolio Website",
      "E-Commerce Website",
      "SENTRA",
      "Finverse",
      "Smart Supermart Management System",
      "BoltRide Website"
    ]
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "🔷",
    color: "from-blue-600 to-blue-400",
    description: "Type-safe JavaScript development with interfaces and generics",
    experience: "1+ months",
    proficiency: "Beginner",
    projects: ["Portfolio Website"]
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: "▲",
    color: "from-gray-800 to-gray-600",
    description: "Full-stack React framework with SSR and API routes",
    experience: "3+ months",
    proficiency: "Intermediate",
    projects: ["Portfolio Website"]
  },
  {
    name: "Node.js",
    category: "backend",
    icon: "🟢",
    color: "from-green-600 to-green-400",
    description: "Server-side JavaScript with Express.js and middleware",
    experience: "6+ months",
    proficiency: "Intermediate",
    projects: ["E-Commerce Website", "SENTRA", "BoltRide Website"]
  },
  {
    name: "Python",
    category: "backend",
    icon: "🐍",
    color: "from-yellow-500 to-green-500",
    description: "Object-oriented programming, data analysis, and automation",
    experience: "1+ years",
    proficiency: "Advanced",
    projects: ["SENTRA", "Finverse", "Smart Supermart Management System", "BoltRide Website"]
  },
  {
    name: "Java",
    category: "backend",
    icon: "☕",
    color: "from-red-600 to-orange-500",
    description: "Object-oriented programming and data structures implementation",
    experience: "2+ years",
    proficiency: "Advanced",
    projects: ["College Management System" , "Loan Master" , "Airline Reservation System"]
  },
  {
    name: "PostgreSQL",
    category: "database",
    icon: "🐘",
    color: "from-blue-700 to-blue-500",
    description: "Relational database design, queries, and optimization",
    experience: "1+ years",
    proficiency: "Intermediate",
    projects: ["College Management System", "Finverse", "Smart Supermart Management System" ,"Loan Master"]
  },
  {
    name: "MongoDB",
    category: "database",
    icon: "🍃",
    color: "from-green-700 to-green-500",
    description: "NoSQL database with document-based data modeling",
    experience: "8+ months",
    proficiency: "Intermediate",
    projects: ["E-Commerce Website", "SENTRA", "BoltRide Website"]
  },
  {
    name: "Git",
    category: "tools",
    icon: "📝",
    color: "from-red-600 to-orange-500",
    description: "Version control, branching strategies, and collaboration",
    experience: "3+ months",
    proficiency: "Intermidiate",
    projects: [
      "Portfolio Website",
      "E-Commerce Website",
      "SENTRA",
      "BMI Calculator App",
      "College Management System",
      "Finverse",
      "Smart Supermart Management System",
      "BoltRide Website",
      "Mobile Recharge App"
    ]
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "🎨",
    color: "from-cyan-500 to-blue-500",
    description: "Utility-first CSS framework for rapid UI development",
    experience: "1+ years",
    proficiency: "Advanced",
    projects: ["Portfolio Website", "E-Commerce Website", "SENTRA", "BoltRide Website"]
  },
  {
    name: "Docker",
    category: "tools",
    icon: "🐳",
    color: "from-blue-600 to-cyan-500",
    description: "Containerization and deployment automation",
    experience: "2+ months",
    proficiency: "Beginner",
    projects: ["SENTRA"]
  },
  {
    name: "HTML/CSS",
    category: "frontend",
    icon: "🌐",
    color: "from-orange-500 to-red-500",
    description: "Semantic HTML structure and modern CSS styling with Flexbox/Grid",
    experience: "2+ years",
    proficiency: "Advanced",
    projects: [
      "Portfolio Website",
      "E-Commerce Website",
      "SENTRA",
      "Finverse",
      "Smart Supermart Management System",
      "BoltRide Website"
    ]
  },
  {
    name: "Express.js",
    category: "backend",
    icon: "🚀",
    color: "from-gray-600 to-gray-400",
    description: "Fast web framework for Node.js with middleware and routing",
    experience: "1+ years",
    proficiency: "Intermediate",
    projects: ["E-Commerce Website", "SENTRA", "BoltRide Website"]
  },
  {
    name: "React Native",
    category: "mobile",
    icon: "📱",
    color: "from-blue-500 to-purple-500",
    description: "Cross-platform mobile app development with native performance",
    experience: "1+ months",
    proficiency: "Beginner",
    projects: ["BMI Calculator App"]
  },
  {
    name: "Flutter",
    category: "mobile",
    icon: "🦋",
    color: "from-blue-400 to-cyan-400",
    description: "Google's UI toolkit for building natively compiled mobile apps",
    experience: "4+ months",
    proficiency: "Advanced",
    projects: ["BMI Calculator App", "Mobile Recharge App"]
  },
  {
    name: "Android Studio",
    category: "mobile",
    icon: "🤖",
    color: "from-green-600 to-green-400",
    description: "Native Android development with Flutter and Java",
    experience: "3+ months",
    proficiency: "Intermediate",
    projects: ["BMI Calculator App", "Mobile Recharge App"]
  },
  {
    name: "Firebase",
    category: "tools",
    icon: "🔥",
    color: "from-yellow-500 to-red-500",
    description: "Backend-as-a-Service for authentication, Firestore, hosting, and cloud functions",
    experience: "4+ months",
    proficiency: "Intermediate",
    projects: ["BMI Calculator App", "Mobile Recharge App"]
  }
]


  const expertise = [
    {
      title: "Frontend Development",
      icon: Monitor,
      skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500",
      description: "Building responsive and interactive user interfaces",
      focus: "Primary Focus"
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express.js", "Python", "Java"],
      color: "from-green-500 to-emerald-500",
      description: "Server-side logic and API development",
      focus: "Strong Foundation"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "Android Studio"],
      color: "from-purple-500 to-pink-500",
      description: "Cross-platform and native mobile applications",
      focus: "Learning & Exploring"
    },
    {
      title: "Database Management",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Firebase"],
      color: "from-indigo-500 to-violet-500",
      description: "Data modeling and database optimization",
      focus: "Academic & Projects"
    },
    {
      title: "Development Tools",
      icon: Settings,
      skills: ["Git", "Docker", "VS Code", "Linux"],
      color: "from-orange-500 to-red-500",
      description: "Modern development workflow and tools",
      focus: "Daily Usage"
    }
  ]

  const filteredSkills = activeCategory === "all" 
    ? technicalSkills 
    : technicalSkills.filter(skill => skill.category === activeCategory)

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Advanced": return "bg-green-600/20 text-green-400 border-green-600/30"
      case "Intermediate": return "bg-blue-600/20 text-blue-400 border-blue-600/30"
      case "Beginner": return "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
      default: return "bg-gray-600/20 text-gray-400 border-gray-600/30"
    }
  }

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Technologies and tools I've learned through coursework, personal projects, and hands-on experience
          </p>
        </div>

        {/* Expertise Overview */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center text-blue-400">Areas of Focus</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((area, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-500 group hover:transform hover:scale-105">
                <CardContent className="p-6 text-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${area.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-3 text-white text-lg relative z-10">{area.title}</h4>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed relative z-10">{area.description}</p>
                  
                  {/* Focus Level */}
                  <div className="mb-4 relative z-10">
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                      {area.focus}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-1 justify-center relative z-10">
                    {area.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-gray-800 text-gray-300 border-gray-600">
                        {skill}
                      </Badge>
                    ))}
                    {area.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 border-gray-600">
                        +{area.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skill Categories Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <Card 
              key={skill.name} 
              id={`skill-${index}`}
              data-skill={skill.name}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-500 group hover:transform hover:scale-105 overflow-hidden"
            >
              <CardContent className="p-6 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Header */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg">{skill.name}</h4>
                      <p className="text-xs text-gray-400">{skill.experience} experience</p>
                    </div>
                  </div>
                  <Badge className={`text-xs ${getProficiencyColor(skill.proficiency)}`}>
                    {skill.proficiency}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-4 relative z-10">
                  {skill.description}
                </p>

                {/* Projects Used In */}
                <div className="mb-4 relative z-10">
                  <div className="text-xs text-gray-500 mb-2">Used in Projects</div>
                  <div className="flex flex-wrap gap-1">
                    {skill.projects.slice(0, 2).map((project, projectIndex) => (
                      <Badge key={projectIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {project}
                      </Badge>
                    ))}
                    {skill.projects.length > 2 && (
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                        +{skill.projects.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="relative z-10">
                  <Badge 
                    variant="secondary" 
                    className={`capitalize text-xs bg-gradient-to-r ${skill.color} bg-opacity-10 border-gray-600`}
                  >
                    {skill.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Journey */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 border-blue-800/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <BookOpen className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
                <p className="text-gray-300 leading-relaxed">
                  As a Computer Science student, I'm constantly expanding my technical toolkit through coursework, 
                  personal projects, and online learning. My focus is on building a strong foundation while 
                  staying current with industry trends.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">17+</div>
                  <div className="text-gray-300 text-sm">Technologies</div>
                  <div className="text-xs text-gray-400">Actively learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">30+</div>
                  <div className="text-gray-300 text-sm">Projects</div>
                  <div className="text-xs text-gray-400">Built with these skills</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">2+</div>
                  <div className="text-gray-300 text-sm">Years</div>
                  <div className="text-xs text-gray-400">Of dedicated learning</div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700 text-center">
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-300">Currently exploring: <span className="text-blue-400 font-medium">Mobile Development</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Next goal: <span className="text-purple-400 font-medium">Full-Stack Mobile Apps</span></span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
