
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
  client: string;
  category: string;
  type: 'image' | 'video';
  description: string;
  role: string;
  story: string;
  media: { url: string, aiHint: string }[];
  vimeoUrl?: string;
  youtubeUrl?: string;
};

const projects: Project[] = [
  {
    title: 'The Crimson Cipher',
    client: 'Fictional Studio',
    category: 'Narrative Film',
    type: 'image',
    description: 'A thrilling mystery set in the heart of a futuristic city.',
    role: 'Director, DOP',
    story: 'For "The Crimson Cipher," my goal was to create a visually distinct cyberpunk world on a tight budget. I handled both the direction and cinematography, focusing on high-contrast lighting and a neon-noir aesthetic to build a tense, atmospheric mystery. The challenge was making our limited sets feel like a sprawling metropolis.',
    media: [
        { url: 'https://picsum.photos/1200/800?random=1', aiHint: 'cyberpunk city' },
        { url: 'https://picsum.photos/1200/800?random=9', aiHint: 'futuristic detective' },
    ],
  },
    {
    title: 'Oshodi Transport Interchange',
    client: 'Lagos State Government',
    category: 'Architecture Photography',
    type: 'image',
    description: 'Area photograph of Oshodi Transport Interchange shot at night.',
    role: 'Photographer',
    story: 'Commissioned by the Lagos State Government, this project aimed to capture the monumental scale and vibrant energy of the newly built Oshodi Transport Interchange. My focus was on night photography to highlight the architectural lighting and the constant flow of a city that never sleeps. The challenge was finding unique perspectives amidst the controlled chaos.',
    media: [
        { url: 'https://i.imgur.com/K732E2T.jpeg', aiHint: 'modern architecture night' },
        { url: 'https://i.imgur.com/cV06T4g.jpeg', aiHint: 'bus terminal night' },
    ],
  },
  {
    title: 'Innovate & Inspire',
    client: 'Global Tech Inc.',
    category: 'Commercial',
    type: 'image',
    description: 'Crafting compelling visuals for a leading tech brand.',
    role: 'Brand Strategist, Motion Graphics Designer',
    story: 'This campaign for a major tech brand required a complete visual overhaul for their new product launch. I developed the brand strategy and created a suite of motion graphics for the commercials, focusing on clean, inspiring visuals to make complex tech features feel accessible and exciting.',
    media: [
        { url: 'https://picsum.photos/1200/800?random=3', aiHint: 'tech product' },
    ],
  },
  {
    title: 'Echoes of Yesterday',
    client: 'Indie Artist',
    category: 'Music Video',
    type: 'video',
    description: 'A historical drama about love and loss during wartime.',
    role: 'Director, Editor',
    story: 'For this music video, the artist wanted a cinematic, narrative-driven experience. I directed the video, focusing on telling a poignant story of two lovers separated by war. As the editor, I cut the piece to synchronize emotionally with the music\'s rhythm and crescendo, weaving the past and present together.',
    media: [
        { url: 'https://i.imgur.com/9g3C8Y1.jpeg', aiHint: 'wartime letter' },
    ],
    vimeoUrl: 'https://vimeo.com/902839943',
  },
    {
    title: 'Urban Canvas',
    client: 'Arts Collective',
    category: 'Videography',
    type: 'video',
    description: 'A dynamic look at street art and the artists behind it.',
    role: 'Director, Camera Operator',
    story: 'This short documentary was about capturing the kinetic energy of street art. I acted as a one-man-band, directing and operating the camera to get up close with the artists. The style is raw and energetic, using time-lapses and handheld shots to reflect the creativity happening on the city walls.',
    media: [
        { url: 'https://i.imgur.com/cV06T4g.jpeg', aiHint: 'street art graffiti' },
    ],
    vimeoUrl: 'https://vimeo.com/902839943',
  },
  {
    title: 'Portraits of Resilience',
    client: 'Personal Project',
    category: 'Fine Art',
    type: 'image',
    description: 'A black and white photography series on the human spirit.',
    role: 'Photographer',
    story: '"Portraits of Resilience" is a personal series. I wanted to capture the quiet dignity and strength of the human spirit through stark, intimate black and white portraits. Each photo session was a deep conversation, allowing me to capture an authentic and vulnerable moment with each subject.',
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
            <DialogContent className="sm:max-w-4xl lg:max-w-6xl">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                     <div className="col-span-full">
                        <DialogHeader>
                            <DialogTitle className="text-3xl">{selectedProject.title}</DialogTitle>
                        </DialogHeader>
                     </div>

                    <div className="flex flex-col gap-4">
                      {selectedProject.type === 'video' && (selectedProject.vimeoUrl || selectedProject.youtubeUrl) ? (
                        <div className="relative aspect-video rounded-lg overflow-hidden border">
                           <iframe
                                src={`https://player.vimeo.com/video/${selectedProject.vimeoUrl?.split('/').pop()}`}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </div>
                      ) : (
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
                      )}
                    </div>
                    <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
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

                        <div className="prose prose-sm sm:prose-base dark:prose-invert">
                            <h4 className="font-semibold text-foreground mb-2">About The Project</h4>
                            <p className="text-foreground/80">{selectedProject.story}</p>
                        </div>
                        
                        {(selectedProject.vimeoUrl || selectedProject.youtubeUrl) && (
                          <div className="pt-4">
                              <h4 className="font-semibold text-foreground mb-2">Watch Now</h4>
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
