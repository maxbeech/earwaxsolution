import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'Earwax Solution | Professional Earwax Removal | UK',
  description: 'Earwax Solution offers professional, safe and effective earwax removal services using modern techniques. Our specialists provide comfortable treatments for all ages.',
  keywords: 'earwax removal, ear cleaning, microsuction, earwax solution, ear health, ear specialist, hearing health, ear irrigation',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased text-gray-900 bg-neutral-50`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
