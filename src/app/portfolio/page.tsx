
'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { projects, Project, ProjectMedia } from '@/lib/portfolio-data';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Eye, Video, Image as ImageIcon, Clapperboard } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const categories = ['All', 'Film', 'Commercial', 'Design', 'Drone', 'Photography'];

const ProjectCard = ({ project, onProjectSelect }: { project: Project, onProjectSelect: (project: Project) => void }) => (
    <Card className="overflow-hidden group bg-card flex flex-col">
        <CardContent className="p-0">
        <div className="relative aspect-video">
            <Image
            src={project.thumbnail}
            alt={project.title}
            width={600}
            height={400}
            data-ai-hint={project.media[0].aiHint}
            className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-auto"
            />
            <div className="absolute top-3 right-3">
                {project.youtubeUrl || project.vimeoId ? <Video className="w-5 h-5 text-white" /> : <ImageIcon className="w-5 h-5 text-white" />}
            </div>
        </div>
        </CardContent>
        <div className="flex flex-col flex-grow p-6">
            <div className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.slice(0, 2).map(tag => (
                        <Badge variant="secondary" key={tag}>{tag}</Badge>
                    ))}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-foreground/70 mt-1">{project.description}</p>
            </div>
            <CardFooter className="p-0 pt-4 mt-auto">
                <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => onProjectSelect(project)}
                >
                    <Eye className="mr-2 h-4 w-4" />
                    View Project
                </Button>
                </DialogTrigger>
            </CardFooter>
        </div>
    </Card>
);

const ProjectModalContent = ({ project }: { project: Project | null }) => {
    if (!project) return null;

    const renderMedia = (media: ProjectMedia, title: string, isBts = false) => {
        const isVideo = media.type === 'video' || (isBts && media.url.includes('vimeo'));
        if (isVideo) {
             return (
                <div className="relative aspect-video w-full">
                    <iframe
                        src={media.url} // Assuming BTS video URL is embeddable
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0"
                    ></iframe>
                </div>
            )
        }
        return (
            <div className={cn("relative", isBts ? "w-80 h-52" : "aspect-video")}>
                <Image
                    src={media.url}
                    alt={title}
                    fill
                    data-ai-hint={media.aiHint}
                    className="object-contain"
                />
            </div>
        );
    };

    return (
        <DialogContent className="w-screen h-screen max-w-full max-h-full p-0 flex flex-col">
            <div className="flex-grow grid md:grid-cols-3 overflow-y-auto">
                <div className="md:col-span-2 bg-black flex items-center justify-center p-4">
                    {project.youtubeUrl ? (
                        <div className="relative aspect-video w-full max-w-4xl mx-auto">
                            <iframe
                                src={project.youtubeUrl}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </div>
                    ) : project.vimeoId ? (
                         <div className="relative aspect-video w-full max-w-4xl mx-auto">
                            <iframe
                                src={`https://player.vimeo.com/video/${project.vimeoId}?autoplay=1`}
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
                            {project.media.map((media, index) => (
                                <CarouselItem key={index}>
                                    {renderMedia(media, `${project.title} - Image ${index + 1}`)}
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {project.media.length > 1 && (
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
                        <DialogTitle className="text-3xl md:text-4xl font-bold">{project.title}</DialogTitle>
                    </DialogHeader>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-sm">
                        {project.client && (
                            <div>
                                <h4 className="font-semibold text-foreground/70 mb-1">Client</h4>
                                <p className="font-medium text-foreground">{project.client}</p>
                            </div>
                        )}
                        <div>
                            <h4 className="font-semibold text-foreground/70 mb-1">Category</h4>
                            <p className="font-medium text-foreground">{project.category}</p>
                        </div>
                        {project.role && (
                            <div className="col-span-2">
                                <h4 className="font-semibold text-foreground/70 mb-1">My Role</h4>
                                <p className="font-medium text-foreground">{project.role}</p>
                            </div>
                        )}
                    </div>

                    {project.story && (
                        <div className="prose prose-base dark:prose-invert">
                            <h4 className="font-semibold text-foreground mb-2">About The Project</h4>
                            <p className="text-foreground/80">{project.story}</p>
                        </div>
                    )}

                    {project.filmUrl && (
                        <div className="pt-4">
                            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                                <a href={project.filmUrl} target="_blank" rel="noopener noreferrer">
                                    <Clapperboard className="mr-2 h-4 w-4" />
                                    Watch Now
                                </a>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            {project.btsMedia && project.btsMedia.length > 0 && (
                 <div className="flex-shrink-0 p-8 md:p-12 border-t">
                    <h4 className="font-semibold text-foreground mb-4 text-xl">Behind The Scenes</h4>
                    <ScrollArea className="w-full whitespace-nowrap">
                        <div className="flex space-x-4 pb-4">
                        {project.btsMedia.map((media, index) => (
                            <figure key={index} className="shrink-0">
                                <div className="overflow-hidden rounded-md w-80 h-52 relative bg-black/20">
                                    {renderMedia(media, `Behind the scenes ${index + 1}`, true)}
                                </div>
                            </figure>
                        ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            )}
        </DialogContent>
    );
};


export default function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeTab, setActiveTab] = useState('All');

    const filteredProjects = useMemo(() => {
        if (activeTab === 'All') return projects;
        return projects.filter(p => p.category === activeTab || (activeTab === 'Film' && (p.category === 'Showreel' || p.category === 'Commercial')));
    }, [activeTab]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Portfolio</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              A collection of my work in film, design, and storytelling.
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 mx-auto max-w-2xl">
                {categories.map(category => (
                    <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                ))}
            </TabsList>
          </Tabs>

          <Dialog>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} onProjectSelect={setSelectedProject} />
                ))}
            </div>
            <ProjectModalContent project={selectedProject} />
          </Dialog>
        </div>
      </main>
      <Footer />
    </div>
  );
}
