import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// @ts-ignore
import Markdown from 'react-markdown';


export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-20">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button asChild variant="outline">
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{post.title}</h1>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden my-8 shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                data-ai-hint={post.aiHint}
                fill
                className="object-cover"
              />
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
                {/* @ts-ignore */}
               <Markdown>{post.content}</Markdown>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
