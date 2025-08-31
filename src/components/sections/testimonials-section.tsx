import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jane D.',
    avatar: 'JD',
    image: 'https://i.imgur.com/i1wQZxv.jpg',
    aiHint: 'woman portrait',
    title: 'Incredible Vision',
    quote: "Abolaji's ability to capture the essence of our story on film was breathtaking. His direction and cinematography were top-notch. Highly recommended!",
    rating: 5,
  },
  {
    name: 'Mark T.',
    avatar: 'MT',
    image: 'https://i.imgur.com/p5A2S5v.jpg',
    aiHint: 'man portrait',
    title: 'A True Professional',
    quote: "Working with Abolaji was a seamless experience. His professionalism and creative input elevated our project beyond what we imagined. The final photos are stunning.",
    rating: 5,
  },
  {
    name: 'Innovate Co.',
    avatar: 'IC',
    image: 'https://i.imgur.com/XWa4B3z.jpg',
    aiHint: 'office team',
    title: 'Stunning Visuals',
    quote: "The commercial Abolaji produced for us was a game-changer. His visual storytelling captured our brand perfectly and has had a huge impact on our marketing.",
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
