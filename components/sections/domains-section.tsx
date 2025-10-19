"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Smartphone, Brain, Shield, Code as Code2, Database, Cloud } from "lucide-react"


const domains = [
  {
    icon: Globe,
    title: "Web Development(web2 & web3)",
    description: "Master modern web technologies, frameworks, and best practices to build stunning web applications.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Create powerful mobile applications for iOS and Android using cutting-edge frameworks.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Dive into artificial intelligence, deep learning, and build intelligent systems.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Learn ethical hacking, penetration testing, and protect digital infrastructure.",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: Code2,
    title: "Competitive Coding",
    description: "Sharpen your problem-solving skills and excel in coding competitions.",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    icon: Database,
    title: "Data Science",
    description: "Analyze data, extract insights, and make data-driven decisions.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Master cloud platforms, DevOps, and scalable infrastructure design.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
  icon: Cloud,
  title: "AI Security",
  description: "AI-Powered Cybersecurity",
  gradient: "from-violet-500 to-purple-500",
},

]

export function DomainsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Domains</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore diverse technology domains and find your passion. Each domain offers comprehensive roadmaps
            and hands-on learning experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-blue-500/40 transition-all duration-300">
                <motion.div
                  className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${domain.gradient} w-fit`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.4}}
                >
                  <domain.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                  {domain.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {domain.description}
                </p>

                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${domain.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
