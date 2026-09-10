import Link from 'next/link';
import { ArrowUpRight, Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-near-black py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left: Text + CTA */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
              Ready to Tell a Story Worth Remembering?
            </h2>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-6">
              <Phone className="h-5 w-5 text-gold flex-shrink-0" />
              <a
                href="tel:+2348133105922"
                className="text-cream text-lg hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded"
              >
                +234 813 310 5922
              </a>
            </div>

            <p className="text-base md:text-lg text-cream/80 mb-8 max-w-lg leading-relaxed">
              We&apos;ll respond within 24 hours to schedule your discovery call.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-red text-cream font-semibold px-6 py-3 rounded-md hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-near-black"
            >
              Book A Discovery Call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-lg overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1000&q=80"
              alt="Behind the scenes at Apex Narrative"
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay to match brand tone */}
            <div className="absolute inset-0 bg-navy/20" />
          </div>
        </div>
      </div>
    </section>
  );
}