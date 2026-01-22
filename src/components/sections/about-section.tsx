
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up">
            <Image
              src="https://imgur.com/MN2YopI.png"
              alt="Zealet Multimedia team collaborating"
              data-ai-hint="creative team collaboration"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              We Are Storytellers & Strategists
            </h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                Zealet Multimedia is where creativity meets strategy. We are a collective of filmmakers, designers, and digital experts dedicated to crafting unforgettable brand experiences. Our passion is turning bold ideas into powerful visual narratives that captivate audiences and drive results.
              </p>
              <p>
                Our approach is collaborative and results-oriented. We dive deep into your world to understand your goals, then bring our multidisciplinary expertise to the table. From cinematic brand films to dynamic digital campaigns, we create work that not only looks great but also achieves your objectives.
              </p>
              <p className="font-semibold text-foreground">
                We are your creative partners, invested in your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
