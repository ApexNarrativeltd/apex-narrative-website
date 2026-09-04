import type { Metadata } from 'next';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Apex Narrative – We Help Brands Tell Better Stories',
  description:
    'Lagos-based media production company. Real Estate Media, Brand Films, Event Coverage, and Social Content. We keep it simple.',
};

export default function HomePage() {
  return <Hero />;
}