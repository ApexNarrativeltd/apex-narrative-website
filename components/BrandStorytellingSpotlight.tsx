import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function BrandStorytellingSpotlight() {
  return (
    <section className="relative w-full min-h-[500px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&q=80)',
          backgroundColor: '#191919',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-near-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
          Brand Storytelling
        </h3>
        <p className="text-base md:text-lg text-cream/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          We create compelling brand films that communicate your purpose and build trust.
        </p>
        <Link
          href="/services/brand-marketing-films"
          className="inline-flex items-center gap-2 bg-brand-red text-cream font-semibold px-6 py-3 rounded-md hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-near-black"
        >
          Explore Our Services
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}