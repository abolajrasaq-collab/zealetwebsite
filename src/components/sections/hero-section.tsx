import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.imgur.com/orThoms.jpeg"
          alt="Filmmaker with a camera"
          data-ai-hint="filmmaker camera"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">ABOLAJI</h1>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="max-w-2xl text-lg md:text-xl text-foreground/80">
            Filmmaker, Photographer, and Visual Storyteller.
          </p>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#portfolio">View My Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
