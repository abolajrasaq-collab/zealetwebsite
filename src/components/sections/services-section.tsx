import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Camera, Clapperboard, Briefcase, Star } from 'lucide-react';

const services = [
  {
    icon: <Camera className="w-8 h-8 text-accent" />,
    title: 'Portrait Photography',
    description: 'Creating stunning portraits that capture your unique personality and style.',
  },
  {
    icon: <Clapperboard className="w-8 h-8 text-accent" />,
    title: 'Event Coverage',
    description: 'Documenting your special events with a keen eye for detail and emotion.',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-accent" />,
    title: 'Commercial Projects',
    description: 'High-quality imagery for your brand, products, and marketing campaigns.',
  },
  {
    icon: <Star className="w-8 h-8 text-accent" />,
    title: 'Creative Shoots',
    description: 'Collaborating on unique and artistic projects to bring your vision to life.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Offering a range of professional photography services tailored to your needs.
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
