import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';


export default function BlogSection() {
  return (
    <section id="journal" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">The Journal</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Bold takes on creativity, tech, African cinema, design, and storytelling.
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
                  <h3 className="text-xl font-semibold font-headline">{post.title}</h3>
                  <p className="text-sm text-foreground/70 mt-2 font-serif">{post.description}</p>
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
