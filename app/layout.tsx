import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import StructuredData from '@/components/StructuredData';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Apex Narrative – We Help Brands Tell Better Stories',
  description:
    'Lagos-based media production company. Real Estate Media, Brand Films, Event Coverage, and Social Content. We keep it simple.',
  icons: {
    icon: [
      { url: '/logo/logo-white-dark.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/logo-white-dark.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/logo/logo-white-dark.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Apex Narrative – We Help Brands Tell Better Stories',
    description:
      'Lagos-based media production company. Real Estate Media, Brand Films, Event Coverage, and Social Content.',
    url: 'https://apex-narrative-website.vercel.app',
    siteName: 'Apex Narrative',
    images: [
      {
        url: '/logo/logo-orange-dark.png',
        width: 1200,
        height: 630,
        alt: 'Apex Narrative – We Help Brands Tell Better Stories',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Narrative – We Help Brands Tell Better Stories',
    description:
      'Lagos-based media production company. Real Estate Media, Brand Films, Event Coverage, and Social Content.',
    images: ['/logo/logo-orange-dark.png'],
    site: '@ApexNarrative',
    creator: '@ApexNarrative',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="flex flex-col min-h-screen bg-cream text-near-black">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}