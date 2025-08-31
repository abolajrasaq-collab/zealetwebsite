import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah L.',
    avatar: 'SL',
    image: 'https://i.imgur.com/i1wQZxv.jpg',
    aiHint: 'woman portrait',
    title: 'Incredible Experience',
    quote: "Abolaji has an incredible eye for detail. The portrait session was so comfortable, and the final photos were beyond anything I could have imagined. Truly a master of his craft!",
    rating: 5,
  },
  {
    name: 'Michael B.',
    avatar: 'MB',
    image: 'https://i.imgur.com/p5A2S5v.jpg',
    aiHint: 'man portrait',
    title: 'Best Wedding Photographer',
    quote: "We hired Abolaji for our wedding, and it was the best decision we made. He captured every moment so beautifully and was an absolute professional. We'll cherish these photos forever.",
    rating: 5,
  },
  {
    name: 'TechCorp Inc.',
    avatar: 'TI',
    image: 'https://i.imgur.com/XWa4B3z.jpg',
    aiHint: 'office team',
    title: 'Professional & High-Quality',
    quote: "The commercial shots for our new product line were perfect. Abolaji understood our vision and delivered high-quality images on a tight deadline. We highly recommend his services.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Kind words from people I've had the pleasure to work with.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border p-6 flex flex-col items-center text-center">
              <Avatar className="w-20 h-20 mb-4 border-2 border-accent">
                <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                <AvatarFallback>{testimonial.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{testimonial.name}</h3>
              <p className="text-sm text-foreground/70 mb-4">{testimonial.title}</p>
              <CardContent className="p-0">
                <p className="text-foreground/80">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
