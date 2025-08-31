import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Video, Camera, Edit, Clapperboard } from 'lucide-react';

const services = [
  {
    icon: <Video className="w-8 h-8 text-accent" />,
    title: 'Filmmaking',
    description: 'Full-service video production, from concept to final cut. Specializing in narrative, documentary, and commercial films.',
  },
  {
    icon: <Camera className="w-8 h-8 text-accent" />,
    title: 'Photography',
    description: 'Professional photography services including portraits, events, and fine art. Capturing your vision with a creative eye.',
  },
  {
    icon: <Edit className="w-8 h-8 text-accent" />,
    title: 'Post-Production',
    description: 'Expert editing, color grading, and sound design to bring your footage to life and tell a compelling story.',
  },
  {
    icon: <Clapperboard className="w-8 h-8 text-accent" />,
    title: 'Directing',
    description: 'Creative direction and leadership to guide your project from script to screen, ensuring a cohesive and powerful final product.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Offering a range of professional film and photography services.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center flex flex-col items-center bg-background border-border hover:border-accent transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                {service.icon}
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center p-6 pt-0">
                <CardTitle className="mb-2 text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-foreground/70">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
