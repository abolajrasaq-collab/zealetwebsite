
'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { projects, Project } from '@/lib/portfolio-data';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Video, Image as ImageIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Head from 'next/head';
import Link from 'next/link';

const categories = ['All', 'Film', 'Commercial', 'Design', 'Drone', 'Photography'];

function generateSlug(title: string) {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="overflow-hidden group bg-card flex flex-col">
        <CardContent className="p-0">
        <div className="relative aspect-video">
            <Link href={`/portfolio/${generateSlug(project.title)}`}>
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
            </Link>
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
);

export default function PortfolioPage() {
    const [activeTab, setActiveTab] = useState('All');

    const filteredProjects = useMemo(() => {
        if (activeTab === 'All') return projects;
        return projects.filter(p => p.category === activeTab || (p.tags.includes(activeTab)));
    }, [activeTab]);

  return (
    <>
    <Head>
        <title>Portfolio | Abolaji Rasaq</title>
        <meta name="description" content="A collection of my work in film, commercial, design, drone videography, and photography. Explore my projects and creative endeavors." />
    </Head>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
}
