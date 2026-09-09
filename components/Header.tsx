"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Client component for the hamburger dropdown
function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close when clicking outside
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

  // All navigation links
  const allLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/work', label: 'Portfolio' },
    { href: '/who-we-work-with', label: 'Who We Work With' },
    { href: '/our-process', label: 'Our Process' },
  ];

  // Links that appear in the inline nav on desktop (Home, About, Services, Contact)
  const inlineNavLinks = allLinks.slice(0, 4);
  // Extra links for the hamburger dropdown on desktop (Portfolio, Who We Work With, Our Process)
  const extraLinks = allLinks.slice(4);

  return (
    <div ref={menuRef} className="relative">
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="flex items-center justify-center p-2 text-cream hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-navy border border-gold/20 shadow-lg rounded-md py-2 z-50">
          {/* Mobile: show all links */}
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
          {/* Desktop: show only the extra links (Portfolio, Who We Work With, Our Process) */}
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

// Main Header component
export default function Header() {
  return (
    <header className="bg-navy text-cream border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
          >
            Apex Narrative
          </Link>

          {/* Desktop inline navigation (Home, About, Services, Contact) */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded px-1"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded px-1"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded px-1"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded px-1"
            >
              Contact
            </Link>
          </nav>

          {/* Hamburger menu */}
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}