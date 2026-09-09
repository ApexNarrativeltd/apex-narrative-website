import Link from 'next/link';

export default function Footer() {
  // Social icons are intentionally empty – awaiting confirmed list and URLs
  const socialLinks: { platform: string; url: string; icon: React.ReactNode }[] = [];

  return (
    <footer className="bg-near-black text-cream border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tagline */}
        <div className="text-center md:text-left mb-8">
          <p className="text-lg md:text-xl font-secondary text-gold">
            We craft cinematic stories that inspire, engage and leave a lasting impact
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-bold text-gold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">About</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">Services</Link></li>
              <li><Link href="/work" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-gold mb-3">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/real-estate-media" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">Real Estate Media</Link></li>
              <li><Link href="/services/brand-marketing-films" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">Brand &amp; Marketing Films</Link></li>
              <li><Link href="/services/event-coverage" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">Event Coverage</Link></li>
              <li><Link href="/services/social-media-content-packages" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">Social Media Content Packages</Link></li>
            </ul>
          </div>

          {/* Who We Work With */}
          <div>
            <h3 className="font-bold text-gold mb-3">Who We Work With</h3>
            <ul className="space-y-2">
              <li><Link href="/who-we-work-with#real-estate" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">Real Estate Agencies</Link></li>
              <li><Link href="/who-we-work-with#smes" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">SMEs &amp; Startups</Link></li>
              <li><Link href="/who-we-work-with#corporate" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">Corporate Brands</Link></li>
              <li><Link href="/who-we-work-with#hospitality" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">Hospitality &amp; Events</Link></li>
              <li><Link href="/who-we-work-with#personal" className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black rounded px-1">Personal Brands / Influencers</Link></li>
            </ul>
          </div>
        </div>

        {/* Social links (commented out – awaiting confirmation) */}
        {/* 
        <div className="mt-8 flex justify-center space-x-6">
          {socialLinks.map((social) => (
            <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-gold transition-colors">
              {social.icon}
            </a>
          ))}
        </div>
        */}

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gold/10 text-center text-sm text-cream/70">
          <p>© Apex Narrative. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}