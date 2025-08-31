import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'The Art of Cinematic Lighting',
    description: 'A deep dive into creating mood and atmosphere with light in your films.',
    image: 'https://picsum.photos/800/600?random=1',
    aiHint: 'film set lighting',
    slug: 'the-art-of-cinematic-lighting',
  },
  {
    title: 'Storytelling Through Composition',
    description: 'Learn how to frame your shots to guide the audience\'s eye and enhance your narrative.',
    image: 'https://picsum.photos/800/600?random=2',
    aiHint: 'camera viewfinder',
    slug: 'storytelling-through-composition',
  },
  {
    title: 'Location Scouting for Indie Films',
    description: 'Tips and tricks for finding the perfect locations that won\'t break your budget.',
    image: 'https://picsum.photos/800/600?random=3',
    aiHint: 'dramatic landscape',
    slug: 'location-scouting-for-indie-films',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">From The Field</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Insights on filmmaking, photography, and the creative process.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden group bg-background flex flex-col">
              <CardHeader className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={600}
                    data-ai-hint={post.aiHint}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-sm text-foreground/70 mt-2">{post.description}</p>
                </div>
                <CardFooter className="p-0 pt-6 mt-auto">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
