
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Eye, Clapperboard, Video, Image as ImageIcon } from 'lucide-react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

type Project = {
  title: string;
  client: string;
  category: string;
  type: 'image' | 'video';
  description: string;
  role: string;
  story: string;
  media: { url: string, aiHint: string }[];
  btsMedia: { url: string, aiHint: string, type: 'image' | 'video' }[];
  youtubeUrl?: string;
};

const projects: Project[] = [
  {
    title: 'Showreel 2024',
    client: 'Personal',
    category: 'Showreel',
    type: 'video',
    description: 'A collection of my best work in film, design, and storytelling.',
    role: 'Director, Designer, Editor',
    story: 'This is a fast-paced look at some of my favorite projects, showcasing a range of skills from directing and cinematography to motion graphics and 3D design.',
    media: [
        { url: 'https://i.ytimg.com/vi/N8hRH3nGn1E/hqdefault.jpg', aiHint: 'showreel film' },
    ],
    youtubeUrl: 'https://www.youtube.com/embed/N8hRH3nGn1E?autoplay=1',
    btsMedia: [
      { url: 'https://picsum.photos/seed/bts1-1/600/400', aiHint: 'film set camera', type: 'image' },
      { url: 'https://picsum.photos/seed/bts1-2/600/400', aiHint: 'director chair', type: 'image' },
      { url: 'https://picsum.photos/seed/bts1-3/600/400', aiHint: 'lighting setup', type: 'image' },
    ],
  },
  {
    title: 'Trophy Extra Special Stout',
    client: 'Trophy Beer (Spec)',
    category: 'Commercial',
    type: 'video',
    description: 'A spec commercial for Trophy Extra Special Stout, capturing the spirit of celebration and camaraderie.',
    role: 'Director',
    story: 'This spec ad was created to capture the energetic and celebratory essence of Trophy Extra Special Stout. The goal was to create a visually dynamic piece that felt authentic to the brand\'s target audience, focusing on moments of connection and shared enjoyment.',
    media: [
        { url: 'https://i.ytimg.com/vi/j9VXRaAILR8/hqdefault.jpg', aiHint: 'beer commercial' },
    ],
    youtubeUrl: 'https://www.youtube.com/embed/j9VXRaAILR8?autoplay=1',
    btsMedia: [
      { url: 'https://picsum.photos/seed/bts2-1/600/400', aiHint: 'beer product shot', type: 'image' },
      { url: 'https://picsum.photos/seed/bts2-2/600/400', aiHint: 'behind the scenes commercial', type: 'image' },
    ],
  },
  {
    title: 'SAKOPE (COMPLETE DOSAGE)',
    client: 'Personal Project',
    category: 'Narrative Short Film',
    type: 'video',
    description: 'An illiterate girl hawking drugs as a professional nurse soon finds her customers falling apart.',
    role: 'Director, Producer, DOP',
    story: 'Malomo, an illiterate girl undergoing training at a local hospital as an auxiliary nurse, leaves because of high handedness, and starts hawking drugs, claiming to be a professional nurse until her customers start falling apart.',
    media: [
      { url: 'https://i.ytimg.com/vi/ralH8-n4QKk/hqdefault.jpg', aiHint: 'girl hawking drugs' },
    ],
    youtubeUrl: 'https://www.youtube.com/embed/ralH8-n4QKk?autoplay=1',
    btsMedia: [
      { url: 'https://picsum.photos/seed/bts3-1/600/400', aiHint: 'short film set', type: 'image' },
      { url: 'https://picsum.photos/seed/bts3-2/600/400', aiHint: 'actress portrait', type: 'image' },
      { url: 'https://picsum.photos/seed/bts3-3/600/400', aiHint: 'camera on tripod', type: 'image' },
    ],
  },
  {
    title: 'AKITI (MONKEY)',
    client: 'Personal Project',
    category: 'Narrative Short Film',
    type: 'video',
    description: 'Two delinquent teenagers skip school to watch fight scenes at an abandoned warehouse. They are forced to confront each other in a deadly match that they will forever regret.',
    role: 'Director, DOP',
    story: 'Two delinquent teenagers skip school to watch fight scenes at an abandoned warehouse. They are forced to confront each other in a deadly match that they will forever regret.',
    media: [
      { url: 'https://i.ytimg.com/vi/8D3iVPDmasI/hqdefault.jpg', aiHint: 'teenagers fighting' },
    ],
    youtubeUrl: 'https://www.youtube.com/embed/8D3iVPDmasI?autoplay=1',
    btsMedia: [
        { url: 'https://picsum.photos/seed/bts-akiti1/600/400', aiHint: 'warehouse location', type: 'image' },
        { url: 'https://picsum.photos/seed/bts-akiti2/600/400', aiHint: 'fight choreography', type: 'image' },
    ]
  },
  {
    title: 'BEFORE SEVEN',
    client: 'Personal Project',
    category: 'Narrative Short Film',
    type: 'video',
    description: 'A teenage girl made a mistake that made her family rejects her. She\'s racing against time before she makes a decision she would forever regret.',
    role: 'Director, DOP',
    story: 'A teenage girl made a mistake that made her family rejects her. She\'s racing against time before she makes a decision she would forever regret.',
    media: [
      { url: 'https://i.ytimg.com/vi/qnwRZOHADsw/hqdefault.jpg', aiHint: 'teenage girl emotional' },
    ],
    youtubeUrl: 'https://www.youtube.com/embed/qnwRZOHADsw?autoplay=1',
    btsMedia: [
        { url: 'https://picsum.photos/seed/bts-beforeseven1/600/400', aiHint: 'dramatic lighting setup', type: 'image' },
    ]
  },
  {
    title: 'CBN Revolution',
    client: 'Documentary',
    category: 'Documentary',
    type: 'video',
    description: 'A documentary about wheat production in Nigeria.',
    role: 'Director',
    story: 'This documentary explores the revolution of wheat production in Nigeria, highlighting the stories of the farmers and the impact on the national economy.',
    media: [
        { url: 'https://i.ytimg.com/vi/-2UfFpUNPnE/hqdefault.jpg', aiHint: 'wheat farm documentary' },
    ],
    youtubeUrl: 'https://www.youtube.com/embed/-2UfFpUNPnE?autoplay=1',
    btsMedia: [
        { url: 'https://picsum.photos/seed/bts-cbn1/600/400', aiHint: 'interview setup', type: 'image' },
        { url: 'https://picsum.photos/seed/bts-cbn2/600/400', aiHint: 'drone shot wheat field', type: 'image' },
    ]
  },
];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Works</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Here’s a glimpse of the stories I’ve told, the visuals I’ve crafted, and the experiences I’ve built. Each project is a reflection of my multidisciplinary approach to creativity.
          </p>
        </div>
        <Dialog>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden group bg-card flex flex-col">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={project.media[0].url}
                      alt={project.title}
                      width={600}
                      height={400}
                      data-ai-hint={project.media[0].aiHint}
                      className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-auto"
                    />
                     <div className="absolute top-3 right-3">
                      {project.type === 'video' ? <Video className="w-5 h-5 text-white" /> : <ImageIcon className="w-5 h-5 text-white" />}
                    </div>
                  </div>
                </CardContent>
                <div className="flex flex-col flex-grow p-6">
                    <div className="flex-grow">
                        <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-sm text-foreground/70 mt-1">{project.description}</p>
                    </div>
                    <CardFooter className="p-0 pt-4 mt-auto">
                        <DialogTrigger asChild>
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => setSelectedProject(project)}
                        >
                            <Eye className="mr-2 h-4 w-4" />
                            View Project
                        </Button>
                        </DialogTrigger>
                    </CardFooter>
                </div>
              </Card>
            ))}
          </div>

          {selectedProject && (
            <DialogContent className="w-screen h-screen max-w-full max-h-full p-0 flex flex-col">
                <div className="flex-grow grid md:grid-cols-3 overflow-y-auto">
                    <div className="md:col-span-2 bg-black flex items-center justify-center p-4">
                      {selectedProject.type === 'video' && selectedProject.youtubeUrl ? (
                        <div className="relative aspect-video w-full max-w-4xl mx-auto">
                           <iframe
                                src={selectedProject.youtubeUrl}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </div>
                      ) : (
                        <Carousel className="w-full max-w-4xl mx-auto">
                          <CarouselContent>
                            {selectedProject.media.map((media, index) => (
                              <CarouselItem key={index}>
                                  <div className="relative aspect-video">
                                    <Image
                                      src={media.url}
                                      alt={`${selectedProject.title} - Image ${index + 1}`}
                                      fill
                                      data-ai-hint={media.aiHint}
                                      className="object-contain"
                                    />
                                  </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          {selectedProject.media.length > 1 && (
                              <>
                                  <CarouselPrevious className="-left-12" />
                                  <CarouselNext className="-right-12" />
                              </>
                          )}
                        </Carousel>
                      )}
                    </div>
                    <div className="col-span-1 h-full p-8 md:p-12 space-y-8 overflow-y-auto border-l">
                        <DialogHeader>
                            <DialogTitle className="text-3xl md:text-4xl font-bold">{selectedProject.title}</DialogTitle>
                        </DialogHeader>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-sm">
                            <div>
                                <h4 className="font-semibold text-foreground/70 mb-1">Client</h4>
                                <p className="font-medium text-foreground">{selectedProject.client}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground/70 mb-1">Type</h4>
                                <p className="font-medium text-foreground">{selectedProject.category}</p>
                            </div>
                            <div className="col-span-2">
                                <h4 className="font-semibold text-foreground/70 mb-1">My Role</h4>
                                <p className="font-medium text-foreground">{selectedProject.role}</p>
                            </div>
                        </div>

                        <div className="prose prose-base dark:prose-invert">
                            <h4 className="font-semibold text-foreground mb-2">About The Project</h4>
                            <p className="text-foreground/80">{selectedProject.story}</p>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 p-8 md:p-12 border-t">
                     <h4 className="font-semibold text-foreground mb-4 text-xl">Behind The Scenes</h4>
                     <ScrollArea className="w-full whitespace-nowrap">
                        <div className="flex space-x-4 pb-4">
                          {selectedProject.btsMedia.map((media, index) => (
                            <figure key={index} className="shrink-0">
                              <div className="overflow-hidden rounded-md w-80 h-52 relative">
                                <Image
                                  src={media.url}
                                  alt={`Behind the scenes ${index + 1}`}
                                  data-ai-hint={media.aiHint}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </figure>
                          ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
