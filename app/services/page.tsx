import type { Metadata } from 'next';
import ServicesPageContent from '@/components/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Apex Narrative – Services',
  description:
    "Explore Apex Narrative's services: Real Estate Media, Brand & Marketing Films, Event Coverage, and Social Media Content Packages.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}