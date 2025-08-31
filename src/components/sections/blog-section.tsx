import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'The Art of World-Building',
    description: 'A deep dive into creating believable and immersive fictional worlds that readers will want to get lost in.',
    image: 'https://picsum.photos/800/600?random=1',
    aiHint: 'fantasy map',
    slug: 'the-art-of-world-building',
  },
  {
    title: 'Crafting Compelling Characters',
    description: 'Learn the secrets to developing characters that feel real, relatable, and unforgettable.',
    image: 'https://picsum.photos/800/600?random=2',
    aiHint: 'character sketches',
    slug: 'crafting-compelling-characters',
  },
  {
    title: 'Plotting Your Novel: A Beginner\'s Guide',
    description: 'From the initial idea to a full-fledged outline, here are the steps to plotting a successful novel.',
    image: 'https://picsum.photos/800/600?random=3',
    aiHint: 'storyboard corkboard',
    slug: 'plotting-your-novel',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">From My Desk</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Musings on the craft of writing, storytelling, and creative inspiration.
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
