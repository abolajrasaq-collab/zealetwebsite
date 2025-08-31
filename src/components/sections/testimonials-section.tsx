
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Jane D.',
    title: 'Film Director',
    quote: "Abolaji is a rare kind of creative—he sees the big picture while mastering the smallest details.",
    logo: '/images/testimonial-1.jpg',
    aiHint: 'woman portrait',
  },
  {
    name: 'Mark T.',
    title: 'Creative Director, Innovate Co.',
    quote: "Working with Abolaji was a seamless experience. His professionalism and creative input elevated our project beyond what we imagined. The final photos are stunning.",
    logo: '/images/testimonial-2.jpg',
    aiHint: 'man portrait',
  },
  {
    name: 'TechFront',
    title: 'Startup Client',
    quote: "The commercial Abolaji produced for us was a game-changer. His visual storytelling captured our brand perfectly and has had a huge impact on our marketing.",
    logo: '/images/testimonial-3.jpg',
    aiHint: 'office team',
  },
];

const clientLogos = [
    { name: 'Client 1', logo: '/images/logo-client-1.png', aiHint: 'minimalist logo' },
    { name: 'Client 2', logo: '/images/logo-client-2.png', aiHint: 'abstract logo' },
    { name: 'Client 3', logo: '/images/logo-client-3.png', aiHint: 'geometric logo' },
    { name: 'Client 4', logo: '/images/logo-client-4.png', aiHint: 'tech logo' },
    { name: 'Client 5', logo: '/images/logo-client-5.png', aiHint: 'creative logo' },
    { name: 'Client 6', logo: '/images/logo-client-6.png', aiHint: 'bold logo' },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What People Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            I've had the pleasure of working with amazing brands, studios, and individuals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border p-6 flex flex-col text-left">
               <CardContent className="p-0 flex-grow">
                <p className="text-foreground/80 text-lg">"{testimonial.quote}"</p>
              </CardContent>
              <div className="flex items-center mt-6">
                  <Avatar className="w-12 h-12 mr-4 border-2 border-accent">
                    <AvatarImage src={testimonial.logo} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.name.substring(0,2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-foreground/70">{testimonial.title}</p>
                  </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-20">
            <h3 className="text-center text-lg font-semibold text-foreground/80 mb-8">Trusted by Industry-Leading Brands & Visionary Partners</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                {clientLogos.map((client, index) => (
                     <Image
                        key={index}
                        src={client.logo}
                        alt={client.name}
                        width={120}
                        height={40}
                        data-ai-hint={client.aiHint}
                        className="object-contain"
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
