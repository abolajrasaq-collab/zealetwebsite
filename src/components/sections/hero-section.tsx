import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Photographer's lens"
          data-ai-hint="camera lens"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">Abolaji's Lens</h1>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="max-w-2xl text-lg md:text-xl text-foreground/80">
            Capturing life's fleeting moments with passion and precision.
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
