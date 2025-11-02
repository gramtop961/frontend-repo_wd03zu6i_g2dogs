import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandsGrid from './components/BrandsGrid';
import AboutContact from './components/AboutContact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <Hero />
      <BrandsGrid />
      <AboutContact />
      <footer className="bg-black/90 border-t border-white/10">
        <div className="container mx-auto px-6 py-8 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} AutoVibe • All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-white">Back to Top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
