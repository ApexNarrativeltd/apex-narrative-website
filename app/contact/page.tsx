import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeroBanner from '@/components/PageHeroBanner';

export const metadata: Metadata = {
  title: 'Apex Narrative – Contact',
};

// The four FRD service options
const serviceOptions = [
  'Real Estate Media',
  'Brand & Marketing Films',
  'Event Coverage',
  'Social Media Content Packages',
];

export default function ContactPage() {
  return (
    <div className="bg-near-black text-cream min-h-screen">
      {/* Hero */}
      <PageHeroBanner
        eyebrow="Get In Touch"
        title="Let's Build Something Exceptional Together"
        backgroundImage="/images/contact-hero-placeholder.jpg"
      />

      {/* Main two-column section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-cream mb-4">
              Reach Out to Us
            </h2>
            <p className="text-cream/70 mb-8">
              We'd love to hear about your project. Whether you're ready to start
              or just exploring ideas, get in touch and we'll take it from there.
            </p>

            {/* Address */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-1">
                Visit Us
              </h3>
              <p className="text-cream/80 text-sm leading-relaxed">
                Block 2, Niran Obayanju Drive, Ajayi-Apata Newtown Estate,
                <br />
                Opposite Mobile Filling Station, Off Lekki-Epe Expressway.
              </p>
            </div>

            {/* Email */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-1">
                Email
              </h3>
              <a
                href="mailto:hello@apexnarrativeltd.com"
                className="text-cream/80 hover:text-gold transition-colors"
              >
                hello@apexnarrativeltd.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-1">
                WhatsApp
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-cream/80">0813 310 5922</span>
                <Link
                  href="https://wa.me/2348133105922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-near-black font-semibold rounded-md hover:brightness-110 transition-all duration-200 text-sm"
                >
                  Message on WhatsApp
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Form Shell (no validation, no submit yet) */}
          <div>
            <h2 className="text-2xl font-bold text-cream mb-4">
              Send a Message
            </h2>
            <form
              // No action, no onSubmit – static shell only
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cream/80 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-cream/5 border border-cream/20 rounded-md text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  placeholder="e.g. John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cream/80 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-cream/5 border border-cream/20 rounded-md text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  placeholder="e.g. john@example.com"
                />
              </div>

              {/* Company/Organization */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-cream/80 mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 bg-cream/5 border border-cream/20 rounded-md text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  placeholder="e.g. ABC Realty"
                />
              </div>

              {/* Interest (dropdown) */}
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-cream/80 mb-1">
                  Service of Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-2 bg-cream/5 border border-cream/20 rounded-md text-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-near-black">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cream/80 mb-1">
                  Project Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-cream/5 border border-cream/20 rounded-md text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition resize-y"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              {/* Consent Checkbox (NDPR-required, flagged for design update) */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  className="mt-1 w-4 h-4 text-gold bg-cream/5 border-cream/20 rounded focus:ring-gold focus:ring-2 focus:ring-offset-1 focus:ring-offset-near-black"
                />
                <label htmlFor="consent" className="text-sm text-cream/70 leading-relaxed">
                  I consent to the processing of my data for the purpose of responding
                  to my enquiry, in accordance with Apex Narrative's Privacy Policy.
                  <span className="block text-xs text-cream/50 mt-0.5">
                    {/* Note: Design file will be updated to reflect this NDPR requirement. */}
                  </span>
                </label>
              </div>

              {/* Submit button – placeholder (no function yet) */}
              <div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-gold text-near-black font-semibold rounded-md hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}