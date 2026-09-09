import type { Metadata } from 'next';
import WorkClient from './WorkClient';

export const metadata: Metadata = {
  title: 'Apex Narrative – Work',
  description:
    "View Apex Narrative's portfolio – Real Estate Media, Brand Films, Event Coverage, and Social Media Content.",
};

export default function WorkPage() {
  return <WorkClient />;
}