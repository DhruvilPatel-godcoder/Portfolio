"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Coffee, Lightbulb, Target, Heart, Rocket, Users, Award, Download, MapPin, Calendar, GraduationCap, Briefcase, Star, TrendingUp, Zap, Globe, BookOpen, Compass } from 'lucide-react'

export function About() {
  const [activeTab, setActiveTab] = useState("overview")
  const [visibleStats, setVisibleStats] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisibleStats(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { 
      number: "10+", 
      label: "Projects Completed", 
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      description: "Academic and personal projects"
    },
    { 
      number: "2", 
      label: "Years in College", 
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
      description: "Computer Science studies"
    },
    { 
      number: "18+", 
      label: "Technologies", 
      icon: Lightbulb,
      color: "from-green-500 to-emerald-500",
      description: "Languages and frameworks"
    },
    { 
      number: "9.21", 
      label: "SPI(Semester 3)", 
      icon: Star,
      color: "from-red-500 to-orange-500",
      description: "Academic performance"
    }
  ]

  const personalInfo = [
    { label: "Location", value: "Ahmedabad, Gujarat", icon: MapPin },
    { label: "Age", value: "19 years old", icon: Calendar },
    { label: "Education", value: "Computer Science Junior", icon: GraduationCap },
    { label: "Status", value: "Seeking Internship", icon: Briefcase }
  ]

  const values = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "I set clear academic and career objectives, working systematically to achieve them while maintaining high standards in my coursework.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "I thrive in team environments, whether it's group projects, study sessions, or coding collaborations with classmates.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Lightbulb,
      title: "Curious Learner",
      description: "I'm always eager to explore new technologies and concepts beyond the classroom curriculum, staying updated with industry trends.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      title: "Quality-Focused",
      description: "I'm committed to writing clean, well-documented code and delivering high-quality solutions in both academic and personal projects.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Star,
      title: "Team Leader",
      description: "I take initiative in guiding teams, ensuring clear communication, and fostering a productive environment to achieve shared goals.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Compass,
      title: "Adaptable",
      description: "I quickly adjust to new challenges, learning tools, and workflows while maintaining effectiveness under changing conditions.",
      color: "from-pink-500 to-pink-600"
    }
  ];


  const journey = [
    {
      year: "2023",
      title: "Beginning Computer Science Degree",
      company: "LJ University",
      type: "education",
      description: "Enrolled in a Bachelor of Computer Science program, gaining a strong foundation in programming, mathematics, and computer systems. Discovered a deep interest in software engineering and problem-solving.",
      achievements: [
        "First Semester",
        "Programming Contest Participant",
        "Participated in Group Projects"
      ],
      technologies: ["Java", "HTML/CSS", "Mathematics Fundamentals"]
    },
    {
      year: "2024",
      title: "Advanced Studies & First Professional Projects",
      company: "LJ University",
      type: "education",
      description: "Completed advanced courses in data structures, algorithms, and full-stack web development. Built my first complete web applications and began working with freelance clients.",
      achievements: [
        "Maintained 8.96 SPI",
        "Developed First Project using Database",
        "Attend my First Hackthon"
      ],
      technologies: ["Advanced Java", "Python", "Data Structures", "Postgrey SQL"]
    },
    {
      year: "2025",
      title: "Specialization in Full-Stack Development",
      company: "LJ University",
      type: "education",
      description: "Focused on modern full-stack technologies, cloud services, and scalable application development. Start to create portfolio projects and pursued professional certifications to prepare for internships.",
      achievements: [
        "Earned Multiple Industry Certifications",
        "My First Full-Stack Project",
        "Learn more skills"
      ],
      technologies: ["Python" , "Flutter", "Bootstrap", "Tailwind", "Javascript","Firebase" ]
    },
    {
      year: "Present",
      title: "Seeking Internship Opportunities",
      company: "Open to Offers",
      type: "opportunity",
      description: "After completing two years of intensive Computer Science education, I am ready to apply my skills in a professional environment and contribute to real-world projects.",
      achievements: [
        "Solid Academic and Technical Foundation",
        "Diverse Project Portfolio",
        "Industry-Ready Skills"
      ],
      technologies: ["Advanced Python","React", "Node.js", "Express", "MongoDB","Next.js","Typescript", "Git" ]
    }
  ];


  const interests = [
    { name: "Web Development", icon: "🌐", description: "Building modern web applications" },
    { name: "Mobile Apps", icon: "📱", description: "Cross-platform development" },
    { name: "AI & Machine Learning", icon: "🤖", description: "Exploring intelligent systems" },
    { name: "Open Source", icon: "🔓", description: "Contributing to community projects" },
    { name: "Cloud Computing", icon: "☁️", description: "Scalable infrastructure solutions" },
    { name: "Competitive Programming", icon: "🏆", description: "Algorithm challenges and contests" }
  ]

  const tabs = [
    { id: "overview", label: "Overview", icon: Globe },
    { id: "journey", label: "Academic Journey", icon: BookOpen },
    { id: "values", label: "Values", icon: Star },
    { id: "interests", label: "Interests", icon: Zap }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education": return "from-blue-500 to-blue-600"
      case "work": return "from-green-500 to-green-600"
      case "opportunity": return "from-purple-500 to-purple-600"
      default: return "from-gray-500 to-gray-600"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "education": return GraduationCap
      case "work": return Briefcase
      case "opportunity": return Rocket
      default: return Calendar
    }
  }

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Computer Science student with 2 years of academic excellence, ready to apply classroom knowledge in real-world internship opportunities
          </p>
        </div>

        {/* Hero Section with Stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Personal Introduction */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Passionate Computer Science Student
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                <p>
                  I'm a dedicated Computer Science student who has completed 2 years of rigorous academic training 
                  at the University of Technology. With a strong foundation in programming fundamentals, data structures, 
                  and software engineering principles, I'm eager to apply my knowledge in a professional internship setting.
                </p>
                <p>
                  My academic journey has been complemented by hands-on projects, online certifications, and self-directed 
                  learning. I've maintained a 9.21 GPA while actively participating in coding competitions and building 
                  real-world applications that demonstrate my technical capabilities.
                </p>
              </div>
            </div>

            {/* Personal Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-blue-600 transition-colors">
                  <info.icon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-400">{info.label}</div>
                    <div className="text-sm font-medium text-white">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-blue-500">
                <Coffee className="mr-2 h-4 w-4" />
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Animated Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              // Add link only for "Projects Completed" card
              const isProjectsCard = stat.label === "Projects Completed";
              const cardContent = (
                <CardContent className="p-6 text-center relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`text-3xl font-bold text-white mb-2 relative z-10 transition-all duration-1000 ${visibleStats ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-300 mb-1 relative z-10">{stat.label}</div>
                  <div className="text-xs text-gray-400 relative z-10">{stat.description}</div>
                </CardContent>
              );
              return isProjectsCard ? (
                <a key={index} href="/projects" className="block">
                  <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-500 group overflow-hidden cursor-pointer">
                    {cardContent}
                  </Card>
                </a>
              ) : (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-500 group overflow-hidden">
                  {cardContent}
                </Card>
              );
            })}
          </div>
        </div>

        {/* Tabbed Content Section */}
        <div className="mb-20">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === "overview" && (
              <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-semibold text-blue-400 mb-4">Academic Excellence</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      As a Computer Science student with 2 years of dedicated study, I've built a solid foundation 
                      in programming principles, algorithms, and software development. My academic journey has been 
                      marked by consistent performance and a genuine passion for technology.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-300">Strong foundation in computer science fundamentals</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300">Hands-on experience with modern development tools</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-300">Proven ability to learn and adapt quickly</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-semibold text-purple-400 mb-4">Ready for Internship</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Having completed 2 years of intensive Computer Science education, I'm now ready to bridge 
                      the gap between academic knowledge and industry practice. I'm seeking an internship opportunity 
                      where I can contribute meaningfully while continuing to learn and grow.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Quick Learner", "Team Player", "Problem Solver", "Eager to Contribute"].map((trait, index) => (
                        <Badge key={index} variant="secondary" className="bg-purple-600/20 text-purple-400 border-purple-600/30">
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "journey" && (
              <div className="animate-in fade-in duration-500">
                <div className="relative">
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 transform md:-translate-x-1/2"></div>
                  
                  <div className="space-y-8">
                    {[...journey].reverse().map((item, index) => {
                      const TypeIcon = getTypeIcon(item.type)
                      return (
                        <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                          <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} pl-12 md:pl-0`}>
                            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                              <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} flex items-center justify-center`}>
                                    <TypeIcon className="h-5 w-5 text-white" />
                                  </div>
                                  <div>
                                    <div className="text-blue-400 font-semibold text-sm">{item.year}</div>
                                    <div className="text-xs text-gray-400">{item.company}</div>
                                  </div>
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                                
                                <div className="space-y-3">
                                  <div>
                                    <div className="text-xs text-gray-500 mb-2">Key Achievements</div>
                                    <div className="flex flex-wrap gap-1">
                                      {item.achievements.map((achievement, achIndex) => (
                                        <Badge key={achIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                                          {achievement}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="text-xs text-gray-500 mb-2">Technologies Learned</div>
                                    <div className="flex flex-wrap gap-1">
                                      {item.technologies.map((tech, techIndex) => (
                                        <Badge key={techIndex} variant="secondary" className="text-xs bg-blue-600/20 text-blue-400 border-blue-600/30">
                                          {tech}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                          
                          <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-gray-950 transform md:-translate-x-1/2 z-10"></div>
                          
                          <div className="flex-1 hidden md:block"></div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "values" && (
              <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
                {values.map((value, index) => (
                  <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 group hover:transform hover:scale-105">
                    <CardContent className="p-8 text-center relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-4 relative z-10">{value.title}</h4>
                      <p className="text-gray-400 leading-relaxed relative z-10">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "interests" && (
              <div className="animate-in fade-in duration-500">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {interests.map((interest, index) => (
                    <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 group hover:transform hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="text-3xl">{interest.icon}</div>
                          <div>
                            <h4 className="font-semibold text-white">{interest.name}</h4>
                            <p className="text-sm text-gray-400">{interest.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 border-blue-800/50">
                  <CardContent className="p-8 text-center">
                    <h4 className="text-xl font-semibold text-blue-400 mb-4">Internship Goals</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      I'm excited to transition from academic learning to real-world application through an internship opportunity. 
                      My goal is to contribute meaningfully to projects while gaining invaluable industry experience and mentorship.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">Apply classroom knowledge to real-world projects</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">Learn industry best practices and workflows</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">Contribute to meaningful software solutions</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">Build professional network and gain mentorship</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
