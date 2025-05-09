"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Twitter, ChevronLeft, ChevronRight, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const team = [
  {
    name: "Tarek Dhokkar",
    role: "Technical Team",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    bio: "10+ years experience in cybersecurity and threat analysis.",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Ahmed Ben Salem",
    role: "Technical Team",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    bio: "Expert in red teaming and vulnerability assessment.",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Oussema Hleli",
    role: "Technical Team",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    bio: "Specializes in zero-day vulnerability research and exploit development.",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Med Amine Mzoughi",
    role: "Technical Team",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    bio: "Develops and leads advanced cybersecurity training programs.",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Omar Aloulou",
    role: "Technical Team",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    bio: "Develops and leads advanced cybersecurity training programs.",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Ahmed Abd el Moemen",
    role: "Technical Team",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    bio: "Develops and leads advanced cybersecurity training programs.",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  }
]

export function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  
  const visibleCount = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  }
  
  const sliderVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      }
    })
  }
  
  // Get visible members based on screen size - we'll show different numbers of members
  // depending on the screen size
  const getVisibleMembers = () => {
    // These indices will wrap around the array
    const indices = []
    for (let i = 0; i < visibleCount.desktop; i++) {
      indices.push((activeIndex + i) % team.length)
    }
    return indices.map(index => team[index])
  }
  
  const handleNext = () => {
    setIsAutoplay(false)
    setDirection(1)
    setActiveIndex((prevIndex) => (prevIndex + 1) % team.length)
  }
  
  const handlePrev = () => {
    setIsAutoplay(false)
    setDirection(-1)
    setActiveIndex((prevIndex) => (prevIndex - 1 + team.length) % team.length)
  }
  
  // Handle autoplay
  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        setDirection(1)
        setActiveIndex((prevIndex) => (prevIndex + 1) % team.length)
      }, 5000)
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [isAutoplay, activeIndex])
  
  // Restart autoplay when user stops interacting
  useEffect(() => {
    const restartTimer = setTimeout(() => {
      setIsAutoplay(true)
    }, 10000)
    
    return () => clearTimeout(restartTimer)
  }, [activeIndex])

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/5 to-background">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-secondary/10 mb-4">
            <Users className="h-6 w-6 text-secondary" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Meet Our <span className="text-secondary glow-secondary">Team</span>
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Our talented experts are dedicated to protecting your digital assets
            and advancing the field of information security.
          </p>
        </motion.div>

        {/* Team Slider */}
        <div className="relative mb-16">
          <div className="max-w-5xl mx-auto overflow-hidden px-4">
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AnimatePresence custom={direction} mode="popLayout">
                {getVisibleMembers().map((member, idx) => (
                  <motion.div
                    key={`${activeIndex}-${idx}`}
                    custom={direction}
                    variants={sliderVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] perspective-500"
                  >
                    <motion.div 
                      className="group relative bg-card/30 backdrop-blur-sm border border-border/30 hover:border-secondary/30 rounded-xl overflow-hidden transition-all duration-300"
                      whileHover={{ 
                        y: -10,
                        boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)",
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="relative h-80 overflow-hidden">
                        {/* Glowing accent before the image */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 via-transparent to-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        <motion.div
                          className="absolute inset-0 bg-gradient-radial from-transparent to-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                          whileHover={{ opacity: 1 }}
                        />
                        
                        <img
                          src={member.image}
                          alt={member.name}
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        <motion.div 
                          className="absolute bottom-0 left-0 w-full p-6 text-center translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20"
                          whileHover={{ y: 0, opacity: 1 }}
                        >
                          <div className="flex justify-center space-x-3">
                            <Button variant="secondary" size="icon" className="rounded-full h-10 w-10">
                              <Github className="h-5 w-5" />
                            </Button>
                            <Button variant="secondary" size="icon" className="rounded-full h-10 w-10">
                              <Linkedin className="h-5 w-5" />
                            </Button>
                            <Button variant="secondary" size="icon" className="rounded-full h-10 w-10">
                              <Twitter className="h-5 w-5" />
                            </Button>
                          </div>
                        </motion.div>
                      </div>
                      
                      <div className="p-6 text-center">
                        <motion.h3 
                          className="text-xl font-bold text-secondary glow-secondary"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {member.name}
                        </motion.h3>
                        <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs my-2">
                          {member.role}
                        </div>
                        <p className="text-sm text-foreground/70 mt-2">{member.bio}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            
            {/* Navigation controls */}
            <div className="flex justify-center items-center gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-card/30 backdrop-blur-sm hover:bg-secondary/20 transition-colors border-border/40"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex space-x-1">
                {team.map((_, idx) => (
                  <Button
                    key={idx}
                    variant="ghost"
                    size="icon"
                    className={`h-2 w-2 rounded-full p-0 ${
                      idx === activeIndex 
                        ? 'bg-secondary' 
                        : 'bg-muted-foreground/20 hover:bg-secondary/50'
                    }`}
                    onClick={() => {
                      setIsAutoplay(false)
                      setDirection(idx > activeIndex ? 1 : -1)
                      setActiveIndex(idx)
                    }}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-card/30 backdrop-blur-sm hover:bg-secondary/20 transition-colors border-border/40"
                onClick={handleNext}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="glowSecondary" size="lg" className="px-8">
            Join Our Team
          </Button>
        </motion.div>
      </div>
    </section>
  )
}