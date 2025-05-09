"use client"

import { motion } from 'framer-motion'
import { 
  Brain, 
  Terminal, 
  Trophy, 
  Shield, 
  Code, 
  CloudLightning 
} from 'lucide-react'
import { Button } from '@/components/ui/button'

// 3D animated icon components
const CubeIcon = ({ color = "primary" }) => {
  const colorClasses = {
    primary: "stroke-primary fill-primary/10",
    secondary: "stroke-secondary fill-secondary/10",
    accent: "stroke-accent fill-accent/10"
  }
  
  return (
    <motion.svg 
      initial={{ rotateY: 0 }}
      animate={{ rotateY: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      viewBox="0 0 100 100" 
      className={`w-20 h-20 ${colorClasses[color as keyof typeof colorClasses]}`}
    >
      <motion.polygon 
        points="50,10 90,30 90,70 50,90 10,70 10,30" 
        strokeWidth="2"
        initial={{ y: 0 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.line 
        x1="50" y1="10" x2="50" y2="90" 
        strokeWidth="1" strokeDasharray="5,5"
        animate={{ strokeDashoffset: [0, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.line 
        x1="10" y1="30" x2="90" y2="30" 
        strokeWidth="1" strokeDasharray="5,5"
        animate={{ strokeDashoffset: [0, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.line 
        x1="10" y1="70" x2="90" y2="70" 
        strokeWidth="1" strokeDasharray="5,5"
        animate={{ strokeDashoffset: [0, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </motion.svg>
  )
}

const SphereIcon = ({ color = "primary" }) => {
  const colorClasses = {
    primary: "stroke-primary",
    secondary: "stroke-secondary",
    accent: "stroke-accent"
  }
  
  return (
    <motion.svg 
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      viewBox="0 0 100 100" 
      className={`w-20 h-20 ${colorClasses[color as keyof typeof colorClasses]}`}
    >
      <motion.circle 
        cx="50" cy="50" r="40" 
        fill="none" 
        strokeWidth="2"
      />
      <motion.ellipse 
        cx="50" cy="50" rx="40" ry="15" 
        fill="none" 
        strokeWidth="1"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.ellipse 
        cx="50" cy="50" rx="40" ry="15" 
        fill="none" 
        strokeWidth="1"
        initial={{ rotate: 90 }}
        animate={{ rotate: 450 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </motion.svg>
  )
}

const PyramidIcon = ({ color = "primary" }) => {
  const colorClasses = {
    primary: "stroke-primary fill-primary/10",
    secondary: "stroke-secondary fill-secondary/10",
    accent: "stroke-accent fill-accent/10"
  }
  
  return (
    <motion.svg 
      initial={{ rotateY: 0 }}
      animate={{ rotateY: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      viewBox="0 0 100 100" 
      className={`w-20 h-20 ${colorClasses[color as keyof typeof colorClasses]}`}
    >
      <motion.polygon 
        points="50,10 90,80 10,80" 
        strokeWidth="2"
        initial={{ y: 0 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.line 
        x1="50" y1="10" x2="50" y2="80" 
        strokeWidth="1" strokeDasharray="5,5"
        animate={{ strokeDashoffset: [0, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.line 
        x1="50" y1="10" x2="10" y2="80" 
        strokeWidth="1" strokeDasharray="5,5"
        animate={{ strokeDashoffset: [0, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.line 
        x1="50" y1="10" x2="90" y2="80" 
        strokeWidth="1" strokeDasharray="5,5"
        animate={{ strokeDashoffset: [0, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </motion.svg>
  )
}

// Service section component
interface ServiceSectionProps {
  title: string
  subtitle: string
  description: string
  points: string[]
  icon: React.ReactNode
  threeD: React.ReactNode
  color: "primary" | "secondary" | "accent"
  reverse?: boolean
  cta: { text: string; link: string }
  index: number
}

function ServiceSection({ 
  title, 
  subtitle, 
  description, 
  points, 
  icon, 
  threeD,
  color, 
  reverse = false,
  cta,
  index
}: ServiceSectionProps) {
  const colorClasses = {
    primary: {
      text: "text-primary",
      glow: "glow",
      button: "glow",
      border: "border-primary/20",
      bg: "bg-primary/5"
    },
    secondary: {
      text: "text-secondary",
      glow: "glow-secondary",
      button: "glowSecondary",
      border: "border-secondary/20",
      bg: "bg-secondary/5"
    },
    accent: {
      text: "text-accent",
      glow: "glow-accent",
      button: "glowAccent",
      border: "border-accent/20",
      bg: "bg-accent/5"
    }
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative py-20 ${index % 2 !== 0 ? 'bg-muted/10' : ''}`}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          className={`absolute rounded-full ${colorClasses[color].bg} blur-3xl opacity-20 w-[500px] h-[500px]`}
          initial={{ x: reverse ? '80%' : '20%', y: '20%' }}
          animate={{ 
            x: reverse ? ['80%', '70%', '80%'] : ['20%', '30%', '20%'],
            y: ['20%', '25%', '20%']
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}>
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-4 relative">
              <div className="absolute top-0 right-0">
                <div className={`rounded-full ${colorClasses[color].bg} p-3`}>
                  {icon}
                </div>
              </div>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 flex justify-center items-center"
              >
                {threeD}
              </motion.div>
            </div>
          </motion.div>
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className={`text-lg font-semibold mb-2 ${colorClasses[color].text} ${colorClasses[color].glow}`}>
                {subtitle}
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {title}
              </h2>
              
              <p className="text-foreground/80 mb-8">
                {description}
              </p>
              
              <ul className="space-y-4 mb-8">
                {points.map((point, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                    className="flex items-start gap-3"
                  >
                    <div className={`mt-1 w-1.5 h-1.5 rounded-full ${colorClasses[color].bg} ${colorClasses[color].border}`} />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
              
              <Button variant={colorClasses[color].button as any} size="lg">
                {cta.text}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Main component
export function ExpertiseSection() {
  const services = [
    {
      title: "Learning Machines",
      subtitle: "Advanced Training",
      description: "Our proprietary Learning Machines combine cutting-edge AI with realistic environments to create adaptive cybersecurity training platforms that evolve with each user's skill level.",
      points: [
        "AI-powered difficulty scaling based on user performance",
        "Real-world scenarios modeled after actual security incidents",
        "Comprehensive feedback and learning path recommendations",
        "Customizable training modules for organization-specific needs"
      ],
      icon: <Brain className="h-6 w-6 text-primary" />,
      threeD: <CubeIcon color="primary" />,
      color: "primary" as const,
      reverse: false,
      cta: { text: "Explore Training Platforms", link: "/training" }
    },
    {
      title: "Penetration Testing",
      subtitle: "Security Assessment",
      description: "Our comprehensive penetration testing services identify vulnerabilities before attackers do, using industry-leading methodologies and tools to provide actionable remediation strategies.",
      points: [
        "Manual and automated testing by certified security experts",
        "Detailed vulnerability reports with severity rankings",
        "Actionable remediation steps with implementation guidance",
        "Continuous monitoring and periodic reassessment options"
      ],
      icon: <Terminal className="h-6 w-6 text-secondary" />,
      threeD: <SphereIcon color="secondary" />,
      color: "secondary" as const,
      reverse: true,
      cta: { text: "Request Security Assessment", link: "/pentest" }
    },
    {
      title: "CTF Challenges",
      subtitle: "Competitive Learning",
      description: "Our Capture The Flag challenges provide engaging, competitive learning experiences designed to sharpen cybersecurity skills through gamified real-world hacking scenarios.",
      points: [
        "Jeopardy-style and attack-defense competition formats",
        "Categories covering web, crypto, forensics, and reverse engineering",
        "Individual skill-building and team collaboration exercises",
        "Custom corporate events focused on your technology stack"
      ],
      icon: <Trophy className="h-6 w-6 text-accent" />,
      threeD: <PyramidIcon color="accent" />,
      color: "accent" as const,
      reverse: false,
      cta: { text: "Join CTF Events", link: "/ctf" }
    },
    {
      title: "Security Compliance",
      subtitle: "Regulatory Navigation",
      description: "Our compliance expertise helps organizations navigate complex regulatory requirements while strengthening their overall security posture and meeting industry standards.",
      points: [
        "Gap analysis for GDPR, HIPAA, PCI DSS, and ISO 27001 frameworks",
        "Development of comprehensive security policies and procedures",
        "Implementation guidance for technical compliance controls",
        "Ongoing compliance monitoring and documentation support"
      ],
      icon: <Shield className="h-6 w-6 text-primary" />,
      threeD: <CubeIcon color="primary" />,
      color: "primary" as const,
      reverse: true,
      cta: { text: "Assess Compliance Needs", link: "/compliance" }
    },
    {
      title: "Secure Development",
      subtitle: "DevSecOps Integration",
      description: "We help organizations build security into their development lifecycle with secure coding practices and DevSecOps implementation to prevent vulnerabilities before they reach production.",
      points: [
        "Source code security reviews and vulnerability assessments",
        "Implementation of security testing in CI/CD pipelines",
        "Developer training for language-specific secure coding",
        "Custom security plugins for development environments"
      ],
      icon: <Code className="h-6 w-6 text-secondary" />,
      threeD: <SphereIcon color="secondary" />,
      color: "secondary" as const,
      reverse: false,
      cta: { text: "Secure Your SDLC", link: "/secure-dev" }
    },
    {
      title: "Incident Response",
      subtitle: "Rapid Recovery",
      description: "Our IR team provides immediate containment, thorough investigation, and effective remediation to minimize damage from security incidents and restore operations quickly.",
      points: [
        "24/7 emergency response with fast deployment capabilities",
        "Comprehensive digital forensics and evidence preservation",
        "Thorough incident analysis and attack vector identification",
        "Post-incident remediation planning and security hardening"
      ],
      icon: <CloudLightning className="h-6 w-6 text-accent" />,
      threeD: <PyramidIcon color="accent" />,
      color: "accent" as const,
      reverse: true,
      cta: { text: "Prepare IR Strategy", link: "/incident-response" }
    }
  ]
  
  return (
    <section className="relative overflow-hidden">
      <div className="py-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Our Areas of <span className="text-primary glow">Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            We provide cutting-edge solutions to protect your digital assets and
            train your security teams through immersive, hands-on experiences.
          </p>
        </motion.div>
      </div>
      
      {services.map((service, index) => (
        <ServiceSection 
          key={index}
          {...service}
          index={index}
        />
      ))}
    </section>
  )
}