'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';

const filmProjects = projects.filter(p => p.category === 'Video Production');

function generateSlug(title: string) {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export default function FilmographySection() {
  return (
    <section id="filmography" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Videos</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A selection of our narrative films, commercials, and music videos.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {filmProjects.map((project) => (
            <Link href={`/portfolio/${generateSlug(project.title)}`} key={project.title} className="group">
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg cursor-pointer shadow-lg transition-transform hover:scale-105">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} Poster`}
                  fill
                  data-ai-hint={project.media[0].aiHint}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
