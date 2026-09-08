import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validations/contact';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming JSON body
    const body = await request.json();

    // Server-side validation using the shared Zod schema
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      // Return validation errors with 422 status
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_ERROR',
          message: 'Please check your input and try again.',
          // Optionally include details for debugging (but don't expose in production)
          // details: result.error.flatten(),
        },
        { status: 422 }
      );
    }

    const { name, email, company, serviceInterest, message } = result.data;

    // Build the email content
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

    // Auto-confirmation content
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

    // Send notification email to Apex Narrative
    const notificationResult = await resend.emails.send({
      from: fromAddress,
      to: 'hello@apexnarrativeltd.com',
      subject: subject,
      text: emailText,
      html: emailHtml,
    });

    // Send auto-confirmation email to the visitor
    const confirmationResult = await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: confirmSubject,
      text: confirmText,
      html: confirmHtml,
    });

    // Check if both emails were sent successfully
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

    // Success response – matches the API & Integration documentation
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