import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const subtitleY = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const sceneFilter = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(6px)']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.35]);

  return (
    <section id="hero" ref={ref} className="relative min-h-[120vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Scene as background */}
      <motion.div
        style={{ scale: sceneScale, filter: sceneFilter }}
        className="absolute inset-0 z-0"
      >
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Soft gradient overlay to improve text contrast */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/20 to-black/80"
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 pt-28 md:pt-32 pb-24 flex min-h-[100vh] items-center">
        <div className="max-w-3xl">
          <motion.h1
            style={{ y: titleY }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] drop-shadow-sm"
          >
            Drive the Future
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Top Car Brands Worldwide</span>
          </motion.h1>

          <motion.p
            style={{ y: subtitleY }}
            className="mt-5 text-white/80 text-base md:text-lg max-w-xl"
          >
            Explore legendary marques, cutting-edge design, and high-performance engineering. Scroll to cruise through an immersive 3D experience.
          </motion.p>

          <div className="mt-8 flex items-center gap-3">
            <a href="#brands" className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition">Browse Brands</a>
            <a href="#about" className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:border-white/60 transition">Learn More</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white/70 text-xs">
          <span>Scroll</span>
          <span className="mt-1 h-8 w-[2px] bg-gradient-to-b from-white/70 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}
