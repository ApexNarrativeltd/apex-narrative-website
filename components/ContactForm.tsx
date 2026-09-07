"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormValues } from '@/lib/validations/contact';
import { SERVICE_TYPES } from '@/lib/constants';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      serviceInterest: undefined,
      message: '',
      consent: false,
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // Batch 2: only log to console – no API call yet
    // eslint-disable-next-line no-console
    console.log('Form data (valid):', data);
    // Reset form? Not required – we can keep data for testing.
    // reset(); // Uncomment if you want to clear after submit
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-cream/80 mb-1">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className="w-full px-4 py-2 bg-cream/5 border border-cream/20 rounded-md text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
          placeholder="e.g. John Doe"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-cream/80 mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className="w-full px-4 py-2 bg-cream/5 border border-cream/20 rounded-md text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
          placeholder="e.g. john@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Company/Organization */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-cream/80 mb-1">
          Company / Organization
        </label>
        <input
          id="company"
          type="text"
          {...register('company')}
          aria-invalid={errors.company ? 'true' : 'false'}
          aria-describedby={errors.company ? 'company-error' : undefined}
          className="w-full px-4 py-2 bg-cream/5 border border-cream/20 rounded-md text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
          placeholder="e.g. ABC Realty"
        />
        {errors.company && (
          <p id="company-error" className="mt-1 text-sm text-red-400">
            {errors.company.message}
          </p>
        )}
      </div>

      {/* Interest (dropdown) */}
      <div>
        <label htmlFor="serviceInterest" className="block text-sm font-medium text-cream/80 mb-1">
          Service of Interest
        </label>
        <select
          id="serviceInterest"
          {...register('serviceInterest')}
          aria-invalid={errors.serviceInterest ? 'true' : 'false'}
          aria-describedby={errors.serviceInterest ? 'interest-error' : undefined}
          className="w-full px-4 py-2 bg-cream/5 border border-cream/20 rounded-md text-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
        >
          <option value="">Select a service...</option>
          {SERVICE_TYPES.map((opt) => (
            <option key={opt} value={opt} className="bg-near-black">
              {opt}
            </option>
          ))}
        </select>
        {errors.serviceInterest && (
          <p id="interest-error" className="mt-1 text-sm text-red-400">
            {errors.serviceInterest.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-cream/80 mb-1">
          Project Description
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="w-full px-4 py-2 bg-cream/5 border border-cream/20 rounded-md text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition resize-y"
          placeholder="Tell us about your project, goals, and timeline..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          {...register('consent')}
          aria-invalid={errors.consent ? 'true' : 'false'}
          aria-describedby={errors.consent ? 'consent-error' : undefined}
          className="mt-1 w-4 h-4 text-gold bg-cream/5 border-cream/20 rounded focus:ring-gold focus:ring-2 focus:ring-offset-1 focus:ring-offset-near-black"
        />
        <label htmlFor="consent" className="text-sm text-cream/70 leading-relaxed">
          I consent to the processing of my data for the purpose of responding
          to my enquiry, in accordance with Apex Narrative's Privacy Policy.
          <span className="block text-xs text-cream/50 mt-0.5">
            {/* Note: Design file will be updated to reflect this NDPR requirement. */}
          </span>
        </label>
      </div>
      {errors.consent && (
        <p id="consent-error" className="text-sm text-red-400">
          {errors.consent.message}
        </p>
      )}

      {/* Submit button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-8 py-3 bg-gold text-near-black font-semibold rounded-md hover:brightness-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}