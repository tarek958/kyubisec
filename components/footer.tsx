import Link from 'next/link'
import { Github, Linkedin, Twitter, Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-background/95 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h4 className="text-xl font-bold tracking-tight text-primary glow">KyubiSec</h4>
            <p className="text-sm text-muted-foreground">
              Securing Your Digital Future with Advanced Cybersecurity
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold tracking-tight text-secondary glow-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="text-foreground/80 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-foreground/80 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#expertise" className="text-foreground/80 hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="#events" className="text-foreground/80 hover:text-primary transition-colors">Events</Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold tracking-tight text-accent glow-accent">Training</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#pentest" className="text-foreground/80 hover:text-primary transition-colors">Pentest Machines</Link>
              </li>
              <li>
                <Link href="#ctf" className="text-foreground/80 hover:text-primary transition-colors">CTF Challenges</Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">Webinars</Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">Workshops</Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">Resources</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold tracking-tight text-primary glow">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border/20 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} KyubiSec. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}