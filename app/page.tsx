import { HeroSection } from '@/components/sections/hero-section'
import { TerminalSection } from '@/components/sections/terminal-section'
import { ServicesSection } from '@/components/sections/services-section'
import { TeamSection } from '@/components/sections/team-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { StatsSection } from '@/components/sections/stats-section'
import { BlogSection } from '@/components/sections/blog-section'
import { NewsletterSection } from '@/components/sections/newsletter-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TerminalSection />
      <ServicesSection />
      <StatsSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <NewsletterSection />
    </>
  )
}