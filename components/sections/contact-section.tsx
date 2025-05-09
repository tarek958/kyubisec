"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Show success message (in real implementation)
      alert('Message sent successfully!')
    }, 1500)
  }
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background via-muted/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Get in <span className="text-primary glow">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Have questions about our services? Interested in customized training?
            Send us a message and our team will get back to you.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight text-secondary glow-secondary">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-foreground/70">contact@kyubisec.com</p>
                    <p className="text-foreground/70">support@kyubisec.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/20 text-secondary mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-foreground/70">+1 (555) 123-4567</p>
                    <p className="text-foreground/70">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/20 text-accent mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-foreground/70">123 Cyber Street</p>
                    <p className="text-foreground/70">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map or additional info */}
            <div className="rounded-lg overflow-hidden border border-border h-64 bg-muted/20 flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg" 
                alt="Map location" 
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg border border-border p-6 bg-card/30 backdrop-blur-sm hover:card-glow transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6 tracking-tight text-primary glow">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-background/50 border-muted focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50 border-muted focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="bg-background/50 border-muted focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="bg-background/50 border-muted focus:border-primary focus:ring-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="glow"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mr-2 h-4 w-4 border-2 border-t-transparent border-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}