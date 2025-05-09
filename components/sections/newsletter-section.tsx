"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 relative overflow-hidden"
          >
            <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="flex justify-center mb-8">
              <div className="bg-secondary/10 p-4 rounded-full">
                <Mail className="w-8 h-8 text-secondary" />
              </div>
            </div>
            
            <div className="text-center mb-8 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Stay <span className="text-secondary glow-secondary">Protected</span>
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest cybersecurity insights, threat intelligence,
                and exclusive security resources.
              </p>
            </div>
            
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto relative z-10"
            >
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 bg-background/50 border-border/50 focus-visible:ring-primary"
                />
              </div>
              <Button type="submit" className="h-12 px-6">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.form>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs text-foreground/60 text-center mt-4 relative z-10"
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 