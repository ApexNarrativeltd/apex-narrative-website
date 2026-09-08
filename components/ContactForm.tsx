"use client";

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { contactSchema, type ContactFormValues } from '@/lib/validations/contact';
import { SERVICE_TYPES } from '@/lib/constants';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      company: '',
      serviceInterest: '',
      message: '',
      consent: false,
    },
  });

  const resetTurnstile = () => {
    if (turnstileRef.current) {
      turnstileRef.current.reset();
    }
    setTurnstileToken(null);
  };

  const onSubmit = async (data: ContactFormValues) => {
    if (!turnstileToken) {
      setStatus('error');
      setSubmitMessage('Please complete the security check before submitting.');
      resetTurnstile();
      return;
    }

    setStatus('submitting');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          turnstileToken,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setSubmitMessage(result.message || "Thank you — we'll be in touch within 24 hours.");
        reset();
        resetTurnstile();
      } else {
        setStatus('error');
        setSubmitMessage(
          result.message || 'Something went wrong. Please try again later.'
        );
        resetTurnstile(); // reset on any error
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setSubmitMessage('Something went wrong. Please try again later.');
      resetTurnstile();
    }
  };

  const isButtonDisabled = isSubmitting || status === 'submitting' || !turnstileToken;
  const buttonLabel = status === 'submitting' ? 'Sending...' : 'Send Message';

  const handleTurnstileSuccess = (token: string) => {
    setTurnstileToken(token);
  };

  const handleTurnstileError = () => {
    resetTurnstile();
  };

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <div>
      {(status === 'success' || status === 'error') && (
        <div
          className={`p-4 rounded-md mb-6 ${
            status === 'success'
              ? 'bg-green-900/30 border border-green-500 text-green-200'
              : 'bg-red-900/30 border border-red-500 text-red-200'
          }`}
        >
          <p className="text-sm">{submitMessage}</p>
        </div>
      )}

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

        {/* Message */}
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

        {/* Cloudflare Turnstile */}
        {siteKey && (
          <div className="flex justify-center py-2">
            <Turnstile
              ref={turnstileRef}
              siteKey={siteKey}
              onSuccess={handleTurnstileSuccess}
              onError={handleTurnstileError}
              onExpire={handleTurnstileError}
              options={{
                theme: 'dark',
                size: 'normal',
              }}
            />
          </div>
        )}
        {!siteKey && (
          <p className="text-yellow-400 text-sm text-center">
            Security check not configured. Please contact support.
          </p>
        )}

        {/* Submit button */}
        <div>
          <button
            type="submit"
            disabled={isButtonDisabled}
            className="w-full md:w-auto px-8 py-3 bg-gold text-near-black font-semibold rounded-md hover:brightness-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black"
          >
            {buttonLabel}
          </button>
          {!turnstileToken && status !== 'submitting' && (
            <p className="text-xs text-cream/50 mt-2">
              Please complete the security check to submit.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}