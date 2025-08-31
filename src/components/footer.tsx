import Link from 'next/link';
import { Camera, Instagram, Twitter, Linkedin } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/70">
        <div className="flex flex-col items-center gap-4">
           <Camera className="w-8 h-8 text-accent" />
           <p className="text-2xl font-semibold text-foreground">Abolaji's Portfolio</p>
           <p className="max-w-md">
            Capturing moments that tell a story.
           </p>
        </div>

        <nav className="my-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
        </nav>
        
        <div className="flex justify-center gap-6 mb-8">
            <a href="#" aria-label="Instagram" className="text-foreground/80 hover:text-accent transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-foreground/80 hover:text-accent transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-foreground/80 hover:text-accent transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
        </div>

        <p className="text-sm">
          &copy; {currentYear} Abolaji. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
