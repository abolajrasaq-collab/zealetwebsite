import { Feather } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/70">
        <div className="flex flex-col items-center gap-4">
           <Feather className="w-8 h-8 text-accent" />
           <p className="text-2xl font-semibold text-foreground">Abolaji's Quill</p>
           <p className="max-w-md">
            Weaving narratives that captivate and inspire.
           </p>
        </div>
        <p className="mt-8 text-sm">
          &copy; {currentYear} Abolaji's Quill. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
