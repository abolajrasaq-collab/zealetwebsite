
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects, ProjectMedia } from '@/lib/portfolio-data';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clapperboard } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Markdown from 'react-markdown';
import type { Metadata } from 'next';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

type Props = {
  params: { slug: string }
};

function generateSlug(title: string) {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => generateSlug(p.title) === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The project you are looking for does not exist.',
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      url: `/portfolio/${params.slug}`,
      images: [
        {
          url: project.thumbnail,
          width: 800,
          height: 600,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: generateSlug(project.title),
  }));
}

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


export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => generateSlug(p.title) === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-20">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="max-w-6xl mx-auto">
                 <div className="mb-8">
                  <Button asChild variant="outline">
                    <Link href="/portfolio" className="flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Back to Portfolio
                    </Link>
                  </Button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
                <div className="md:col-span-2">
                    {project.youtubeUrl ? (
                        <div className="relative aspect-video w-full">
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
                         <div className="relative aspect-video w-full">
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
                        <Carousel className="w-full">
                        <CarouselContent>
                            {project.media.map((media, index) => (
                                <CarouselItem key={index}>
                                    {renderMedia(media, `${project.title} - Image ${index + 1}`)}
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {project.media.length > 1 && (
                            <>
                                <CarouselPrevious className="-left-4" />
                                <CarouselNext className="-right-4" />
                            </>
                        )}
                        </Carousel>
                    )}
                </div>

                <div className="col-span-1 flex flex-col gap-8">
                     <div>
                        <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.tags.map(tag => (
                                <Badge variant="secondary" key={tag}>{tag}</Badge>
                            ))}
                        </div>
                    </div>

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
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-12 md:mt-20 space-y-12">
                {project.story && (
                    <div className="prose prose-base dark:prose-invert max-w-4xl">
                        <h2 className="font-bold text-2xl text-foreground mb-2">About The Project</h2>
                        <p className="text-foreground/80">{project.story}</p>
                    </div>
                )}
                
                {project.process && (
                    <div className="prose prose-base dark:prose-invert max-w-4xl">
                        <h2 className="font-bold text-2xl text-foreground mb-2">Process & Progress</h2>
                         <Markdown className="text-foreground/80">{project.process}</Markdown>
                    </div>
                )}

                {project.filmUrl && (
                    <div className="pt-4">
                        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                            <a href={project.filmUrl} target="_blank" rel="noopener noreferrer">
                                <Clapperboard className="mr-2 h-4 w-4" />
                                Watch Now
                            </a>
                        </Button>
                    </div>
                )}

                {project.btsMedia && project.btsMedia.length > 0 && (
                    <div className="pt-4">
                        <h2 className="font-bold text-2xl text-foreground mb-4">Behind The Scenes</h2>
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
            </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
