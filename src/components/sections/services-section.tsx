
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Clapperboard, Palette, ScreenShare, Megaphone } from 'lucide-react';

const videoServices = [
  { title: 'Corporate Videos' },
  { title: 'Commercials & Advertisements' },
  { title: 'Documentaries & Short Films' },
  { title: 'Event Coverage' },
  { title: 'Scriptwriting & Storyboarding' },
  { title: 'Post-Production & Editing' },
];

const designServices = [
    { title: 'Motion Graphics & 2D/3D Animation' },
    { title: 'Brand Identity & Logo Design' },
    { title: 'Graphic Design for Print & Web' },
    { title: 'UI/UX Design' },
];

const marketingServices = [
    { title: 'Social Media Video Campaigns' },
    { title: 'Content Strategy & Creation' },
    { title: 'Search Engine Optimization (SEO)' },
    { title: 'Pay-Per-Click (PPC) Advertising' },
];


export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Services</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <Clapperboard className="w-8 h-8 text-accent" />
                    <h3 className="text-2xl font-bold">Video Production</h3>
                </div>
                <ul className="space-y-2 text-foreground/80">
                    {videoServices.map(item => <li key={item.title}>- {item.title}</li>)}
                </ul>
            </div>
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <Palette className="w-8 h-8 text-accent" />
                    <h3 className="text-2xl font-bold">Design & Animation</h3>
                </div>
                <ul className="space-y-2 text-foreground/80">
                    {designServices.map(item => <li key={item.title}>- {item.title}</li>)}
                </ul>
            </div>
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <Megaphone className="w-8 h-8 text-accent" />
                    <h3 className="text-2xl font-bold">Digital Marketing</h3>
                </div>
                <ul className="space-y-2 text-foreground/80">
                    {marketingServices.map(item => <li key={item.title}>- {item.title}</li>)}
                </ul>
            </div>
        </div>
        <p className="text-center mt-16 text-xl font-semibold text-foreground/90">
          From concept to completion, we deliver creative solutions that drive results.
        </p>
      </div>
    </section>
  );
}
