
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Video, Brush, Cuboid, Camera, Code, Monitor, Film, Clapperboard, Palette, ScreenShare } from 'lucide-react';

const filmCapabilities = [
  { title: 'Film Direction' },
  { title: 'Director of Photography (DOP)' },
  { title: 'Cinematic Drone Pilot' },
  { title: 'Producing & Script Development' },
  { title: 'Documentary & Commercial Films' },
];

const designCapabilities = [
    { title: '3D Design & Animation' },
    { title: 'Motion Graphics' },
    { title: 'Brand Identity & Graphic Design' },
    { title: 'Photography' },
];

const digitalCapabilities = [
    { title: 'UI/UX Design' },
    { title: 'Web Development' },
    { title: 'Creative Technology' },
];


export default function ServicesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Studio in One</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <Clapperboard className="w-8 h-8 text-accent" />
                    <h3 className="text-2xl font-bold">Film & Visual Storytelling</h3>
                </div>
                <ul className="space-y-2 text-foreground/80">
                    {filmCapabilities.map(item => <li key={item.title}>- {item.title}</li>)}
                </ul>
            </div>
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <Palette className="w-8 h-8 text-accent" />
                    <h3 className="text-2xl font-bold">Design & Motion</h3>
                </div>
                <ul className="space-y-2 text-foreground/80">
                    {designCapabilities.map(item => <li key={item.title}>- {item.title}</li>)}
                </ul>
            </div>
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <ScreenShare className="w-8 h-8 text-accent" />
                    <h3 className="text-2xl font-bold">Digital & Interactive</h3>
                </div>
                <ul className="space-y-2 text-foreground/80">
                    {digitalCapabilities.map(item => <li key={item.title}>- {item.title}</li>)}
                </ul>
            </div>
        </div>
        <p className="text-center mt-16 text-xl font-semibold text-foreground/90">
          From concept to execution, I bring ideas to life across multiple mediums—seamlessly.
        </p>
      </div>
    </section>
  );
}
