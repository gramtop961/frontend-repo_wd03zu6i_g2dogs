import React from 'react';
import { motion } from 'framer-motion';

const BRANDS = [
  {
    name: 'Ferrari',
    img: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Ferrari-Logo.svg',
    country: 'Italy',
  },
  {
    name: 'Lamborghini',
    img: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Lamborghini_Logo.svg',
    country: 'Italy',
  },
  {
    name: 'Porsche',
    img: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Porsche_AG_logo.svg',
    country: 'Germany',
  },
  {
    name: 'BMW',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
    country: 'Germany',
  },
  {
    name: 'Mercedes-Benz',
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg',
    country: 'Germany',
  },
  {
    name: 'Audi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Audi_logo_detail.svg',
    country: 'Germany',
  },
  {
    name: 'Toyota',
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.png',
    country: 'Japan',
  },
  {
    name: 'Nissan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Nissan_2020_logo.svg',
    country: 'Japan',
  },
  {
    name: 'McLaren',
    img: 'https://upload.wikimedia.org/wikipedia/en/2/2f/McLaren_Automotive_logo.svg',
    country: 'UK',
  },
  {
    name: 'Bugatti',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Bugatti_Logo.svg',
    country: 'France',
  },
  {
    name: 'Aston Martin',
    img: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Aston_Martin_Lagonda_logo.svg',
    country: 'UK',
  },
  {
    name: 'Chevrolet',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Chevrolet-logo.png',
    country: 'USA',
  },
];

function BrandCard({ name, img, country }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex flex-col items-center gap-4 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="h-16 md:h-20 flex items-center justify-center">
        <img src={img} alt={`${name} logo`} className="max-h-16 md:max-h-20 w-auto object-contain" />
      </div>
      <div className="text-center">
        <h3 className="text-white font-semibold tracking-wide">{name}</h3>
        <p className="text-xs text-white/60">{country}</p>
      </div>
      <button className="mt-2 text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition">Explore</button>
    </motion.div>
  );
}

export default function BrandsGrid() {
  return (
    <section id="brands" className="relative bg-gradient-to-b from-black via-zinc-900 to-black text-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Top Car Brands Around the World</h2>
          <p className="mt-3 text-white/70">A curated selection of iconic manufacturers known for performance, craftsmanship, and innovation.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {BRANDS.map((b) => (
            <BrandCard key={b.name} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}
