
import Header from '@/components/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/footer';
import PhilosophySection from '@/components/sections/philosophy-section';
import FilmographySection from '@/components/sections/filmography-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zealet Multimedia | Video Production, Design & Digital Marketing",
  description: "Zealet Multimedia is a creative agency specializing in video production, motion graphics, branding, and digital marketing. We bring your ideas to life.",
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <ServicesSection />
        <PortfolioSection />
        <FilmographySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
