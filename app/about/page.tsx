import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import PositioningBand from '@/components/PositioningBand';

export const metadata: Metadata = {
  title: 'Apex Narrative – About Us',
};

export default function AboutPage() {
  return (
    <div className="bg-near-black text-cream min-h-screen">
      {/* ===== Hero ===== */}
      <section className="relative w-full h-auto min-h-[300px] md:h-[70vh] md:min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80)',
            backgroundColor: '#191919',
          }}
        />
        <div className="absolute inset-0 bg-near-black/50" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-12 md:pt-16 pb-2 md:pb-3">
          <div className="max-w-xs md:max-w-md">
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-cream leading-tight">
              Built for African Brands. Ready for the World.
            </h2>
          </div>

          <h1 className="hidden md:block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-brand-red leading-none">
            About Us
          </h1>
        </div>
      </section>

      {/* ===== Mission / Promise / Vision ===== */}
      <section className="bg-near-black py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-lg md:text-xl font-medium text-cream mb-3 tracking-wide">
              Our Mission
            </h2>
            <p className="text-cream/70 text-sm md:text-base leading-relaxed">
              To turn ordinary brand stories into powerful narratives that drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="text-center">
              <h2 className="text-lg md:text-xl font-medium text-cream mb-3 tracking-wide">
                Our Promise
              </h2>
              <p className="text-cream/70 text-sm md:text-base leading-relaxed">
                Every piece of content we create is built with intention. We guarantee every client leaves with elevated brand perception, a sharper narrative position, and content that continues to deliver.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-lg md:text-xl font-medium text-cream mb-3 tracking-wide">
                Our Vision
              </h2>
              <p className="text-cream/70 text-sm md:text-base leading-relaxed">
                To become Africa&apos;s leading media production company for brands that are ready to be seen at the highest level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Who We Are ===== */}
      <section className="bg-near-black py-16 md:py-20 border-t border-cream/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold leading-tight mb-6">
            Who We Are
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-cream leading-tight mb-8">
            Stories Worth Telling. Brands Worth Remembering.
          </p>
          <div className="space-y-5 text-base md:text-lg text-cream/80 leading-relaxed">
            <p>
              At Apex Narrative, we believe every brand has a story worth telling. The challenge is telling it in a way that captures attention, communicates value, and leaves a lasting impression.
            </p>
            <p>
              We are a creative media production company focused on helping businesses turn their ideas, products, and experiences into compelling visual stories. Through thoughtful storytelling, cinematic production, and purposeful content, we help brands connect with the audiences that matter.
            </p>
            <p>
              Whether we&apos;re showcasing a property, introducing a product, capturing an experience, or communicating a company&apos;s vision, our goal is to create content with a clear purpose.
            </p>
          </div>
        </div>
      </section>

      {/* ===== What We Do ===== */}
      <section className="bg-near-black py-16 md:py-20 border-t border-cream/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold leading-tight mb-8">
            What We Do
          </h2>
          <div className="space-y-5 text-base md:text-lg text-cream/80 leading-relaxed">
            <p>
              We create visual content that helps brands present themselves with clarity and confidence. Our services span video production, brand storytelling, real estate media, social media content, and campaign visuals tailored to each project&apos;s objectives.
            </p>
            <p>
              We approach every project with an understanding that good content is not just about looking impressive. It should communicate the right message, reflect the brand&apos;s identity, and serve a meaningful purpose.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Our Approach ===== */}
      <section className="bg-near-black py-16 md:py-20 border-t border-cream/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold leading-tight mb-6">
            Our Approach
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-cream leading-tight mb-8">
            Understand. Create. Deliver.
          </p>
          <div className="space-y-5 text-base md:text-lg text-cream/80 leading-relaxed">
            <p>
              Every project begins with understanding your brand, your audience, and what you want to achieve. From there, we develop a creative direction, plan the production, and bring the idea to life through carefully crafted visuals and storytelling.
            </p>
            <p>
              We value collaboration, clear communication, attention to detail, and a process that keeps the client&apos;s objectives at the centre of the work.
            </p>
          </div>
        </div>
      </section>

      {/* ===== What We Believe ===== */}
      <section className="bg-near-black py-16 md:py-20 border-t border-cream/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold leading-tight mb-10">
            What We Believe
          </h2>
          <ul className="space-y-6 text-base md:text-lg text-cream/80 leading-relaxed">
            <li>
              <strong className="text-cream font-bold">Purpose before production.</strong>{' '}
              Every creative decision should serve a clear objective.
            </li>
            <li>
              <strong className="text-cream font-bold">Stories create connections.</strong>{' '}
              The right story helps people understand, remember, and connect with a brand.
            </li>
            <li>
              <strong className="text-cream font-bold">Details matter.</strong>{' '}
              From the first concept to the final edit, quality lives in the details.
            </li>
            <li>
              <strong className="text-cream font-bold">Every brand deserves thoughtful storytelling.</strong>{' '}
              We work to understand what makes each client different and translate that into meaningful content.
            </li>
          </ul>
        </div>
      </section>

      {/* ===== Let's Tell Your Story ===== */}
      <section className="bg-near-black py-16 md:py-20 border-t border-cream/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold leading-tight mb-6">
            Let&apos;s Tell Your Story
          </h2>
          <p className="text-base md:text-lg text-cream/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Your brand has something worth sharing. Let&apos;s work together to bring it to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-cream font-semibold px-6 py-3 rounded-md hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-near-black"
          >
            Book a Discovery Call
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ===== Mobile-only Chat Now button ===== */}
      <div className="md:hidden flex justify-center pb-12 bg-near-black">
        <a
          href="https://wa.me/2348133105922"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-near-black"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
          Chat Now
        </a>
      </div>

      {/* ===== Positioning band ===== */}
      <section className="relative">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="h-1/2 bg-navy" />
          <div className="h-1/2 bg-near-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <PositioningBand
            label="Our Positioning"
            heading="A Distinct Voice in Africa's Media Production Landscape"
            paragraph="At Apex Narrative, we combine strategic thinking, creative storytelling, and world-class production to help African brands communicate with confidence. We don't just create content, we craft narratives that help brands stand out, connect with the right audience, and compete on a global stage."
          />
        </div>
      </section>
    </div>
  );
}