
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Clapperboard, PlayCircle } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';
import type { Project as FilmProject } from '@/lib/portfolio-data';

const filmProjects = projects.filter(p => p.category === 'Film' || p.category === 'Commercial' || p.category === 'Showreel');

export default function FilmographySection() {
  const [selectedFilm, setSelectedFilm] = useState<FilmProject | null>(null);

  return (
    <section id="filmography" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Filmography</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A selection of my narrative films, commercials, and music videos.
          </p>
        </div>
        <Dialog>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filmProjects.map((project) => (
              <DialogTrigger asChild key={project.title} onClick={() => setSelectedFilm(project)}>
                <div className="group relative aspect-[2/3] overflow-hidden rounded-lg cursor-pointer shadow-lg transition-transform hover:scale-105">
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
              </DialogTrigger>
            ))}
          </div>

          {selectedFilm && (
            <DialogContent className="w-screen h-screen max-w-full max-h-full p-0">
                <div className="grid md:grid-cols-3 h-full">
                    <div className="md:col-span-2 bg-black flex items-center justify-center">
                      <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden border">
                          <iframe
                              src={selectedFilm.youtubeUrl || `https://player.vimeo.com/video/${selectedFilm.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                              width="100%"
                              height="100%"
                              frameBorder="0"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowFullScreen
                              className="absolute top-0 left-0 w-full h-full"
                          ></iframe>
                      </div>
                    </div>
                    <div className="col-span-1 h-full overflow-y-auto p-8 md:p-12 space-y-8">
                        <DialogHeader>
                            <DialogTitle className="text-3xl md:text-4xl font-bold">{selectedFilm.title}</DialogTitle>
                        </DialogHeader>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-sm">
                            {selectedFilm.year && (
                                <div>
                                    <h4 className="font-semibold text-foreground/70 mb-1">Year</h4>
                                    <p className="font-medium text-foreground">{selectedFilm.year}</p>
                                </div>
                            )}
                            <div>
                                <h4 className="font-semibold text-foreground/70 mb-1">Type</h4>
                                <p className="font-medium text-foreground">{selectedFilm.category}</p>
                            </div>
                            {selectedFilm.role && (
                                <div className="col-span-2">
                                    <h4 className="font-semibold text-foreground/70 mb-1">My Role</h4>
                                    <p className="font-medium text-foreground">{selectedFilm.role}</p>
                                </div>
                            )}
                        </div>

                         {selectedFilm.story && (
                            <div className="prose prose-base dark:prose-invert">
                                <h4 className="font-semibold text-foreground mb-2">Synopsis</h4>
                                <p className="text-foreground/80">{selectedFilm.story}</p>
                            </div>
                        )}
                        
                        {selectedFilm.filmUrl && (
                          <div className="pt-4">
                               <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                                  <a href={selectedFilm.filmUrl} target="_blank" rel="noopener noreferrer">
                                      <Clapperboard className="mr-2 h-4 w-4" />
                                      Watch Now
                                  </a>
                              </Button>
                          </div>
                        )}
                    </div>
                </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
