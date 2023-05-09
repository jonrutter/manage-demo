import React from 'react';
import Head from 'next/head';
import { SkipToContent } from '@/components/SkipToContent';
import { SiteBackground } from '@/components/SiteBackground';
import { Navbar } from '@/scenes/Navbar';
import { Hero } from '@/scenes/Hero';
import { Features } from '@/scenes/Features';
import { Testimonials } from '@/scenes/Testimonials';
import { CtaSection } from '@/scenes/CtaSection';
import { Footer } from '@/scenes/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Manage | Home</title>
      </Head>
      <SiteBackground>
        <SkipToContent />
        <Navbar />
        <main id="main">
          <Hero />
          <Features />
          <Testimonials />
          <CtaSection />
        </main>
        <Footer />
      </SiteBackground>
    </>
  );
}
