"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const segments = [
  'Real Estate Agencies',
  'SMEs & Startups',
  'Corporate Brands',
  'Hospitality & Events',
  'Personal Brands / Influencers',
];

interface RotatingSegmentsProps {
  interval?: number; // in milliseconds, defaults to 3000
}

export default function RotatingSegments({ interval = 3000 }: RotatingSegmentsProps) {
  const [index, setIndex] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  // Check for reduced-motion preference
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      setShouldAnimate(false);
    }

    const handler = (e: MediaQueryListEvent) => {
      setShouldAnimate(!e.matches);
    };
    prefersReducedMotion.addEventListener('change', handler);
    return () => prefersReducedMotion.removeEventListener('change', handler);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (!shouldAnimate) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % segments.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, shouldAnimate]);

  // If reduced-motion, show first segment only
  if (!shouldAnimate) {
    return <span>{segments[0]}</span>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="inline-block"
      >
        {segments[index]}
      </motion.span>
    </AnimatePresence>
  );
}