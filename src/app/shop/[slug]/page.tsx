
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/shop-data';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    };
  }

  return {
    title: `${product.name} | Shop`,
    description: product.description,
     openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 450,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}


export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="mb-8">
            <Button asChild variant="outline">
              <Link href="/shop" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Shop
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={product.image}
                alt={product.name}
                data-ai-hint={product.aiHint}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
                <Badge variant="secondary" className="w-fit">{product.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{product.name}</h1>
                <p className="text-3xl font-bold text-accent">${product.price.toFixed(2)}</p>
                <p className="text-lg text-foreground/80">{product.description}</p>
                
                <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-semibold mb-4">Details</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        {product.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>
                </div>

                <div className="pt-4">
                     <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Buy Now
                    </Button>
                    <p className="text-center text-xs text-foreground/60 mt-2">
                        Note: Checkout is not yet implemented.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
