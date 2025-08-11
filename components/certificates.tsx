"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, ExternalLink, Download, CheckCircle, Star, TrendingUp, Shield, Globe, Code, Database, Cloud } from 'lucide-react'

export function Certificates() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredCert, setHoveredCert] = useState<number | null>(null)

  const certificateCategories = [
    { id: "all", label: "All Certificates", count: 8, icon: Award },
    { id: "cloud", label: "Cloud", count: 3, icon: Cloud },
    { id: "development", label: "Development", count: 3, icon: Code },
    { id: "security", label: "Security", count: 2, icon: Shield }
  ]

  const certificates = [
  {
    id: 1,
    title: "Introduction to Java",
    issuer: "LearnQuest",
    category: "development",
    date: "January 9, 2024",
    credentialId: "LQ-JAVA-2024-001",
    image: "/placeholder.svg?height=250&width=400&text=Introduction+to+Java",
    description: "Dhruvil Patel has successfully completed 'Introduction to Java', an online non-credit course authorized by LearnQuest and offered through Coursera.",
    skills: ["Java", "Programming Fundamentals", "OOP", "Syntax", "Control Structures"],
    verifyUrl: "#",
    certificateUrl: "#",
    status: "Completed",
    expiryDate: "Lifetime",
    level: "Professional",
    featured: false,
    provider: {
      name: "LearnQuest",
      logo: "🎓",
      color: "from-orange-500 to-yellow-500"
    },
    achievements: ["Online course completion", "Coursera verified", "Programming basics mastered"]
    },
    {
      id: 2,
      title: "Inheritance and Data Structures in Java",
      issuer: "University of Pennsylvania",
      category: "development",
      date: "May 26, 2024",
      credentialId: "PENN-JAVA-2024-002",
      image: "/placeholder.svg?height=250&width=400&text=Java+Inheritance+and+Data+Structures",
      description: "Dhruvil Patel has successfully completed 'Inheritance and Data Structures in Java', an online non-credit course authorized by the University of Pennsylvania and offered through Coursera.",
      skills: ["Java", "Inheritance", "Data Structures", "OOP", "Algorithms"],
      verifyUrl: "#",
      certificateUrl: "#",
      status: "Completed",
      expiryDate: "Lifetime",
      level: "Advanced",
      featured: false,
      provider: {
        name: "University of Pennsylvania",
        logo: "🏛️",
        color: "from-blue-600 to-blue-400"
      },
      achievements: ["Course completion", "Advanced OOP concepts", "Coursera certified"]
    },
    {
      id: 3,
      title: "Introduction to HTML, CSS, & JavaScript",
      issuer: "IBM",
      category: "development",
      date: "December 18, 2024",
      credentialId: "IBM-WEB-2024-003",
      image: "/placeholder.svg?height=250&width=400&text=HTML+CSS+JavaScript",
      description: "Dhruvil Patel has successfully completed 'Introduction to HTML, CSS, & JavaScript', an online non-credit course authorized by IBM and offered through Coursera.",
      skills: ["HTML", "CSS", "JavaScript", "Web Development", "Frontend Basics"],
      verifyUrl: "#",
      certificateUrl: "#",
      status: "Completed",
      expiryDate: "Lifetime",
      level: "Professional",
      featured: false,
      provider: {
        name: "IBM",
        logo: "💻",
        color: "from-blue-500 to-indigo-500"
      },
      achievements: ["Frontend fundamentals", "Coursera verified", "Responsive web design basics"]
    },
    {
      id: 4,
      title: "Exploratory Data Analysis for Machine Learning",
      issuer: "IBM",
      category: "data",
      date: "June 11, 2025",
      credentialId: "IBM-EDA-2025-004",
      image: "/placeholder.svg?height=250&width=400&text=EDA+for+ML",
      description: "Dhruvil Patel has successfully completed 'Exploratory Data Analysis for Machine Learning', an online non-credit course authorized by IBM and offered through Coursera.",
      skills: ["EDA", "Data Cleaning", "Data Visualization", "Machine Learning", "Python"],
      verifyUrl: "#",
      certificateUrl: "#",
      status: "Completed",
      expiryDate: "Lifetime",
      level: "Intermediate",
      featured: false,
      provider: {
        name: "IBM",
        logo: "📊",
        color: "from-green-500 to-teal-500"
      },
      achievements: ["Hands-on labs", "Coursera certified", "EDA techniques mastered"]
    },
    {
      id: 5,
      title: "Generative AI: Introduction and Applications",
      issuer: "IBM",
      category: "ai",
      date: "June 14, 2025",
      credentialId: "IBM-GENAI-2025-005",
      image: "/placeholder.svg?height=250&width=400&text=Generative+AI",
      description: "Dhruvil Patel has successfully completed 'Generative AI: Introduction and Applications', an online non-credit course authorized by IBM and offered through Coursera.",
      skills: ["Generative AI", "AI Applications", "ML Models", "Prompt Engineering", "AI Ethics"],
      verifyUrl: "#",
      certificateUrl: "#",
      status: "Completed",
      expiryDate: "Lifetime",
      level: "Advanced",
      featured: true,
      provider: {
        name: "IBM",
        logo: "🤖",
        color: "from-purple-500 to-pink-500"
      },
      achievements: ["AI concepts mastered", "Real-world applications", "Coursera verified"]
    },
    {
      id: 6,
      title: "Career Advancement Strategies with AI – Accelerate Your Job Search",
      issuer: "Google",
      category: "career",
      date: "June 14, 2025",
      credentialId: "GOOGLE-AI-CAREER-2025-006",
      image: "/placeholder.svg?height=250&width=400&text=Job+Search+with+AI",
      description: "Dhruvil Patel has successfully completed 'Accelerate Your Job Search with AI', an online non-credit course authorized by Google and offered through Coursera.",
      skills: ["AI Tools", "Job Search", "Resume Optimization", "Interview Prep", "Career Planning"],
      verifyUrl: "#",
      certificateUrl: "#",
      status: "Completed",
      expiryDate: "Lifetime",
      level: "Intermediate",
      featured: false,
      provider: {
        name: "Google",
        logo: "🔍",
        color: "from-yellow-500 to-green-500"
      },
      achievements: ["Career tools mastery", "Coursera certified", "AI-assisted job search techniques"]
    },
    {
      id: 7,
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      category: "security",
      date: "July 2, 2025",
      credentialId: "GOOGLE-CYBER-2025-007",
      image: "/placeholder.svg?height=250&width=400&text=Google+Cybersecurity",
      description: "Dhruvil Patel has successfully completed the Google Cybersecurity Professional Certificate, comprising eight courses with hands-on, practice-based assessments. The program prepares learners for entry-level roles in cybersecurity.",
      skills: ["Python", "Linux", "SQL", "SIEM Tools", "IDS", "Cybersecurity Risk Management"],
      verifyUrl: "#",
      certificateUrl: "#",
      status: "Completed",
      expiryDate: "Lifetime",
      level: "Professional",
      featured: true,
      provider: {
        name: "Google",
        logo: "🛡️",
        color: "from-blue-500 to-green-500"
      },
      achievements: [
        "Foundations of Cybersecurity",
        "Play It Safe: Manage Security Risks",
        "Connect and Protect: Networks and Network Security",
        "Tools of the Trade: Linux and SQL",
        "Assets, Threats, and Vulnerabilities",
        "Sound the Alarm: Detection and Response",
        "Automate Cybersecurity Tasks with Python",
        "Put It to Work: Prepare for Cybersecurity Jobs"
      ]
    }
  ];


  const filteredCertificates = activeCategory === "all" 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory)

  const featuredCertificates = certificates.filter(cert => cert.featured)

  const stats = [
    { number: "8", label: "Certificates Earned", icon: Award, color: "from-blue-500 to-cyan-500" },
    { number: "5", label: "Major Providers", icon: Star, color: "from-purple-500 to-pink-500" },
    { number: "100%", label: "Pass Rate", icon: CheckCircle, color: "from-green-500 to-emerald-500" },
    { number: "2024", label: "Latest Certification", icon: Calendar, color: "from-orange-500 to-red-500" }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Foundational":
        return "bg-green-600/20 text-green-400 border-green-600/30"
      case "Professional":
        return "bg-blue-600/20 text-blue-400 border-blue-600/30"
      case "Expert":
        return "bg-purple-600/20 text-purple-400 border-purple-600/30"
      default:
        return "bg-gray-600/20 text-gray-400 border-gray-600/30"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-400"
      case "Expired":
        return "text-red-400"
      case "Pending":
        return "text-yellow-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Certifications & Credentials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Professional certifications that validate my technical expertise and commitment to continuous learning in the ever-evolving tech landscape
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 group overflow-hidden">
              <CardContent className="p-6 text-center relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1 relative z-10">{stat.number}</div>
                <div className="text-sm text-gray-400 relative z-10">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Filter */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          {certificateCategories.map((category) => (
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
              <Badge variant="secondary" className="ml-1 bg-gray-700 text-gray-300 text-xs">
                {category.count}
              </Badge>
            </button>
          ))}
        </div> */}

        {/* Featured Certificates
        {activeCategory === "all" && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-400 flex items-center justify-center gap-2">
              <TrendingUp className="h-6 w-6" />
              Featured Certifications
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredCertificates.map((cert, index) => (
                <Card key={cert.id} className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-500 group overflow-hidden">
                  <div className="relative">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     */}
                    {/* Provider Badge */}
                    {/* <div className="absolute top-4 left-4">
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${cert.provider.color} text-white text-sm font-medium`}>
                        <span className="text-lg">{cert.provider.logo}</span>
                        {cert.provider.name}
                      </div>
                    </div> */}

                    {/* Featured Badge */}
                    {/* <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div> */}

                    {/* Action Buttons */}
                    {/* <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Verify
                        </Button>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <Download className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`text-xs ${getLevelColor(cert.level)}`}>
                        {cert.level}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <CheckCircle className={`h-4 w-4 ${getStatusColor(cert.status)}`} />
                        <span className={`text-xs font-medium ${getStatusColor(cert.status)}`}>
                          {cert.status}
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-white mb-2 leading-tight">{cert.title}</h4>
                    <p className="text-blue-400 font-medium text-sm mb-3">{cert.issuer}</p>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                          +{cert.skills.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {cert.date}
                      </span>
                      <span>Expires: {cert.expiryDate}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )} */}

        {/* All Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((cert, index) => (
            <Card 
              key={cert.id} 
              className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-500 group overflow-hidden"
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Verify
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>

                {/* Provider Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${cert.provider.color} text-white text-sm font-medium`}>
                    <span className="text-lg">{cert.provider.logo}</span>
                    {cert.provider.name}
                  </div>
                </div>

                {/* Level Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={`text-xs ${getLevelColor(cert.level)}`}>
                    {cert.level}
                  </Badge>
                </div>

                {/* Status Indicator */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className={`h-4 w-4 ${getStatusColor(cert.status)}`} />
                    <span className={`text-xs font-medium ${getStatusColor(cert.status)}`}>
                      {cert.status}
                    </span>
                  </div>
                </div>

                {/* Featured Badge */}
                {cert.featured && (
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 text-xs">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-white leading-tight">{cert.title}</CardTitle>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-400 font-medium">{cert.issuer}</span>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.date}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Key Achievements</div>
                  <div className="space-y-1">
                    {cert.achievements.slice(0, 2).map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Skills Covered</div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-blue-600/20 text-blue-400 border-blue-600/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gray-600/20 text-gray-400 border-gray-600/30">
                        +{cert.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-2 text-xs text-gray-400 pt-3 border-t border-gray-800">
                  <div className="flex justify-between">
                    <span>Credential ID:</span>
                    <span className="font-mono text-gray-300">{cert.credentialId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expires:</span>
                    <span className="text-gray-300">{cert.expiryDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span className="capitalize text-blue-400">{cert.category}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 border-blue-800/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Award className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning Journey</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I'm committed to staying current with industry trends and continuously expanding my skill set through professional certifications and hands-on learning. 
                My goal is to maintain expertise across multiple domains while specializing in emerging technologies.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="text-blue-400 font-medium mb-3">Currently Pursuing</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Kubernetes Administrator (CKA)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">AWS Solutions Architect Associate</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-purple-400 font-medium mb-3">Future Goals</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300">Certified Kubernetes Security Specialist</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-300">Google Cloud Professional Developer</span>
                    </div>
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
