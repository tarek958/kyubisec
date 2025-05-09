"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

const blogPosts = [
  {
    title: "Top 10 Cybersecurity Threats of 2023",
    excerpt: "An in-depth analysis of the most prevalent cyber threats organizations faced this year and how to protect against them.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
    author: "Alex Chen",
    date: "Nov 15, 2023",
    category: "Threat Intelligence"
  },
  {
    title: "Implementing Zero Trust Architecture",
    excerpt: "A practical guide to implementing zero trust security models in modern enterprise environments.",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
    author: "Sarah Johnson",
    date: "Oct 28, 2023",
    category: "Security Architecture"
  },
  {
    title: "The Rise of AI-Powered Attacks",
    excerpt: "How artificial intelligence is being weaponized by threat actors and what defense strategies are most effective.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    author: "Marcus Rodriguez",
    date: "Sep 19, 2023",
    category: "Emerging Threats"
  },
  {
    title: "Securing Cloud Infrastructure in 2023",
    excerpt: "Best practices for securing multi-cloud environments against sophisticated attacks and compliance challenges.",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    author: "Emily Zhang",
    date: "Aug 05, 2023",
    category: "Cloud Security"
  }
]

export function BlogSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Latest <span className="text-secondary glow-secondary">Insights</span>
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Stay informed with our expert analysis on the latest cybersecurity trends, 
            threats, and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card/30 rounded-xl overflow-hidden border border-border/50 hover:border-primary/20 transition-colors"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-5">
                <div className="inline-block px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary mb-3">
                  {post.category}
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <Button variant="link" className="px-0 text-secondary group-hover:text-primary transition-colors">
                  Read more <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 