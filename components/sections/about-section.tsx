"use client"

import { motion } from 'framer-motion'
import { Shield, Lock, Zap } from 'lucide-react'

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background grid overlay */}
      <div className="absolute inset-0 grid-background opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="glow-secondary text-secondary">About</span> Us
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-lg text-foreground/80">
              At KyubiSec, we're on a mission to revolutionize cybersecurity training and defense readiness.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary glow">Our Mission</h3>
                <p className="text-foreground/80">
                  To provide hands-on, practical cybersecurity training that prepares organizations 
                  for real-world threats. We believe that the best defense is built through 
                  experiential learning and simulated attack scenarios.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-accent glow-accent">Our Vision</h3>
                <p className="text-foreground/80">
                  To empower organizations to build robust security postures through skilled 
                  teams. We envision a world where every security professional has access to 
                  cutting-edge training and realistic environments to hone their skills.
                </p>
              </div>
              
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary">Proactive Protection</h4>
                    <p className="text-sm text-foreground/80">We believe in finding vulnerabilities before attackers do.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Lock className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-secondary">Continuous Learning</h4>
                    <p className="text-sm text-foreground/80">The threat landscape evolves daily - your training should too.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-accent">Practical Application</h4>
                    <p className="text-sm text-foreground/80">Theory alone isn't enough - our approach is hands-on and realistic.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="relative h-80 md:h-full rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border border-border/30"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-48 h-48 md:w-64 md:h-64 relative"
                >
                  {/* Outer circle */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
                  
                  {/* Middle circle */}
                  <div className="absolute inset-4 rounded-full border-2 border-secondary/40" />
                  
                  {/* Inner circle */}
                  <div className="absolute inset-8 rounded-full border-2 border-accent/50" />
                  
                  {/* Center shield */}
                  <div className="absolute inset-12 rounded-full bg-background/20 flex items-center justify-center backdrop-blur-sm">
                    <Shield className="w-16 h-16 text-primary" />
                  </div>
                  
                  {/* Orbiting elements */}
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary rounded-full" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}