import React from 'react';

const navItems = [
  { label: 'Brands', href: '#brands' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Explore', href: '#hero' },
];

export default function Navbar() {
  return (
    <div className="fixed top-0 right-0 z-20 p-4">
      <nav className="backdrop-blur-md bg-black/30 border border-white/10 rounded-full shadow-lg">
        <ul className="flex items-center gap-2 px-3 py-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs md:text-sm font-medium text-white/90 hover:text-white px-3 py-2 rounded-full transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
