
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import BlogIdeationSection from '@/components/sections/blog-ideation-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Journal | Abolaji Rasaq',
  description: 'A collection of thoughts, stories, and insights on creativity, design, filmmaking, and culture by Abolaji Rasaq.',
};

export default function BlogListPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">The Journal</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              A collection of thoughts, stories, and insights on creativity, design, and filmmaking.
            </p>
          </div>

          <BlogIdeationSection />

          <div className="mt-16 border-t border-border pt-16">
            <h2 className="text-3xl font-bold text-center mb-12">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="overflow-hidden group bg-card flex flex-col">
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
