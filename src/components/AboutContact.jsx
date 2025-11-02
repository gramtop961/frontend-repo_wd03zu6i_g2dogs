import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function AboutContact() {
  return (
    <section id="about" className="bg-black text-white">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">About Us</h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              We are automotive enthusiasts showcasing the world’s most influential car brands. Our mission is to bring performance, design, and innovation together into a visually immersive experience you can explore right in your browser.
            </p>
            <p className="mt-3 text-white/70 leading-relaxed">
              From heritage marques to future-focused electric pioneers, this is your gateway to discover what drives the industry forward.
            </p>
          </div>

          <div id="contact" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
            <h4 className="text-2xl font-semibold">Contact Us</h4>
            <p className="mt-2 text-white/70">We'd love to hear from you. Reach out for partnerships, feedback, or general inquiries.</p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-white/80"><Mail size={18} /><a className="hover:underline" href="mailto:hello@autovibe.example">hello@autovibe.example</a></div>
              <div className="flex items-center gap-3 text-white/80"><Phone size={18} /><a className="hover:underline" href="tel:+1234567890">+1 (234) 567-890</a></div>
              <div className="flex items-center gap-3 text-white/80"><MapPin size={18} />Global • Remote</div>
            </div>

            <form action="mailto:hello@autovibe.example" method="post" encType="text/plain" className="mt-6 grid grid-cols-1 gap-3">
              <input required type="text" name="name" placeholder="Your name" className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 outline-none focus:border-white/40" />
              <input required type="email" name="email" placeholder="Your email" className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 outline-none focus:border-white/40" />
              <textarea required name="message" placeholder="Your message" rows={4} className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 outline-none focus:border-white/40" />
              <button type="submit" className="mt-2 inline-flex justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
