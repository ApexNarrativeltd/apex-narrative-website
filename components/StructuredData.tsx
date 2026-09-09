export default function StructuredData() {
  // LocalBusiness structured data (JSON-LD)
  // Schema.org type: ProfessionalService (subtype of LocalBusiness)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Apex Narrative',
    description:
      'Lagos-based media production company specializing in Real Estate Media, Brand & Marketing Films, Event Coverage, and Social Media Content Packages.',
    // TODO: Update URL to https://apexnarrativeltd.com once custom domain is live
    url: 'https://apex-narrative-website.vercel.app',
    email: 'hello@apexnarrativeltd.com',
    telephone: '+2348133105922',
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'Block 2, Niran Obayanju Drive, Ajayi-Apata Newtown Estate, Opposite Mobile Filling Station',
      addressLocality: 'Lagos',
      addressCountry: 'Nigeria',
    },
    sameAs: [
      // TODO: Add social media URLs once confirmed
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}