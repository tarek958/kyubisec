"use client"

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "John Doe",
    title: "CTO, Tech Innovators",
    quote: "Kyubisec's penetration testing revealed critical vulnerabilities we had missed for years. Their detailed reports and remediation advice significantly improved our security posture.",
    rating: 5
  },
  {
    name: "Emily Clark",
    title: "CISO, FinanceGuard",
    quote: "The team's expertise in financial compliance security is unmatched. They helped us achieve regulatory compliance while strengthening our overall security framework.",
    rating: 5
  },
  {
    name: "Michael Reynolds",
    title: "IT Director, Healthcare Solutions",
    quote: "Their specialized knowledge in healthcare data protection helped us secure patient information beyond compliance requirements. Truly impressive service.",
    rating: 4
  },
  {
    name: "Sophia Martinez",
    title: "CEO, E-commerce Platform",
    quote: "After experiencing a breach, Kyubisec's incident response team contained the threat quickly and helped us rebuild stronger than before.",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Client <span className="text-secondary glow-secondary">Testimonials</span>
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Hear what our clients say about our cybersecurity services and how we've helped 
            strengthen their security posture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-border/50 hover:border-primary/20 transition-colors relative overflow-hidden group"
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-500" />
              
              <div className="flex items-center mb-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-muted-foreground" />
                ))}
              </div>
              
              <p className="text-lg italic text-foreground/90 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 