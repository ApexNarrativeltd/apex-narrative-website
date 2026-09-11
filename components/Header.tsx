"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeMenu();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const allLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/work', label: 'Portfolio' },
    { href: '/who-we-work-with', label: 'Who We Work With' },
    { href: '/our-process', label: 'Our Process' },
  ];

  const extraLinks = allLinks.slice(4);

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="flex items-center justify-center p-2 text-cream hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded"
      >
        {isOpen ? <X className="h-7 w-7 md:h-8 md:w-8" /> : <Menu className="h-7 w-7 md:h-8 md:w-8" />}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-near-black border border-gold/20 shadow-lg rounded-md py-2 z-50">
          <div className="block md:hidden">
            {allLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-2 text-cream hover:bg-gold/10 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-inset"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            {extraLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-2 text-cream hover:bg-gold/10 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-inset"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  return (
    <header className="bg-near-black text-cream border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo lockup: icon + very tight wordmark */}
          <Link
            href="/"
            className="flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded"
            aria-label="Apex Narrative – Home"
          >
            <Image
              src="/logo/logo-orange-dark.png"
              alt=""
              width={96}
              height={96}
              className="h-16 w-auto md:h-20 md:w-auto -mr-3"
              priority
            />
            <div className="flex flex-col leading-none font-primary">
              <span className="text-cream font-bold text-xl md:text-2xl tracking-tight">Apex</span>
              <span className="text-cream font-bold text-xl md:text-2xl tracking-tight">Narrative</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-base lg:text-lg">
            <Link href="/" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">Home</Link>
            <Link href="/about" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">About</Link>
            <Link href="/services" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">Services</Link>
            <Link href="/contact" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">Contact</Link>
          </nav>

          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}