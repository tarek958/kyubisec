"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

const commands = [
  { text: '> Initializing security scan...', delay: 1000 },
  { text: '> Checking system vulnerabilities...', delay: 2000 },
  { text: '> Analyzing network traffic...', delay: 3000 },
  { text: '> Detecting potential threats...', delay: 4000 },
  { text: '> Implementing countermeasures...', delay: 5000 },
  { text: '> System secured. KyubiSec active.', delay: 6000 },
]

export function TerminalSection() {
  const [displayedCommands, setDisplayedCommands] = useState<string[]>([])

  useEffect(() => {
    commands.forEach((command, index) => {
      setTimeout(() => {
        setDisplayedCommands(prev => [...prev, command.text])
      }, command.delay)
    })
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-lg border border-border bg-black/50 overflow-hidden backdrop-blur-sm">
            <div className="bg-muted/30 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <Terminal className="h-4 w-4 text-primary ml-2" />
              <span className="text-xs text-muted-foreground">kyubisec_terminal</span>
            </div>
            
            <div className="p-6 font-mono text-sm space-y-2">
              {displayedCommands.map((command, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-foreground/90"
                >
                  {command}
                </motion.div>
              ))}
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block w-2 h-4 bg-primary ml-1"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}