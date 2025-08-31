import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/600/750"
              alt="Abolaji"
              data-ai-hint="writer portrait"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                My name is Abolaji, and I'm a storyteller who uses words to translate emotions and narratives into compelling tales. My journey into writing started not just as a hobby, but as an obsession with language, plot, and the stories hidden in plain sight.
              </p>
              <p>
                My philosophy is simple: every story should make you feel something. I strive to create narratives that are not only entertaining but also resonate on a deeper level, capturing the authentic essence of the human experience. Whether it's a short story, a novel, or a piece of copy, I bring a unique blend of technical skill and creative vision to the page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
