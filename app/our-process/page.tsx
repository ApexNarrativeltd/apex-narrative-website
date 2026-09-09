import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeroBanner from '@/components/PageHeroBanner';

export const metadata: Metadata = {
  title: 'Apex Narrative – Our Process',
  description:
    "Learn about Apex Narrative's four-step creative process, from discovery to delivery.",
};

// Step names only – no deliverables, no descriptions
const steps = ['Discover', 'Strategise', 'Create', 'Amplify'];

export default function OurProcessPage() {
  return (
    <div className="bg-near-black text-cream min-h-screen">
      <PageHeroBanner
        eyebrow="How We Work"
        title="Our Process"
        backgroundImage="/images/process-hero-placeholder.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Step names as a simple visual list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold text-near-black text-2xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-cream">{step}</h3>
            </div>
          ))}
        </div>

        {/* Honest "Coming Soon" message */}
        <div className="mt-16 text-center max-w-2xl mx-auto border-t border-cream/10 pt-12">
          <p className="text-cream/70 text-lg">
            We're finalizing the detailed breakdown of each step — check back soon,
            or{' '}
            <Link
              href="/contact"
              className="text-gold hover:underline transition-colors"
            >
              reach out
            </Link>
            {' '}and we'll walk you through our process directly.
          </p>
        </div>
      </section>
    </div>
  );
}