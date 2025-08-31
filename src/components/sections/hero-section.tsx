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
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-headline">
            Abolaji Rasaq — Creative Generalist.
            <br />
            Storyteller. Designer. Director. Dream Builder.
          </h1>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#portfolio">Explore My Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
