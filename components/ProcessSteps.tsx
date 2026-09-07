const steps = [
  {
    number: 1,
    title: 'Discovery',
    description:
      'We listen before we create. We dive deep into your brand, audience, and challenges.',
  },
  {
    number: 2,
    title: 'Strategies',
    description:
      'Using insights from discovery, we develop a creative way to achieve measurable results.',
  },
  {
    number: 3,
    title: 'Create',
    description:
      'We bring your vision to life from pre-production to post-production, with brand goal.',
  },
  {
    number: 4,
    title: 'Amplify',
    description:
      'We help your story go further and prepare your content for right channels.',
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-20 bg-near-black/50 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cream mb-12">
          Our Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold text-near-black text-2xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-cream mb-2">{step.title}</h3>
              <p className="text-cream/70 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}