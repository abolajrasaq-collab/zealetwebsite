import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Video, Brush, Cuboid, Camera, Code, Monitor, Film } from 'lucide-react';

const capabilities = [
  {
    icon: <Film className="w-10 h-10 text-accent" />,
    title: 'Film & Directing',
    description: 'Feature films, documentaries, commercials.',
  },
  {
    icon: <Camera className="w-10 h-10 text-accent" />,
    title: 'Cinematography / DOP',
    description: 'Crafting cinematic shots with purpose.',
  },
  {
    icon: <Brush className="w-10 h-10 text-accent" />,
    title: 'Design & Branding',
    description: 'Identity, strategy, and visuals that stick.',
  },
  {
    icon: <Monitor className="w-10 h-10 text-accent" />,
    title: 'UI/UX & Web',
    description: 'Digital products that look good and work flawlessly.',
  },
  {
    icon: <Cuboid className="w-10 h-10 text-accent" />,
    title: '3D & Motion Graphics',
    description: 'From abstract to hyperreal, I make ideas move.',
  },
  {
    icon: <Video className="w-10 h-10 text-accent" />, // Placeholder, maybe use a better icon
    title: 'Photography',
    description: 'Stories told through still frames.',
  },
];

export default function ServicesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">Creative Firepower, All in One Place.</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80 font-serif">
            I run a personal creative studio where boundaries blur and disciplines collide. Here’s what I bring to the table:
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((service, index) => (
            <Card key={index} className="text-center flex flex-col items-center bg-background border-border hover:border-accent transition-all duration-300 transform hover:-translate-y-2 p-6">
              <CardHeader className="p-0 mb-4">
                {service.icon}
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center p-0">
                <CardTitle className="mb-2 text-xl font-semibold font-headline">{service.title}</CardTitle>
                <CardDescription className="text-foreground/70 font-serif">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center mt-16 text-xl font-semibold text-foreground/90 font-headline">
          One mind. Many crafts. All focused on creating impact.
        </p>
      </div>
    </section>
  );
}
