import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const projects = [
  {
    title: 'Urban Exploration',
    description: 'A series capturing the raw beauty of cityscapes.',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    aiHint: 'cityscape night'
  },
  {
    title: 'Ethereal Portraits',
    description: 'Exploring light and shadow in personal portraiture.',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    aiHint: 'portrait shadow'
  },
  {
    title: 'MKL Watches',
    description: 'Clean and elegant product photography.',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    aiHint: 'watch product'
  },
  {
    title: 'Wedding Bells',
    description: 'Capturing the magic of a once-in-a-lifetime day.',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    aiHint: 'wedding couple'
  },
  {
    title: 'Nature\'s Palette',
    description: 'A journey through vibrant and serene landscapes.',
    imageUrl: 'https://picsum.photos/600/400?random=5',
    aiHint: 'landscape mountain'
  },
  {
    title: 'Street Style',
    description: 'Candid moments and fashion on the streets.',
    imageUrl: 'https://picsum.photos/600/400?random=6',
    aiHint: 'street fashion'
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Portfolio</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A curated selection of my favorite projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group bg-card">
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
              <CardFooter className="flex-col items-start p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-foreground/70">{project.description}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
