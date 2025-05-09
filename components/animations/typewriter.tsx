"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterProps {
  text: string
  delay?: number
  className?: string
  onComplete?: () => void
}

export function Typewriter({ 
  text, 
  delay = 40, 
  className = "",
  onComplete 
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)
      
      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
      onComplete?.()
    }
  }, [currentIndex, delay, text, onComplete])

  return (
    <span className={className}>
      {displayText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block ml-1 w-1 h-5 align-bottom bg-primary"
        />
      )}
    </span>
  )
}