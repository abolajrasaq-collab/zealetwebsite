'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Eye } from 'lucide-react';

type Project = {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  aiHint: string;
};

const projects: Project[] = [
  {
    title: 'Urban Exploration',
    category: 'Cityscape',
    description: 'A series capturing the raw beauty of cityscapes.',
    longDescription: 'This project involved exploring the hidden alleys and towering skyscrapers of the city at night, capturing the vibrant energy and neon-lit beauty of the urban landscape. The goal was to find unique perspectives and showcase the city in a way that feels both grand and intimate.',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    aiHint: 'cityscape night'
  },
  {
    title: 'Ethereal Portraits',
    category: 'Portrait',
    description: 'Exploring light and shadow in personal portraiture.',
    longDescription: 'A collection of portraits that play with natural light and shadow to create an ethereal, dreamlike quality. Each photo aims to capture the subject\'s personality and mood in a soft, artistic manner, emphasizing emotion over context.',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    aiHint: 'portrait shadow'
  },
  {
    title: 'MKL Watches',
    category: 'Product',
    description: 'Clean and elegant product photography.',
    longDescription: 'A commercial shoot for MKL Watches, focusing on clean, elegant, and high-detail product photography. The challenge was to highlight the craftsmanship and luxury of the timepieces using precise lighting and minimalist compositions.',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    aiHint: 'watch product'
  },
  {
    title: 'Wedding Bells',
    category: 'Event',
    description: 'Capturing the magic of a once-in-a-lifetime day.',
    longDescription: 'Documenting the joy, tears, and candid moments of a beautiful wedding day. The approach was photojournalistic, aiming to tell the story of the day as it unfolded naturally, preserving authentic memories for the couple.',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    aiHint: 'wedding couple'
  },
  {
    title: 'Nature\'s Palette',
    category: 'Landscape',
    description: 'A journey through vibrant and serene landscapes.',
    longDescription: 'This series is a celebration of the natural world, from majestic mountain ranges to serene forest scenes. The focus was on capturing the vibrant colors and diverse textures of nature, showcasing its calming and awe-inspiring beauty.',
    imageUrl: 'https://picsum.photos/600/400?random=5',
    aiHint: 'landscape mountain'
  },
  {
    title: 'Street Style',
    category: 'Fashion',
    description: 'Candid moments and fashion on the streets.',
    longDescription: 'Capturing the unique and expressive world of street fashion. This project involved finding individuals with a distinct sense of style and documenting their look in the context of their urban environment, blending fashion with everyday life.',
    imageUrl: 'https://picsum.photos/600/400?random=6',
    aiHint: 'street fashion'
  },
  {
    title: 'Corporate Anthem',
    category: 'Videography',
    description: 'A short film for a major tech company\'s brand relaunch.',
    longDescription: 'This corporate video was created to inspire and energize the employees of a major tech company after a significant rebranding. The film combines cinematic shots of the new office space with employee interviews to create a powerful and uplifting narrative about the company\'s future.',
    imageUrl: 'https://picsum.photos/600/400?random=7',
    aiHint: 'cinematic film'
  },
  {
    title: 'The Unseen',
    category: 'Fine Art',
    description: 'Abstract photography that explores texture and form.',
    longDescription: 'A fine art series that challenges the viewer to see the world differently. By focusing on abstract details, textures, and forms found in everyday objects, this collection transforms the mundane into something extraordinary and thought-provoking.',
    imageUrl: 'https://picsum.photos/600/400?random=8',
    aiHint: 'abstract art'
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
            A curated selection of my favorite projects.
          </p>
        </div>
        <Dialog>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden group bg-card flex flex-col">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      data-ai-hint={project.aiHint}
                      className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-auto"
                    />
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
            <DialogContent className="sm:max-w-4xl">
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  <Badge variant="default" className="mt-2 mb-4 bg-accent text-accent-foreground">{selectedProject.category}</Badge>
                </DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                        src={selectedProject.imageUrl.replace('400', '800').replace('600','1200')}
                        alt={selectedProject.title}
                        width={1200}
                        height={800}
                        data-ai-hint={selectedProject.aiHint}
                        className="object-cover w-full h-auto"
                    />
                </div>
                <div className="prose prose-sm sm:prose-base dark:prose-invert">
                    <p className="text-lg text-foreground/80">{selectedProject.longDescription}</p>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
