
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const heroImages = [
    {
        src: "https://i.imgur.com/inJJdq2.jpeg",
        alt: "Man filming with a camera",
        aiHint: "man filming"
    },
    {
        src: "https://i.imgur.com/rpBo4zK.jpeg",
        alt: "Man editing a video on a computer",
        aiHint: "man editing video"
    },
    {
        src: "https://i.imgur.com/SRo1NHb.jpeg",
        alt: "Woman taking a photo with a camera",
        aiHint: "woman taking photo"
    },
     {
        src: "https://i.imgur.com/E412ExU.jpeg",
        alt: "Close up of a camera lens",
        aiHint: "camera lens"
    },
    {
        src: "https://i.imgur.com/Gf2OFpS.jpeg",
        alt: "Film set with a director's chair",
        aiHint: "film set"
    }
];

export default function HeroSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
    );

  return (
    <section id="home" className="relative h-screen flex items-end justify-center text-center text-white pb-20 md:pb-32">
      <div className="absolute inset-0 z-0">
        <Carousel
            opts={{
                loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full h-full"
        >
            <CarouselContent>
                {heroImages.map((image, index) => (
                <CarouselItem key={index}>
                    <div className="w-full h-screen relative">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            data-ai-hint={image.aiHint}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Create. Captivate. Connect.
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
           Zealet Multimedia is a full-service creative agency specializing in video production, motion graphics, branding, and digital marketing. We bring your vision to life with stories that resonate and results that matter.
          </p>
        </div>
        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.6s' }}>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#portfolio">Our Work</Link>
          </Button>
           <Button asChild size="lg" variant="outline" className="bg-transparent hover:bg-accent hover:text-accent-foreground border-white text-white">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
