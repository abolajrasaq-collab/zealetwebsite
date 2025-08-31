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
              My Manifesto
            </h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p className="font-serif italic text-xl text-foreground/90">
                “I don’t fit in a box. I design, direct, code, shoot, and build worlds. I’m a one-man creative studio powered by curiosity and storytelling. My canvas spans film sets, pixels, lenses, and 3D environments.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
