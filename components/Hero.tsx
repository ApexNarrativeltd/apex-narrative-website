import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import RotatingSegments from './RotatingSegments';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-navy">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%231d4b62'/%3E%3C/svg%3E"
        >
          {/* Placeholder cinematic stock video — replace with real hero footage later */}
          <source
            src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-near-black/65" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
          We Help Brands Tell Better Stories
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-cream/85 mb-6 max-w-2xl mx-auto">
          Where strategy meets storytelling, we create cinematic content that earns attention, builds trust, and grows brands.
        </p>

        {/* Rotating segments line */}
        <div className="text-base md:text-lg font-secondary text-gold mb-10">
          For <RotatingSegments interval={3000} />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-brand-red text-cream font-semibold px-6 py-3 rounded-md hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-near-black"
          >
            Explore Our Services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-transparent text-brand-red border-2 border-brand-red font-semibold px-6 py-3 rounded-md hover:bg-brand-red hover:text-cream transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-near-black"
          >
            Watch Our Showreel
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}