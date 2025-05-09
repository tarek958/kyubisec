"use client"

import { motion } from 'framer-motion'
import { Star, Award, Flag, Users, Trophy, ArrowRight, Clock, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const leaderboardData = [
  { id: 1, name: "WhiteHat42", points: 8750, solved: 28, rank: 1 },
  { id: 2, name: "ByteBandit", points: 8200, solved: 26, rank: 2 },
  { id: 3, name: "NullSector", points: 7900, solved: 25, rank: 3 },
  { id: 4, name: "CryptoCracker", points: 7600, solved: 23, rank: 4 },
  { id: 5, name: "BinaryNinja", points: 7300, solved: 21, rank: 5 },
]

const badgesData = [
  { id: 1, name: "First Blood", description: "First to solve a challenge", icon: <Flag className="h-5 w-5" /> },
  { id: 2, name: "Perfect Score", description: "Completed all challenges in a category", icon: <Star className="h-5 w-5" /> },
  { id: 3, name: "Team Player", description: "Contributed to 10+ team solves", icon: <Users className="h-5 w-5" /> },
  { id: 4, name: "Champion", description: "Ranked 1st in a competition", icon: <Trophy className="h-5 w-5" /> },
]

const categoriesData = [
  { id: 1, name: "Web Exploitation", progress: 75, color: "bg-blue-500" },
  { id: 2, name: "Cryptography", progress: 60, color: "bg-purple-500" },
  { id: 3, name: "Forensics", progress: 45, color: "bg-green-500" },
  { id: 4, name: "Binary Exploitation", progress: 30, color: "bg-red-500" },
]

export function CTFSection() {
  return (
    <section id="ctf" className="py-20 relative">
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
            <span className="text-accent glow-accent">CTF</span> Challenges
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Test your skills in our Capture The Flag competitions. Solve challenges, 
            earn points, and climb the leaderboard to showcase your expertise.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-border bg-card/30 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold tracking-tight text-primary glow">
                <BarChart3 className="h-5 w-5 inline-block mr-2" />
                Leaderboard
              </h3>
              <Button variant="link" size="sm" className="text-primary">
                Full Rankings
              </Button>
            </div>
            
            <div className="space-y-4">
              {leaderboardData.map((user) => (
                <div 
                  key={user.id}
                  className="flex items-center justify-between p-3 rounded-md bg-muted/20 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary text-sm font-bold">
                      {user.rank}
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-sm font-medium">{user.points.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">points</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{user.solved}</div>
                      <div className="text-xs text-muted-foreground">solved</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-border/50 text-center">
              <Button variant="outline" className="w-full group">
                <span className="group-hover:mr-2 transition-all">View Full Leaderboard</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
              </Button>
            </div>
          </motion.div>
          
          {/* Badges and Categories */}
          <div className="space-y-8">
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="rounded-lg border border-border bg-card/30 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold tracking-tight text-secondary glow-secondary">
                  <Award className="h-5 w-5 inline-block mr-2" />
                  Achievement Badges
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {badgesData.map((badge) => (
                  <div 
                    key={badge.id}
                    className="flex items-center gap-3 p-3 rounded-md bg-muted/20 hover:bg-muted/30 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/20 text-secondary group-hover:scale-110 transition-transform">
                      {badge.icon}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{badge.name}</div>
                      <div className="text-xs text-muted-foreground">{badge.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Categories Progress */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-lg border border-border bg-card/30 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold tracking-tight text-accent glow-accent">
                  <Flag className="h-5 w-5 inline-block mr-2" />
                  Category Progress
                </h3>
              </div>
              
              <div className="space-y-5">
                {categoriesData.map((category) => (
                  <div key={category.id} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{category.name}</span>
                      <span>{category.progress}%</span>
                    </div>
                    <Progress 
                      value={category.progress} 
                      className="h-2 bg-muted/30" 
                      indicatorClassName={category.color} 
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg p-8 border border-border/30"
        >
          <h3 className="text-2xl font-bold mb-4 tracking-tight">
            Ready to test your skills?
          </h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Join our upcoming CTF competition starting on July 15th, 2025.
            Register now to participate and compete with cybersecurity professionals from around the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="glowAccent" size="lg">
              <Clock className="h-4 w-4 mr-2" />
              Register for CTF
            </Button>
            <Button variant="outline" size="lg">
              View Past Competitions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}