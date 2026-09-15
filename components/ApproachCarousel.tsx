"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Strategic First',
    description:
      'Every project begins with understanding your goals, audience, and brand narrative.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
  },
  {
    title: 'Cinematic Quality',
    description:
      'From concept to final cut, we deliver visually compelling productions that leave a lasting impression.',
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80',
  },
  {
    title: 'Results-Driven',
    description:
      'Our content is crafted to build credibility, increase engagement, and support measurable business growth.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
  },
  {
    title: 'End-to-End Partnership',
    description:
      'We guide you through every stage—from discovery and strategy to production and amplification.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
  },
];

const IDLE_RESUME_MS = 3000;
const SWIPE_HINT_STORAGE_KEY = 'apex-carousel-swipe-hint-seen';

interface ApproachCarouselProps {
  autoRotate?: boolean;
  interval?: number;
}

export default function ApproachCarousel({
  autoRotate = true,
  interval = 6000,
}: ApproachCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isIdlePaused, setIsIdlePaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(false);

  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // --- Reduced motion detection ---
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // --- One-time swipe hint (mobile only, first visit only) ---
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isMobile = window.innerWidth < 768;
    const alreadySeen = localStorage.getItem(SWIPE_HINT_STORAGE_KEY);

    if (isMobile && !alreadySeen && !prefersReducedMotion) {
      // Small delay so it doesn't flash immediately on load
      const showTimer = setTimeout(() => setShowSwipeHint(true), 1200);

      // Auto-hide after 4 seconds
      const hideTimer = setTimeout(() => {
        setShowSwipeHint(false);
        localStorage.setItem(SWIPE_HINT_STORAGE_KEY, 'true');
      }, 5200);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [prefersReducedMotion]);

  // --- Idle resume logic — after any manual interaction, pause, then auto-resume ---
  const pauseThenResume = useCallback(() => {
    setIsIdlePaused(true);

    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

    idleTimerRef.current = setTimeout(() => {
      setIsIdlePaused(false);
    }, IDLE_RESUME_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  // --- Auto-rotate ---
  useEffect(() => {
    if (!autoRotate || isHovered || isIdlePaused || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoRotate, isHovered, isIdlePaused, prefersReducedMotion, interval]);

  // --- Navigation helpers ---
  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    pauseThenResume();
  }, [pauseThenResume]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    pauseThenResume();
  }, [pauseThenResume]);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(index);
      pauseThenResume();
    },
    [pauseThenResume]
  );

  // --- Touch swipe handlers ---
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;

    const distance = touchStartXRef.current - touchEndXRef.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    // First swipe hides the hint permanently
    if (showSwipeHint) {
      setShowSwipeHint(false);
      localStorage.setItem(SWIPE_HINT_STORAGE_KEY, 'true');
    }

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const currentNumber = String(current + 1).padStart(2, '0');
  const totalNumber = String(slides.length).padStart(2, '0');

  return (
    <section
      className="relative w-full h-[80vh] min-h-[600px] max-h-[900px] overflow-hidden bg-near-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background images with crossfade */}
      {slides.map((slide, index) => (
        <div
          key={index}
          aria-hidden="true"
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/60 to-near-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-near-black/70 via-transparent to-transparent" />

      {/* Content container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-end pb-12 md:pb-20">
        {/* Slide counter */}
        <div className="absolute top-8 right-6 sm:right-8 lg:right-12 text-cream/60 font-secondary text-sm tracking-[0.2em]">
          {currentNumber} <span className="text-cream/30 mx-1">/</span> {totalNumber}
        </div>

        {/* Eyebrow */}
        <div className="absolute top-8 left-6 sm:left-8 lg:left-12 text-gold font-secondary text-xs md:text-sm uppercase tracking-[0.25em]">
          Our Approach
        </div>

        {/* Slide text */}
        <div className="max-w-3xl min-h-[220px] md:min-h-[260px] flex items-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gold leading-[1.05] mb-5">
                {slides[current].title}
              </h3>
              <p className="text-lg md:text-xl text-cream/90 leading-relaxed max-w-xl">
                {slides[current].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation row */}
        <div className="mt-10 md:mt-14 flex items-center justify-between gap-6">
          {/* Progress bars — always visible */}
          <div
            className="flex items-center gap-3 md:gap-4"
            role="tablist"
            aria-label="Carousel navigation"
          >
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                aria-current={index === current ? 'true' : 'false'}
                className="group relative py-3 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded"
              >
                <span
                  className={`block h-[2px] transition-all duration-500 ${
                    index === current
                      ? 'w-10 md:w-14 bg-gold'
                      : 'w-5 md:w-6 bg-cream/30 group-hover:bg-cream/60'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Prev / Next circular buttons — desktop only, screen-reader accessible everywhere */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-12 h-12 rounded-full border border-cream/25 text-cream hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-12 h-12 rounded-full border border-cream/25 text-cream hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile: hidden nav buttons for screen readers only */}
          <div className="md:hidden sr-only">
            <button onClick={prev} aria-label="Previous slide">
              Previous slide
            </button>
            <button onClick={next} aria-label="Next slide">
              Next slide
            </button>
          </div>
        </div>
      </div>

      {/* One-time swipe hint — mobile only */}
      <AnimatePresence>
        {showSwipeHint && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="md:hidden absolute bottom-24 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          >
            <div className="flex items-center gap-2 bg-near-black/80 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2">
              <motion.div
                animate={{ x: [-6, 6, -6] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="text-gold"
              >
                <ChevronRight className="h-4 w-4" />
              </motion.div>
              <span className="text-cream/90 text-xs font-medium tracking-wide">
                Swipe to explore
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}