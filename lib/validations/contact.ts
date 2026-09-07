import { z } from 'zod';
import { SERVICE_TYPES } from '@/lib/constants';

// Zod schema for the contact form – shared client/server
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company / Organization is required'),
  serviceInterest: z
    .string()
    .refine((val) => SERVICE_TYPES.includes(val as any), {
      message: 'Please select a valid service',
    }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy to submit',
  }),
});

// TypeScript type inferred from the schema
export type ContactFormValues = z.infer<typeof contactSchema>;