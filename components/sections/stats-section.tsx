"use client"

import { motion } from 'framer-motion'
import { Shield, Users, Award, Target } from 'lucide-react'

const stats = [
  {
    icon: <Shield className="h-8 w-8" />,
    value: "500+",
    label: "Security Audits",
    color: "primary"
  },
  {
    icon: <Users className="h-8 w-8" />,
    value: "10,000+",
    label: "Trained Professionals",
    color: "secondary"
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: "50+",
    label: "Industry Awards",
    color: "accent"
  },
  {
    icon: <Target className="h-8 w-8" />,
    value: "99.9%",
    label: "Success Rate",
    color: "primary"
  }
]

export function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`text-center p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm hover:border-${stat.color} hover:card-glow-${stat.color} transition-all duration-300`}
            >
              <div className={`text-${stat.color} flex justify-center mb-4`}>
                {stat.icon}
              </div>
              <div className={`text-4xl font-bold mb-2 text-${stat.color} glow-${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-foreground/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}