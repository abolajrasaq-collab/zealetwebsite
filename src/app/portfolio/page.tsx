'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { projects, Project } from '@/lib/portfolio-data';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Eye, Video, Image as ImageIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
      </main>
      <Footer />
    </div>
  );
}
