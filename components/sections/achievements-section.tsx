"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Users, Code, Zap } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Placement Excellence",
    description: "95% of our members secured internships and placements at top tech companies.",
    stat: "95%",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Zap,
    title: "Hackathon Champions",
    description: "Won 25+ hackathons including national and international competitions.",
    stat: "10+",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: Code,
    title: "Open Source Contributors",
    description: "Our members have contributed to 100+ open source projects worldwide.",
    stat: "100+",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Conducted 50+ workshops and trained over 2000 students in various technologies.",
    stat: "2000+",
    gradient: "from-pink-500 to-rose-500",
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Celebrating milestones and excellence in our journey of innovation and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl shadow-lg shadow-blue-200"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-blue-500/40 transition-all duration-300 h-full">
                <div className="flex items-start gap-6">
                  <motion.div
                    className={`p-4 rounded-xl bg-gradient-to-br ${achievement.gradient} flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {achievement.description}
                    </p>
                    <div className={`text-4xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                      {achievement.stat}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-600/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
