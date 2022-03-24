import React from 'react';

// components
import SkipToContent from './components/SkipToContent';
import SiteWrap from './components/SiteWrap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <SiteWrap>
      <SkipToContent />
      <Navbar />
      <main id="main">
        <Hero />
        <Features />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </SiteWrap>
  );
}

export default App;
