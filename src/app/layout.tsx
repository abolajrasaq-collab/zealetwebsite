import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: "Abolaji Rasaq | Creative Generalist",
    template: "%s | Abolaji Rasaq",
  },
  description: "The portfolio of Abolaji Rasaq, a Creative Generalist: Storyteller, Designer, Director, and Dream Builder.",
  openGraph: {
    title: 'Abolaji Rasaq | Creative Generalist',
    description: 'The portfolio of Abolaji Rasaq, a Creative Generalist: Storyteller, Designer, Director, and Dream Builder.',
    url: 'https://yourdomain.com', // Replace with your actual domain
    siteName: 'Abolaji Rasaq',
    images: [
      {
        url: 'https://i.imgur.com/orThoms.jpeg', // A good default social sharing image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abolaji Rasaq | Creative Generalist',
    description: 'The portfolio of Abolaji Rasaq, a Creative Generalist: Storyteller, Designer, Director, and Dream Builder.',
    // Add your twitter handle
    // creator: '@yourtwitterhandle', 
    images: ['https://i.imgur.com/orThoms.jpeg'], // A good default social sharing image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://i.imgur.com/tyuxVCj.png" type="image/png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
