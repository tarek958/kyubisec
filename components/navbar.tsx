"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShieldAlert } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/expertise', label: 'Services' },
  { href: '/events', label: 'Events' },
  { href: '/pentest', label: 'Pentest Machines' },
  { href: '/ctf', label: 'CTF' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 20,
      }
    }
  }

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300',
        scrolled ? 'bg-background/95 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-xl font-bold tracking-tight"
          >
            <ShieldAlert className="h-6 w-6 text-primary" />
            <span className="text-glitch glow" data-text="KyubiSec">KyubiSec</span>
          </Link>
          
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium tracking-wide transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-foreground/80"
                )}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
          
          <button 
            onClick={toggleMenu} 
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="container mx-auto px-4 pb-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-muted hover:text-primary",
                      pathname === item.href ? "bg-muted text-primary" : "text-foreground/80"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}