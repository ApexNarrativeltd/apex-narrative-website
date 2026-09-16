"use client";

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';

export default function ConditionalChrome() {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  if (isStudio) return null;

  return (
    <>
      <Footer />
      <FloatingButtons />
    </>
  );
}