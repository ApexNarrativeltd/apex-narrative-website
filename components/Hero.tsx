import Link from 'next/link';
import RotatingSegments from './RotatingSegments';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-near-black">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23191919'/%3E%3C/svg%3E"
        >
          <source src="/videos/hero-placeholder.webm" type="video/webm" />
          <source src="/videos/hero-placeholder.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-near-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-4">
            We Help Brands Tell Better Stories
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-cream/80 mb-8 max-w-2xl">
            Where strategy meets storytelling, we create cinematic content that earns attention, builds trust, and grows brands.
          </p>

          {/* Auto-cycling segments – inline with a label */}
          <div className="text-lg md:text-xl font-secondary text-gold mb-8">
            For{' '}
            <RotatingSegments interval={3000} />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 bg-gold text-near-black font-semibold rounded-md hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black"
            >
              Explore Our Services
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-cream border border-cream/30 font-semibold rounded-md hover:bg-cream/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black"
            >
              Watch Our Showreel
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}