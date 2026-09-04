import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function WhatsAppButton() {
  // International format: country code 234, then 8133105922 (without leading zero)
  const waNumber = '2348133105922';
  const waLink = `https://wa.me/${waNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gold text-near-black font-semibold px-4 py-3 rounded-full shadow-lg hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span>Chat Now</span>
      </Link>
    </div>
  );
}