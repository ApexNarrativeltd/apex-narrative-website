"use client";

import { useState } from 'react';
import type { Metadata } from 'next';
import ServiceBlock from '@/components/ServiceBlock';
import ProcessSteps from '@/components/ProcessSteps';

const services = [
  {
    title: 'Real Estate Media',
    deliverables: [
      'Drone Aerial Photography',
      'Property Walkthrough Videos',
      'Real Estate Promotional Campaigns',
      'Luxury Property Showcase Videos',
      'Real Estate Listing Videos',
    ],
    imagePath:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    imageSide: 'left' as const,
  },
  {
    title: 'Brand & Marketing Films',
    deliverables: [
      'Customer Testimonial Videos',
      'Product Launch Videos',
      'Promotional Videos',
      'Company Profile Videos',
      'Brand Story Films',
    ],
    imagePath:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80',
    imageSide: 'right' as const,
  },
  {
    title: 'Social Media Content Packages',
    deliverables: [
      'Content Planning',
      'Motion Graphics',
      'Social Media Photography',
      'Short-Form Videos',
      'Campaign Content',
    ],
    imagePath:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
    imageSide: 'left' as const,
  },
  {
    title: 'Event Coverage',
    deliverables: [
      'Conferences & Summits',
      'Event Highlight Films',
      'Corporate Events',
      'Live Streaming',
      'Award Ceremonies',
    ],
    imagePath:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
    imageSide: 'right' as const,
  },
];

export default function ServicesPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-near-black text-cream min-h-screen">
      {/* ===== Hero: Click-to-play video ===== */}
      <section className="relative w-full aspect-video max-h-[80vh] bg-navy overflow-hidden">
        {isPlaying ? (
          // Playing state — YouTube iframe
          <iframe
            src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&rel=0"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Apex Narrative showreel"
          />
        ) : (
          // Idle state — poster + play button
          <>
            {/* Poster image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&q=80)',
                backgroundColor: '#191919',
              }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-near-black/50" />

            {/* Centered play button */}
            <button
              onClick={() => setIsPlaying(true)}
              aria-label="Play showreel"
              className="absolute inset-0 z-10 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-near-black"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-red flex items-center justify-center shadow-2xl shadow-black/50 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-9 h-9 md:w-11 md:h-11 text-cream ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </button>
          </>
        )}
      </section>

      {/* ===== "Our Offerings" heading ===== */}
      <section className="bg-near-black pt-12 md:pt-16 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight">
            Our Offerings
          </h2>
        </div>
      </section>

      {/* ===== Service blocks ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {services.map((service) => (
          <ServiceBlock
            key={service.title}
            title={service.title}
            deliverables={service.deliverables}
            imagePath={service.imagePath}
            imageSide={service.imageSide}
          />
        ))}
      </div>

      {/* ===== Process Steps ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ProcessSteps
          heading="The Process"
          subtext="A structured, four-phase approach to ensure your project is completed on time, on budget, and beyond expectations."
        />
      </div>
    </div>
  );
}