
'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Video, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';
import Link from 'next/link';

const recentProjects = projects.slice(0, 6);

function generateSlug(title: string) {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Works</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Here’s a glimpse of the stories I’ve told, the visuals I’ve crafted, and the experiences I’ve built. Each project is a reflection of my multidisciplinary approach to creativity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <Card key={project.title} className="overflow-hidden group bg-card flex flex-col">
              <CardContent className="p-0">
                <Link href={`/portfolio/${generateSlug(project.title)}`}>
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
                </Link>
              </CardContent>
              <div className="flex flex-col flex-grow p-6">
                  <div className="flex-grow">
                      <div className="flex flex-wrap gap-2 mb-2">
                         {project.tags.slice(0,2).map(tag => (
                           <Badge variant="secondary" key={tag}>{tag}</Badge>
                         ))}
                      </div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-sm text-foreground/70 mt-1">{project.description}</p>
                  </div>
                  <CardFooter className="p-0 pt-4 mt-auto">
                      <Button
                          asChild
                          variant="outline"
                          className="w-full"
                      >
                          <Link href={`/portfolio/${generateSlug(project.title)}`}>
                              <Eye className="mr-2 h-4 w-4" />
                              View Project
                          </Link>
                      </Button>
                  </CardFooter>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">
                    View All Works
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
