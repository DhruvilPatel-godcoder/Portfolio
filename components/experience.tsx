import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      type: "education",
      title: "Bachelor of Science in Computer Science",
      organization: "University of Technology",
      period: "2022 - 2026",
      description: "Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Web Development",
      achievements: ["GPA: 3.8/4.0", "Dean's List (3 semesters)", "Computer Science Club President"]
    },
    {
      type: "work",
      title: "Frontend Developer Intern",
      organization: "TechStart Solutions",
      period: "Summer 2024",
      description: "Developed responsive web applications using React and TypeScript. Collaborated with design team to implement UI/UX improvements.",
      achievements: ["Improved page load speed by 40%", "Built 5+ reusable components", "Mentored 2 junior interns"]
    },
    {
      type: "work",
      title: "Web Development Freelancer",
      organization: "Self-Employed",
      period: "2023 - Present",
      description: "Created custom websites for small businesses and startups. Managed full project lifecycle from requirements to deployment.",
      achievements: ["10+ successful projects", "100% client satisfaction", "Average project value: $2,500"]
    },
    {
      type: "certification",
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      period: "2024",
      description: "Foundational understanding of AWS cloud services, security, and pricing models.",
      achievements: ["Score: 850/1000", "Valid until 2027"]
    }
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return GraduationCap
      case "work":
        return Briefcase
      case "certification":
        return Award
      default:
        return Briefcase
    }
  }

  const getIconColor = (type: string) => {
    switch (type) {
      case "education":
        return "text-green-400"
      case "work":
        return "text-blue-400"
      case "certification":
        return "text-purple-400"
      default:
        return "text-blue-400"
    }
  }

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic background and professional experience in technology
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = getIcon(exp.type)
            return (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-blue-600 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-gray-800 ${getIconColor(exp.type)}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <div className="flex items-center text-sm text-gray-400 mt-1 sm:mt-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className="text-blue-400 font-medium mb-3">{exp.organization}</p>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
