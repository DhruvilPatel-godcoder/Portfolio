// "use client"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react'

// export function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
    
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1500))
    
//     setIsSubmitting(false)
//     setIsSubmitted(true)
    
//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setIsSubmitted(false)
//       setFormData({ name: "", email: "", subject: "", message: "" })
//     }, 3000)
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "alex.johnson@email.com",
//       href: "mailto:alex.johnson@email.com"
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+1 (555) 123-4567",
//       href: "tel:+15551234567"
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "San Francisco, CA",
//       href: "#"
//     }
//   ]

//   const socialLinks = [
//     {
//       icon: Github,
//       label: "GitHub",
//       href: "https://github.com"
//     },
//     {
//       icon: Linkedin,
//       label: "LinkedIn",
//       href: "https://linkedin.com"
//     }
//   ]

//   if (isSubmitted) {
//     return (
//       <section className="py-20 px-4 min-h-screen flex items-center justify-center">
//         <div className="max-w-md mx-auto text-center">
//           <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
//             <CheckCircle className="h-8 w-8 text-white" />
//           </div>
//           <h2 className="text-2xl font-bold text-white mb-4">Message Sent!</h2>
//           <p className="text-gray-400 mb-6">
//             Thank you for your message. I'll get back to you within 24 hours.
//           </p>
//           <Button 
//             onClick={() => setIsSubmitted(false)}
//             className="bg-blue-600 hover:bg-blue-700"
//           >
//             Send Another Message
//           </Button>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
//           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
//             I'm always open to discussing new opportunities and interesting projects.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div>
//             <h2 className="text-2xl font-semibold text-white mb-8">Contact Information</h2>
            
//             {/* Contact Methods */}
//             <div className="space-y-6 mb-8">
//               {contactInfo.map((info, index) => (
//                 <div key={index} className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
//                     <info.icon className="h-6 w-6 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-400">{info.label}</p>
//                     <a
//                       href={info.href}
//                       className="text-white hover:text-blue-400 transition-colors font-medium"
//                     >
//                       {info.value}
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
//               <div className="flex gap-4">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
//                     aria-label={social.label}
//                   >
//                     <social.icon className="h-6 w-6 text-white" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Additional Info */}
//             <div className="mt-8 p-6 bg-gray-900 rounded-lg">
//               <h3 className="text-lg font-semibold text-white mb-3">Let's Connect</h3>
//               <p className="text-gray-400 leading-relaxed">
//                 I'm currently seeking internship opportunities and would love to discuss 
//                 how I can contribute to your team. Feel free to reach out!
//               </p>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div>
//             <Card className="bg-gray-900 border-gray-800">
//               <CardContent className="p-8">
//                 <h2 className="text-2xl font-semibold text-white mb-6">Send Message</h2>
                
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                         Name *
//                       </label>
//                       <Input
//                         id="name"
//                         name="name"
//                         placeholder="Your Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                         Email *
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         placeholder="your@email.com"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
//                         required
//                       />
//                     </div>
//                   </div>
                  
//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
//                       Subject *
//                     </label>
//                     <Input
//                       id="subject"
//                       name="subject"
//                       placeholder="What's this about?"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
//                       required
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                       Message *
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       placeholder="Your message..."
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows={5}
//                       className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 resize-none"
//                       required
//                     />
//                   </div>
                  
//                   <Button 
//                     type="submit" 
//                     disabled={isSubmitting}
//                     className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="mr-2 h-4 w-4" />
//                         Send Message
//                       </>
//                     )}
//                   </Button>
//                 </form>

//                 <div className="mt-6 pt-6 border-t border-gray-700 text-center">
//                   <p className="text-sm text-gray-400">
//                     I typically respond within 24 hours.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-16 pt-8 border-t border-gray-800 text-center">
//           <p className="text-gray-400">
//             © 2024 Alex Johnson. Available for internship opportunities.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, Clock, MessageSquare, User, Calendar, Briefcase, Globe, Star } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Address",
      value: "alex.johnson@email.com",
      href: "mailto:dhruvilpatel959@email.com",
      description: "Primary contact method",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: "9727051096",
      href: "9727051096",
      description: "Available 9 AM - 8 PM PST",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      href: "#",
      description: "Open to remote opportunities",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      // followers: "1.2k followers",
      color: "hover:bg-gray-700"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dhruvil-patel-39a61b284",
      followers: "300 connections",
      color: "hover:bg-blue-600"
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: "#",
      followers: "View projects",
      color: "hover:bg-purple-600"
    }
  ]

  const quickStats = [
    { icon: Clock, label: "Response Time", value: "< 24 hours" },
    { icon: MessageSquare, label: "Preferred Contact", value: "Email" },
    { icon: Calendar, label: "Availability", value: "Immediate" },
    { icon: Briefcase, label: "Status", value: "Seeking Internship" }
  ]

  if (isSubmitted) {
    return (
      <section className="py-20 px-4 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Thank you for reaching out! I'll review your message and get back to you within 24 hours.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Send Another Message
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 sm:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Enhanced Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Available for Opportunities</span>
          </div>

          {/* Main Title with Enhanced Styling */}
          <div className="relative mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-purple-500 animate-gradient leading-tight">
              Let's Connect
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-green-600/20 to-purple-600/20 blur-xl opacity-30 animate-pulse"></div>
          </div>

          {/* Professional Subtitle */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-300">
              <MessageSquare className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium">Professional Inquiries</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center gap-2 text-gray-300">
              <Briefcase className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium">Internship Opportunities</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center gap-2 text-gray-300">
              <User className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium">Collaboration</span>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="relative mb-8">
            <div className="w-32 sm:w-40 h-1 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 mx-auto rounded-full"></div>
            <div className="absolute inset-0 w-32 sm:w-40 h-1 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 mx-auto rounded-full blur-sm opacity-50"></div>
          </div>

          {/* Professional Description */}
          <p className="text-gray-400 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
            I'm always excited to discuss <span className="text-blue-400 font-semibold">new opportunities</span>, 
            <span className="text-green-400 font-semibold"> innovative projects</span>, and potential 
            <span className="text-purple-400 font-semibold"> collaborations</span>. Let's start a conversation!
          </p>
        </div>

        {/* Quick Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 sm:mb-16">
          {quickStats.map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 group">
              <CardContent className="p-4 text-center">
                <stat.icon className="h-6 w-6 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-sm font-semibold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-white" />
                </div>
                Contact Information
              </h2>
              <p className="text-gray-400 mb-6">Ready to discuss opportunities and answer your questions</p>
            </div>
            
            {/* Enhanced Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-400 mb-1">{info.label}</h3>
                        <a
                          href={info.href}
                          className="text-white hover:text-blue-400 transition-colors font-semibold text-lg block"
                        >
                          {info.value}
                        </a>
                        <p className="text-xs text-gray-500 mt-1">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                Connect With Me
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 ${social.color} rounded-lg transition-all duration-300 group border border-gray-700 hover:border-gray-600`}
                  >
                    <social.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="text-white font-medium text-sm">{social.label}</div>
                      <div className="text-gray-400 text-xs">{social.followers}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            
          </div>

          {/* Enhanced Contact Form */}
          <div>
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">Send a Message</h2>
                    <p className="text-gray-400 text-sm">I'll respond within 24 hours</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What would you like to discuss?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about the opportunity, project, or how we can work together..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 resize-none focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-700 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4 text-green-400" />
                    <span>Typical response time: Less than 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 sm:mt-8 grid grid-cols-1 gap-8">
          {/* Professional Note */}
            <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-800/50 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Professional Opportunities
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  I'm actively seeking internship opportunities where I can contribute my technical skills 
                  and academic knowledge while learning from experienced professionals. Whether you're 
                  looking for a dedicated team member or want to discuss potential collaborations, 
                  I'd love to hear from you!
                </p>
              </CardContent>
            </Card>
        </div>

        {/* Enhanced Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-white font-semibold">Alex Johnson</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">Computer Science Student</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Dhruvil Patel. Ready to contribute to innovative projects and grow professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
