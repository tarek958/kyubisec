"use client"

import { useEffect, useRef } from 'react'

export function MatrixRain({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas to be full width and height
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Matrix characters - can be customized
    const characters = '01'.split('')
    
    // Define columns based on font size and canvas width
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    
    // Initialize drops at random positions
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const draw = () => {
      // Add semi-transparent black rectangle to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Set text color and font
      ctx.fillStyle = '#3B82F6' // Primary blue color
      ctx.font = `${fontSize}px "Fira Code", monospace`
      
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters[Math.floor(Math.random() * characters.length)]
        
        // Random opacity for more variation
        const opacity = Math.random() * 0.5 + 0.5
        ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        
        // Move the drop down
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        
        drops[i]++
      }
    }

    const interval = setInterval(draw, 33) // ~30 FPS

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Recompute columns
      const newColumns = Math.floor(canvas.width / fontSize)
      
      // Adjust drops array size
      if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) {
          drops[i] = Math.random() * -100
        }
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={`absolute inset-0 -z-10 opacity-20 ${className}`} />
}