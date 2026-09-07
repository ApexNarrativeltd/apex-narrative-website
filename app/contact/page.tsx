import type { Metadata } from "next";
import Link from "next/link";
import PageHeroBanner from "@/components/PageHeroBanner";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Apex Narrative – Contact",
};

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

            {/* Map Embed */}
            <div className="mb-6 aspect-video w-full rounded-lg overflow-hidden border border-cream/20">
              <iframe
                src="https://www.google.com/maps?q=Block+2+Niran+Obayanju+Drive+Ajayi-Apata+Newtown+Estate+Lekki-Epe+Expressway+Lagos&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Apex Narrative Location Map"
              />
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

          {/* Right: Form (Client Component) */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}