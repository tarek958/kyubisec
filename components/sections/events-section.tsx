"use client"

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const events = [
  {
    id: 1,
    title: "CyberNight CTF Competition",
    date: "June 15, 2025",
    location: "Online",
    imageUrl: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
    participants: 120,
    description: "A 24-hour online CTF competition featuring challenges in web exploitation, cryptography, and forensics."
  },
  {
    id: 2,
    title: "Advanced Penetration Testing Workshop",
    date: "July 22-23, 2025",
    location: "San Francisco, CA",
    imageUrl: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
    participants: 40,
    description: "Hands-on workshop covering the latest penetration testing techniques for web applications and networks."
  },
  {
    id: 3,
    title: "Cybersecurity Summit 2025",
    date: "August 10-12, 2025",
    location: "New York, NY",
    imageUrl: "https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg",
    participants: 250,
    description: "Annual summit bringing together cybersecurity experts to discuss emerging threats and defense strategies."
  },
  {
    id: 4,
    title: "Threat Hunting Masterclass",
    date: "September 5, 2025",
    location: "Online",
    imageUrl: "https://images.pexels.com/photos/4389978/pexels-photo-4389978.jpeg",
    participants: 75,
    description: "Learn advanced threat hunting techniques to proactively identify and neutralize threats in your network."
  }
]

export function EventsSection() {
  const carouselRef = useRef(null)

  return (
    <section id="events" className="py-20 relative">
      {/* Background grid overlay */}
      <div className="absolute inset-0 grid-background opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Upcoming <span className="text-accent glow-accent">Events</span>
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Join our exclusive cybersecurity events, workshops, and competitions to 
            network with professionals and enhance your skills.
          </p>
        </motion.div>
        
        <Carousel
          ref={carouselRef}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {events.map((event, index) => (
              <CarouselItem key={event.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="relative h-full rounded-lg overflow-hidden border border-border hover:border-accent group transition-all duration-300">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img 
                        src={event.imageUrl} 
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 tracking-tight text-accent glow-accent line-clamp-1">
                        {event.title}
                      </h3>
                      
                      <p className="text-foreground/70 mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      
                      <div className="flex flex-col space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-accent" />
                          <span className="text-foreground/80">{event.date}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-secondary" />
                          <span className="text-foreground/80">{event.location}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-foreground/80">{event.participants} participants</span>
                        </div>
                      </div>
                      
                      <Button variant="glowAccent" className="w-full">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <CarouselPrevious className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <CarouselNext className="h-4 w-4" />
            </Button>
          </div>
        </Carousel>
        
        <div className="mt-10 text-center">
          <Button variant="link" className="text-primary">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}