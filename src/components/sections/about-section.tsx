
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/about-portrait.jpg"
              alt="Abolaji Rasaq in action"
              data-ai-hint="filmmaker portrait action"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Who I Am
            </h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                I’m a creative generalist—part filmmaker, part designer, part problem-solver. For over a decade, I’ve worked across film, motion design, 3D, photography, UI/UX, and web development.
              </p>
              <p>
                What ties it all together? <strong className="text-foreground">Storytelling.</strong> Whether I’m directing a film, designing a product, or building a brand, my goal is always the same—create experiences that move people.
              </p>
              <p className="font-semibold text-foreground">
                Think of me as your personal creative studio: one mind, many crafts, endless possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
