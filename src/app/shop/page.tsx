
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { products } from '@/lib/shop-data';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Shop | Abolaji Rasaq',
  description: 'A curated collection of goods for creatives, storytellers, and art lovers. Find prints, books, apparel, and more.',
};

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">The Shop</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              A curated collection of goods for creatives, storytellers, and art lovers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.slug} className="overflow-hidden group bg-card flex flex-col">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={800}
                      height={450}
                      data-ai-hint={product.aiHint}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </CardContent>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow space-y-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-lg font-semibold text-accent">${product.price.toFixed(2)}</p>
                  </div>
                  <div className="pt-6 mt-auto">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/shop/${product.slug}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
