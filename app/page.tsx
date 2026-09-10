import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import WhoWeWorkWithTeaser from '@/components/WhoWeWorkWithTeaser';
import BrandStorytellingSpotlight from '@/components/BrandStorytellingSpotlight';
import ProcessTeaser from '@/components/ProcessTeaser';
import PortfolioTeaser from '@/components/PortfolioTeaser';
import FinalCTA from '@/components/FinalCTA';
import TrustedByBrands from '@/components/TrustedByBrands';

export const metadata: Metadata = {
  title: 'Apex Narrative – We Help Brands Tell Better Stories',
  description:
    'Lagos-based media production company. Real Estate Media, Brand Films, Event Coverage, and Social Content. We keep it simple.',
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Intro heading section */}
      <section className="bg-near-black py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold leading-tight mb-6">
            A Distinct Voice in Africa&apos;s Media Production Company for Brands
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-cream/80 max-w-3xl mx-auto">
            At Apex Narrative, we combine strategic thinking, creative storytelling, and world-class production to help brands connect with the right audience.
          </p>
        </div>
      </section>

      {/* Who We Work With teaser */}
      <WhoWeWorkWithTeaser />

      {/* "How We Help Brands Be Seen" heading section */}
      <section className="bg-near-black py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
            How We Help Brands Be Seen
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-cream/80">
            Whether you&apos;re launching a new brand, scaling your business, we create content that tells your story with clarity and purpose.
          </p>
        </div>
      </section>

      {/* Brand Storytelling spotlight */}
      <BrandStorytellingSpotlight />

      {/* Process teaser */}
      <ProcessTeaser />

      {/* Portfolio teaser – real Sanity data */}
      <PortfolioTeaser />

      {/* Final CTA */}
      <FinalCTA />

      {/* Trusted by Brands (mobile-only, placeholder) */}
      <TrustedByBrands />
    </>
  );
}