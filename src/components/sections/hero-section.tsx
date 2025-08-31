
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const heroImages = [
    {
        src: "https://i.imgur.com/orThoms.jpeg",
        alt: "Filmmaker with a camera",
        aiHint: "filmmaker camera"
    },
    {
        src: "https://picsum.photos/1920/1080?random=10",
        alt: "Abstract design elements",
        aiHint: "abstract design"
    },
    {
        src: "https://picsum.photos/1920/1080?random=11",
        alt: "Futuristic 3D world",
        aiHint: "futuristic world"
    },
     {
        src: "https://picsum.photos/1920/1080?random=12",
        alt: "Person writing in a journal",
        aiHint: "storytelling journal"
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
