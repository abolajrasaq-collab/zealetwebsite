
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ShutterstockCta() {
  return (
    <section id="shutterstock-cta" className="relative py-20 md:py-32 bg-card text-foreground">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.imgur.com/rtuZRaS.jpeg"
          alt="Lagos, Nigeria cityscape"
          data-ai-hint="cityscape lagos"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Explore My Photography
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Looking for high-quality, authentic images? Browse my collection of photography available for license on Shutterstock. Perfect for your creative and commercial projects.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="https://www.shutterstock.com/g/abolajirasaq" target="_blank" rel="noopener noreferrer">
                Visit My Shutterstock Portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
