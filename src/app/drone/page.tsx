'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { droneWork, DroneWork } from '@/lib/drone-data';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { PlayCircle, Image as ImageIcon } from 'lucide-react';

export default function DronePage() {
  const [selectedMedia, setSelectedMedia] = useState<DroneWork | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Aerial Perspectives</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Capturing the world from a different point of view. A collection of my drone photography and videography.
            </p>
          </div>
          
          <Dialog>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {droneWork.map((item) => (
                <DialogTrigger key={item.title} asChild onClick={() => setSelectedMedia(item)}>
                  <Card className="overflow-hidden group bg-card flex flex-col cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative aspect-video">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          width={800}
                          height={600}
                          data-ai-hint={item.aiHint}
                          className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.type === 'video' ? (
                            <PlayCircle className="w-16 h-16 text-white" />
                          ) : (
                            <ImageIcon className="w-16 h-16 text-white" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-foreground/70">{item.location}</p>
                    </div>
                  </Card>
                </DialogTrigger>
              ))}
            </div>

            {selectedMedia && (
              <DialogContent className="w-screen h-screen max-w-full max-h-full p-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
                  {selectedMedia.type === 'video' ? (
                    <div className="relative aspect-video w-full h-full">
                       <iframe
                          src={selectedMedia.mediaUrl}
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          className="absolute top-0 left-0"
                        ></iframe>
                    </div>
                  ) : (
                    <Image
                      src={selectedMedia.mediaUrl}
                      alt={selectedMedia.title}
                      fill
                      data-ai-hint={selectedMedia.aiHint}
                      className="object-contain"
                    />
                  )}
                </div>
              </DialogContent>
            )}
          </Dialog>
        </div>
      </main>
      <Footer />
    </div>
  );
}
