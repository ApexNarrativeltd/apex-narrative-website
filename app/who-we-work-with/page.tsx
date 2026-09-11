import type { Metadata } from 'next';
import WhoWeWorkWithTeaser from '@/components/WhoWeWorkWithTeaser';
import TrustedByBrandsStrip from '@/components/TrustedByBrandsStrip';

export const metadata: Metadata = {
  title: 'Apex Narrative – Who We Work With',
  description:
    'Apex Narrative works with Real Estate Agencies, SMEs, Corporate Brands, Hospitality & Events, and Personal Brands.',
};

export default function WhoWeWorkWithPage() {
  return (
    <div className="bg-near-black text-cream min-h-screen">
      {/* ===== Hero: navy + video + centered multi-line text ===== */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-navy">
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
            <source
              src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-near-black/65" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
          {/* Mobile-only eyebrow */}
          <p className="md:hidden text-cream/70 text-base mb-4 font-secondary">
            Our Partners
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-2">
            Partnering with Brands
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
            Ready to Be Seen
          </h2>
          <p className="text-base md:text-lg text-cream/80 max-w-2xl mx-auto">
            From ambitious startups to established organizations
          </p>
        </div>
      </section>

      {/* ===== Trusted by Brands logo strip ===== */}
      <TrustedByBrandsStrip />

      {/* ===== 5 segment cards ===== */}
      <WhoWeWorkWithTeaser showAll />
    </div>
  );
}