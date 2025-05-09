"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MatrixRain } from '@/components/animations/matrix-rain'
import { Typewriter } from '@/components/animations/typewriter'

export function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false)

  const scrollToExpertise = () => {
    const expertiseSection = document.getElementById('expertise')
    if (expertiseSection) {
      expertiseSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MatrixRain />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter">
            <Typewriter 
              text="Securing Your Digital Future" 
              className="text-primary glow"
              onComplete={() => setShowSubtitle(true)}
            />
          </h1>
          
          {showSubtitle && (
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl mb-8 text-foreground/80"
            >
              KyubiSec provides cutting-edge cybersecurity solutions to protect your digital assets and empower your security teams.
            </motion.h2>
          )}
          
          {showSubtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button 
                onClick={scrollToExpertise}
                variant="cyber" 
                size="lg" 
                className="text-base tracking-wide"
              >
                Explore Services
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-base tracking-wide group hover:border-secondary"
              >
                <span className="group-hover:text-secondary">Get Started</span>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-8 w-8 text-primary cursor-pointer" onClick={scrollToExpertise} />
        </motion.div>
      </motion.div>
    </section>
  )
}