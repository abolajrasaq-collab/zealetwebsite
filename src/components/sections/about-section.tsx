import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://i.imgur.com/tjyIr6J.jpg"
              alt="Abolaji Rasaq in action"
              data-ai-hint="filmmaker portrait action"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">
              I’m Not One Thing. I’m Many.
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 font-serif">
              <p>
                I’m a creative generalist. A polymath in motion.
                Some call me a filmmaker, others a designer, a DOP, a motion wizard, or a problem solver. Truth is—I’m all of it.
              </p>
              <p>
                For over a decade, I’ve been directing films, producing commercials, building brands, designing 3D worlds, and shaping digital experiences.
                Every frame, every pixel, every project—I fuse art, technology, and strategy into work that cuts through noise and demands attention.
              </p>
              <p className="text-foreground font-semibold">
                This isn’t just a career. It’s a calling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
