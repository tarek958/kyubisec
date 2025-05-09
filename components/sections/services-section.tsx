"use client"

import { motion } from 'framer-motion'
import { Shield, Lock, Code, Database, Cloud, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Security Auditing",
    description: "Comprehensive security assessments to identify vulnerabilities in your systems.",
    color: "primary"
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Incident Response",
    description: "24/7 emergency response team to handle security breaches and cyber attacks.",
    color: "secondary"
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Secure Development",
    description: "Implementation of secure coding practices and code review services.",
    color: "accent"
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Data Protection",
    description: "Advanced encryption and data security solutions for sensitive information.",
    color: "primary"
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Security",
    description: "Securing cloud infrastructure and applications against modern threats.",
    color: "secondary"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "IoT Security",
    description: "Specialized security solutions for Internet of Things devices and networks.",
    color: "accent"
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Our <span className="text-primary glow">Services</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your digital assets
            and strengthen your security posture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm hover:border-${service.color} hover:card-glow-${service.color} transition-all duration-300`}
            >
              <div className={`text-${service.color} mb-4`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 text-${service.color} glow-${service.color}`}>
                {service.title}
              </h3>
              <p className="text-foreground/70 mb-6">
                {service.description}
              </p>
              <Button variant={`glow${service.color.charAt(0).toUpperCase() + service.color.slice(1)}`} size="sm">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}