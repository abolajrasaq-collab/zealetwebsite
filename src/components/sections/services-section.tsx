import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Video, Brush, Cuboid, Camera, Code } from 'lucide-react';

const capabilities = [
  {
    icon: <Video className="w-10 h-10 text-accent" />,
    studio: 'Film Studio',
    title: 'Directing, Producing, DOP',
    description: 'From concept to final cut, I bring narratives to life with cinematic precision and a compelling vision.',
  },
  {
    icon: <Brush className="w-10 h-10 text-accent" />,
    studio: 'Design Studio',
    title: 'Motion, Graphics, UI/UX, Branding',
    description: 'Crafting visually stunning identities and experiences that resonate and engage audiences across all platforms.',
  },
  {
    icon: <Cuboid className="w-10 h-10 text-accent" />,
    studio: '3D & VFX Studio',
    title: '3D Design, Animation, World-Building',
    description: 'Building immersive digital worlds and seamless visual effects that push the boundaries of imagination.',
  },
  {
    icon: <Camera className="w-10 h-10 text-accent" />,
    studio: 'Photography Studio',
    title: 'Portraits, Lifestyle, Commercial',
    description: 'Capturing authentic moments and creating powerful images that tell a story and define a brand.',
  },
];

export default function ServicesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">The Creative Arsenal</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Presenting a multi-department studio in one body.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((service, index) => (
            <Card key={index} className="text-center flex flex-col items-center bg-background border-border hover:border-accent transition-all duration-300 transform hover:-translate-y-2 p-6">
              <CardHeader className="p-0 mb-4">
                {service.icon}
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center p-0">
                <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">{service.studio}</p>
                <CardTitle className="mb-2 text-xl font-semibold font-headline">{service.title}</CardTitle>
                <CardDescription className="text-foreground/70 font-serif">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
