
import Header from '@/components/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import BlogSection from '@/components/sections/blog-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/footer';
import PhilosophySection from '@/components/sections/philosophy-section';
import FilmographySection from '@/components/sections/filmography-section';
import ShutterstockCta from '@/components/sections/shutterstock-cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Abolaji Rasaq | Creative Generalist, Director, Designer",
  description: "The portfolio of Abolaji Rasaq, a Creative Generalist: Storyteller, Designer, Director, and Dream Builder. Explore my work in film, design, and digital experiences.",
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <FilmographySection />
        <PhilosophySection />
        <TestimonialsSection />
        <ShutterstockCta />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
