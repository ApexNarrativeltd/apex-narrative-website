import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validations/contact';
import { checkRateLimit } from '@/lib/rate-limit';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Cloudflare Turnstile verification endpoint
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export async function POST(request: NextRequest) {
  try {
    // --- Step 1: Rate Limiting (IP-based) ---
    // Get the client IP from standard headers (Vercel uses x-forwarded-for)
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor?.split(',')[0]?.trim() || 'anonymous';

    const rateLimitResult = checkRateLimit(ip);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: 'RATE_LIMITED',
          message: 'Too many requests. Please try again later.',
        },
        { status: 429 }
      );
    }

    // --- Step 2: Turnstile Verification ---
    const body = await request.json();
    const { turnstileToken, ...formData } = body;

    if (!turnstileToken) {
      return NextResponse.json(
        {
          success: false,
          error: 'SPAM_CHECK_FAILED',
          message: 'Security check failed. Please complete the verification.',
        },
        { status: 400 }
      );
    }

    // Verify the token with Cloudflare
    const verifyFormData = new URLSearchParams();
    verifyFormData.append('secret', process.env.TURNSTILE_SECRET_KEY || '');
    verifyFormData.append('response', turnstileToken);
    // Optionally pass the client IP for better spam detection
    if (ip !== 'anonymous') {
      verifyFormData.append('remoteip', ip);
    }

    const verifyResponse = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: verifyFormData,
    });

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      console.warn('Turnstile verification failed:', verifyData);
      return NextResponse.json(
        {
          success: false,
          error: 'SPAM_CHECK_FAILED',
          message: 'Security check failed. Please try again.',
        },
        { status: 400 }
      );
    }

    // --- Step 3: Zod Validation (server-side) ---
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_ERROR',
          message: 'Please check your input and try again.',
        },
        { status: 422 }
      );
    }

    const { name, email, company, serviceInterest, message } = result.data;

    // --- Step 4: Send emails via Resend ---
    const subject = `New Contact Enquiry from ${name} – ${serviceInterest}`;
    const emailText = `
Name: ${name}
Email: ${email}
Company: ${company}
Service Interest: ${serviceInterest}
Message:
${message}
    `;

    const emailHtml = `
      <h2>New Contact Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Service Interest:</strong> ${serviceInterest}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `;

    const confirmSubject = `Thank you for contacting Apex Narrative!`;
    const confirmText = `
Dear ${name},

Thank you for reaching out to Apex Narrative. We have received your enquiry regarding ${serviceInterest} and will get back to you within 24 hours.

We look forward to speaking with you!

Best regards,
Apex Narrative Team
    `;

    const confirmHtml = `
      <h2>Thank you, ${name}!</h2>
      <p>We have received your enquiry regarding <strong>${serviceInterest}</strong> and will get back to you within 24 hours.</p>
      <p>We look forward to speaking with you!</p>
      <br />
      <p><strong>Apex Narrative Team</strong></p>
      <p style="color: #666; font-size: 14px;">We help brands tell better stories.</p>
    `;

    const fromAddress = process.env.EMAIL_FROM_ADDRESS || 'onboarding@resend.dev';
    const notificationRecipient = process.env.CONTACT_NOTIFICATION_EMAIL || 'hello@apexnarrativeltd.com';

    const notificationResult = await resend.emails.send({
      from: fromAddress,
      to: notificationRecipient,
      subject: subject,
      text: emailText,
      html: emailHtml,
    });

    const confirmationResult = await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: confirmSubject,
      text: confirmText,
      html: confirmHtml,
    });

    if (notificationResult.error || confirmationResult.error) {
      console.error('Resend error:', notificationResult.error || confirmationResult.error);
      return NextResponse.json(
        {
          success: false,
          error: 'EMAIL_SEND_FAILED',
          message: 'We could not send your email at this time. Please try again later.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you — we'll be in touch within 24 hours.",
    });

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'SERVER_ERROR',
        message: 'Something went wrong. Please try again later.',
      },
      { status: 500 }
    );
  }
}