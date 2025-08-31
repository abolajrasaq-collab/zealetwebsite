'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Eye, Clapperboard, Video, Image as ImageIcon } from 'lucide-react';

type Project = {
  title: string;
  category: string;
  type: 'image' | 'video';
  description: string;
  longDescription: string;
  media: { url: string, aiHint: string }[];
  vimeoUrl?: string;
  youtubeUrl?: string;
};

const projects: Project[] = [
  {
    title: 'The Crimson Cipher',
    category: 'Narrative Film',
    type: 'image',
    description: 'A thrilling mystery set in the heart of a futuristic city.',
    longDescription: 'In a rain-slicked metropolis of the future, a jaded detective must unravel a conspiracy that threatens to tear the city apart. "The Crimson Cipher" is a fast-paced cyberpunk thriller that explores themes of identity, memory, and what it means to be human in a world augmented by technology.',
    media: [
        { url: 'https://picsum.photos/1200/800?random=1', aiHint: 'cyberpunk city' },
        { url: 'https://picsum.photos/1200/800?random=9', aiHint: 'futuristic detective' },
    ],
  },
  {
    title: 'Whispers of the Wild',
    category: 'Documentary',
     type: 'image',
    description: 'A collection of fantasy tales about nature and magic.',
    longDescription: 'This anthology brings together a series of enchanting short stories, each exploring the mystical connection between humanity and the natural world. From haunted forests to sentient rivers, these tales are a tribute to the magic that lies just beyond the veil of our perception.',
    media: [
        { url: 'https://picsum.photos/1200/800?random=2', aiHint: 'enchanted forest' },
        { url: 'https://picsum.photos/1200/800?random=11', aiHint: 'magical creature' },
    ],
  },
  {
    title: 'Innovate & Inspire',
    category: 'Commercial',
    type: 'image',
    description: 'Crafting compelling copy for a leading tech brand.',
    longDescription: 'A campaign for a major tech brand, focusing on clear, concise, and inspiring copy to launch their new line of products. The challenge was to communicate complex technical features in a way that was accessible and exciting for a broad audience.',
    media: [
        { url: 'https://picsum.photos/1200/800?random=3', aiHint: 'tech product' },
    ],
  },
  {
    title: 'Echoes of Yesterday',
    category: 'Music Video',
    type: 'video',
    description: 'A historical drama about love and loss during wartime.',
    longDescription: 'This screenplay tells the poignant story of two star-crossed lovers separated by war. It\'s a tale of resilience, hope, and the enduring power of memory against the backdrop of historical turmoil.',
    media: [
        { url: 'https://picsum.photos/1200/800?random=4', aiHint: 'wartime letter' },
    ],
    vimeoUrl: 'https://vimeo.com/902839943',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
    {
    title: 'Urban Canvas',
    category: 'Videography',
    type: 'video',
    description: 'A dynamic look at street art and the artists behind it.',
    longDescription: 'This short documentary captures the vibrant and ephemeral world of street art. Through interviews with artists and time-lapse footage of their work, "Urban Canvas" explores the creative pulse of the city and the artists who bring its walls to life.',
    media: [
        { url: 'https://picsum.photos/1200/800?random=5', aiHint: 'street art graffiti' },
    ],
    vimeoUrl: 'https://vimeo.com/902839943',
  },
  {
    title: 'Portraits of Resilience',
    category: 'Fine Art',
    type: 'image',
    description: 'A black and white photography series on the human spirit.',
    longDescription: 'A powerful and intimate series of black and white portraits, "Portraits of Resilience" captures the strength, vulnerability, and quiet dignity of its subjects. Each photograph tells a story, inviting the viewer to connect with the shared human experience.',
    media: [
        { url: 'https://picsum.photos/1200/800?random=6', aiHint: 'portrait black and white' },
        { url: 'https://picsum.photos/1200/800?random=7', aiHint: 'dramatic portrait' },
        { url: 'https://picsum.photos/1200/800?random=8', aiHint: 'elderly person portrait' },
    ],
  },
];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Portfolio</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A selection of my film and photography work.
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
            <DialogContent className="sm:max-w-4xl lg:max-w-6xl">
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedProject.title}</DialogTitle>
                <div className="mt-2 mb-4">
                  <Badge variant="default" className="bg-accent text-accent-foreground">{selectedProject.category}</Badge>
                </div>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedProject.media.map((media, index) => (
                        <CarouselItem key={index}>
                            <div className="relative aspect-video rounded-lg overflow-hidden">
                              <Image
                                src={media.url}
                                alt={`${selectedProject.title} - Image ${index + 1}`}
                                width={1200}
                                height={800}
                                data-ai-hint={media.aiHint}
                                className="object-cover w-full h-auto"
                              />
                            </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {selectedProject.media.length > 1 && (
                        <>
                            <CarouselPrevious className="left-2" />
                            <CarouselNext className="right-2" />
                        </>
                    )}
                  </Carousel>
                </div>
                <div className="prose prose-sm sm:prose-base dark:prose-invert max-h-[60vh] overflow-y-auto">
                    <p className="text-lg text-foreground/80">{selectedProject.longDescription}</p>
                    {(selectedProject.vimeoUrl || selectedProject.youtubeUrl) && (
                      <div className="mt-6">
                          <h4 className="font-semibold text-foreground mb-2">Watch Now:</h4>
                          <div className="flex flex-col gap-2">
                              {selectedProject.vimeoUrl && (
                                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                                    <a href={selectedProject.vimeoUrl} target="_blank" rel="noopener noreferrer">
                                        <Clapperboard className="mr-2 h-4 w-4" />
                                        Watch on Vimeo
                                    </a>
                                </Button>
                              )}
                              {selectedProject.youtubeUrl && (
                                <Button asChild variant="outline">
                                  <a href={selectedProject.youtubeUrl} target="_blank" rel="noopener noreferrer">
                                      <Clapperboard className="mr-2 h-4 w-4" />
                                      Watch on YouTube
                                  </a>
                                </Button>
                              )}
                          </div>
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
