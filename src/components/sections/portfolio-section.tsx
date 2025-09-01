
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
  },
  {
    title: 'Naija Odyssey',
    client: 'WhatsApp',
    category: 'Commercial',
    type: 'video',
    description: 'A short film about NBA star Giannis Antetokounmpo reconciling his Nigerian roots.',
    role: 'Director',
    story: 'For this project with WhatsApp, I had the honor of directing "Naija Odyssey," a short film that tells the powerful story of Giannis Antetokounmpo. The film explores his journey of reconciliation with his Nigerian heritage, his family, and his identity. We aimed for a cinematic and deeply personal feel.',
    media: [
        { url: 'https://i.ytimg.com/vi/lc12-a6XmDA/hqdefault.jpg', aiHint: 'man thinking film' },
    ],
    youtubeUrl: 'https://www.youtube.com/embed/lc12-a6XmDA?autoplay=1',
  },
  {
    title: 'The Afrofuturist',
    client: 'Personal Project',
    category: 'Videography',
    type: 'video',
    description: 'A visual exploration of Afrofuturism through fashion, design, and narrative.',
    role: 'Director, Editor',
    story: 'This piece is a visual poem that explores the vibrant and imaginative world of Afrofuturism. I wanted to blend narrative, fashion, and abstract visuals to create a powerful statement about identity, technology, and the future. The project was a labor of love, combining my skills in direction, cinematography, and editing.',
    media: [
      { url: 'https://i.ytimg.com/vi/8D3iVPDmasI/hqdefault.jpg', aiHint: 'afrofuturism fashion' },
    ],
    youtubeUrl: 'https://www.youtube.com/embed/8D3iVPDmasI?autoplay=1',
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
        { url: 'https://picsum.photos/seed/p2-1/1280/720', aiHint: 'modern architecture night' },
        { url: 'https://picsum.photos/seed/p2-2/1280/720', aiHint: 'bus terminal night' },
    ],
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
        { url: 'https://picsum.photos/seed/p6-1/1280/720', aiHint: 'portrait black and white' },
        { url: 'https://picsum.photos/seed/p6-2/1280/720', aiHint: 'dramatic portrait' },
        { url: 'https://picsum.photos/seed/p6-3/1280/720', aiHint: 'elderly person portrait' },
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
            <DialogContent className="w-screen h-screen max-w-full max-h-full p-0">
                <div className="grid md:grid-cols-3 h-full">
                    <div className="md:col-span-2 bg-black flex items-center justify-center">
                      {selectedProject.type === 'video' && selectedProject.youtubeUrl ? (
                        <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden border">
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
                    <div className="col-span-1 h-full overflow-y-auto p-8 md:p-12 space-y-8">
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
                        
                        {selectedProject.youtubeUrl && (
                          <div className="pt-4">
                              <h4 className="font-semibold text-foreground mb-4">Watch Now</h4>
                              <div className="flex flex-col gap-3">
                                  {selectedProject.youtubeUrl && (
                                    <Button asChild size="lg" variant="outline">
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
