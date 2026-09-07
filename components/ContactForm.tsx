"use client";

import { useState } from "react";

const serviceOptions = [
  "Real Estate Media",
  "Brand & Marketing Films",
  "Event Coverage",
  "Social Media Content Packages",
];

export default function ContactForm() {
  // Simple local state for the static layout – will be replaced with React Hook Form in Batch 2
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No validation or API call yet – static layout only
    // eslint-disable-next-line no-console
    console.log("Form submitted (static shell):", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-cream/80 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-cream/5 border border-cream/20 rounded-md text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
          placeholder="e.g. John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-cream/80 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-cream/5 border border-cream/20 rounded-md text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
          placeholder="e.g. john@example.com"
        />
      </div>

      {/* Company/Organization */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-cream/80 mb-1">
          Company / Organization
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-cream/5 border border-cream/20 rounded-md text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
          placeholder="e.g. ABC Realty"
        />
      </div>

      {/* Interest (dropdown) */}
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-cream/80 mb-1">
          Service of Interest
        </label>
        <select
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-cream/5 border border-cream/20 rounded-md text-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-near-black">
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Project Description */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-cream/80 mb-1">
          Project Description
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-cream/5 border border-cream/20 rounded-md text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition resize-y"
          placeholder="Tell us about your project, goals, and timeline..."
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
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

      {/* Submit button */}
      <div>
        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-gold text-near-black font-semibold rounded-md hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-near-black"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}