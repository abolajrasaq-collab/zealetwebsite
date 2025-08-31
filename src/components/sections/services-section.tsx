import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Book, Edit3, Newspaper, Mic } from 'lucide-react';

const services = [
  {
    icon: <Book className="w-8 h-8 text-accent" />,
    title: 'Novel & Manuscript Writing',
    description: 'Bringing your long-form fiction and non-fiction ideas to life with professional ghostwriting.',
  },
  {
    icon: <Edit3 className="w-8 h-8 text-accent" />,
    title: 'Editing & Proofreading',
    description: 'Polishing your manuscript to perfection, focusing on clarity, flow, and grammatical accuracy.',
  },
  {
    icon: <Newspaper className="w-8 h-8 text-accent" />,
    title: 'Content & Copywriting',
    description: 'Engaging content for blogs, websites, and marketing materials that captures your brand\'s voice.',
  },
  {
    icon: <Mic className="w-8 h-8 text-accent" />,
    title: 'Speech & Script Writing',
    description: 'Crafting powerful speeches and scripts that resonate with your audience and deliver your message.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Offering a range of professional writing services tailored to your needs.
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
