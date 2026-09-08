"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormValues } from '@/lib/validations/contact';
import { SERVICE_TYPES } from '@/lib/constants';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    watch,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur', // validates on blur and on submit
    defaultValues: {
      name: '',
      email: '',
      company: '',
      serviceInterest: '',
      message: '',
      consent: false,
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // Batch 2: only log – no API call yet
    // eslint-disable-next-line no-console
    console.log('Form data (valid):', data);
    // Optionally reset after successful submit:
    // reset();
  };

  // Check if any field has been touched (for error display logic)
  // We'll show errors only if field was touched or form was submitted
  const showError = (fieldName: keyof ContactFormValues) => {
    // We'll rely on errors object – it's populated on submit and on blur (thanks to mode: 'onBlur')
    return errors[fieldName];
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
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full px-4 py-2 bg-cream/5 border rounded-md text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition ${
            errors.name ? 'border-red-400' : 'border-cream/20'
          }`}
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
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full px-4 py-2 bg-cream/5 border rounded-md text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition ${
            errors.email ? 'border-red-400' : 'border-cream/20'
          }`}
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
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? 'company-error' : undefined}
          className={`w-full px-4 py-2 bg-cream/5 border rounded-md text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition ${
            errors.company ? 'border-red-400' : 'border-cream/20'
          }`}
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
          aria-invalid={!!errors.serviceInterest}
          aria-describedby={errors.serviceInterest ? 'interest-error' : undefined}
          className={`w-full px-4 py-2 bg-cream/5 border rounded-md text-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition ${
            errors.serviceInterest ? 'border-red-400' : 'border-cream/20'
          }`}
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

      {/* Project Description */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-cream/80 mb-1">
          Project Description
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-2 bg-cream/5 border rounded-md text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition resize-y ${
            errors.message ? 'border-red-400' : 'border-cream/20'
          }`}
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
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? 'consent-error' : undefined}
          className={`mt-1 w-4 h-4 text-gold bg-cream/5 border rounded focus:ring-gold focus:ring-2 focus:ring-offset-1 focus:ring-offset-near-black ${
            errors.consent ? 'border-red-400' : 'border-cream/20'
          }`}
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