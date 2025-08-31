"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Camera, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#blog', label: 'Blog Ideation' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Camera className="w-6 h-6 text-accent" />
            Abolaji's Lens
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
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
          
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[300px] bg-background p-0">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b border-border">
                    <Link href="/" className="flex items-center gap-2 text-lg font-bold" onClick={handleLinkClick}>
                      <Camera className="w-5 h-5 text-accent" />
                      Abolaji's Lens
                    </Link>
                    <SheetTrigger asChild>
                       <Button variant="ghost" size="icon">
                         <X className="h-6 w-6" />
                         <span className="sr-only">Close menu</span>
                       </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex flex-col gap-6 p-4 mt-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleLinkClick}
                        className="text-lg font-medium text-foreground/80 hover:text-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
