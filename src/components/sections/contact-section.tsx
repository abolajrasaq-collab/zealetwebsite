
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Mail, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CircleCheck, AlertTriangle } from 'lucide-react';
import { sendMessage } from '@/app/actions';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export default function ContactSection() {
    const [state, formAction] = useActionState(sendMessage, {
        status: 'idle',
        message: '',
      });

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <form action={formAction} className="space-y-6">
            <Input type="text" name="name" placeholder="Your Name" required className="bg-card" />
            <Input type="email" name="email" placeholder="Your Email" required className="bg-card" />
            <Textarea name="message" placeholder="Your Message" rows={5} required className="bg-card" />
            <SubmitButton />
            {state.status === 'success' && (
              <Alert variant="default" className="bg-green-500/10 border-green-500/50 text-green-700 dark:text-green-400">
                <CircleCheck className="h-4 w-4" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>{state.message as string}</AlertDescription>
              </Alert>
            )}
            {state.status === 'error' && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>{state.message as string}</AlertDescription>
              </Alert>
            )}
          </form>
          <div className="flex flex-col justify-center items-center lg:items-start">
            <div className="space-y-6 text-lg">
              <a href="mailto:abolaji@example.com" className="flex items-center gap-4 group">
                <Mail className="w-6 h-6 text-accent" />
                <span className="group-hover:text-accent transition-colors">abolaji@example.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-4 group">
                <Phone className="w-6 h-6 text-accent" />
                <span className="group-hover:text-accent transition-colors">+1 (234) 567-890</span>
              </a>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4 text-center lg:text-left">Follow Me</h3>
              <div className="flex items-center gap-6">
                <a href="#" aria-label="Instagram" className="text-foreground/80 hover:text-accent transition-colors">
                  <Instagram className="w-7 h-7" />
                </a>
                <a href="#" aria-label="Twitter" className="text-foreground/80 hover:text-accent transition-colors">
                  <Twitter className="w-7 h-7" />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-foreground/80 hover:text-accent transition-colors">
                  <Linkedin className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
