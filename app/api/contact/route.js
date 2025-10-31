import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting (token bucket per IP)
const rateLimitMap = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 5;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  const record = rateLimitMap.get(ip);

  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + windowMs;
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

// Verify reCAPTCHA token
async function verifyRecaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET;
  if (!secret) {
    return { ok: false, reason: 'Missing server secret' };
  }

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
      cache: 'no-store',
    });

    const data = await res.json();
    return { ok: !!data.success, score: data.score ?? 0, action: data.action };
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { ok: false, reason: 'Verification failed' };
  }
}

// Sanitize HTML to prevent XSS
function sanitizeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

export async function POST(request) {
  try {
    // Get client IP
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { ok: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message, recaptchaToken, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ ok: false, message: 'Spam detected' }, { status: 400 });
    }

    // Validation
    if (!name || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { ok: false, message: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10 || message.trim().length > 2000) {
      return NextResponse.json(
        { ok: false, message: 'Message must be between 10 and 2000 characters' },
        { status: 400 }
      );
    }

    // reCAPTCHA verification
    if (recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken);
      if (!recaptchaResult.ok || recaptchaResult.score < 0.5) {
        return NextResponse.json(
          { ok: false, message: 'reCAPTCHA verification failed. Please try again.' },
          { status: 400 }
        );
      }
    }

    // Email configuration
    const emailAddress = process.env.EMAIL_ADDRESS;
    const gmailPasskey = process.env.GMAIL_PASSKEY;

    if (!emailAddress || !gmailPasskey) {
      console.error('Missing email configuration');
      return NextResponse.json(
        { ok: false, message: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailAddress,
        pass: gmailPasskey,
      },
    });

    // Sanitize inputs
    const safeName = sanitizeHtml(name.trim());
    const safeEmail = sanitizeHtml(email.trim());
    const safeMessage = sanitizeHtml(message.trim());

    // HTML email template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #00ffff;">New Contact Form Submission</h2>
            <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Name:</strong> ${safeName}</p>
              <p><strong>Email:</strong> ${safeEmail}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${safeMessage}</p>
            </div>
            <p style="color: #666; font-size: 12px;">
              This email was sent from the portfolio contact form.
            </p>
          </div>
        </body>
      </html>
    `;

    const textTemplate = `
New Contact Form Submission

Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}
    `;

    // Send email
    await transporter.sendMail({
      from: emailAddress,
      to: emailAddress,
      replyTo: email.trim(),
      subject: `Portfolio Contact: ${name.trim()}`,
      text: textTemplate,
      html: htmlTemplate,
    });

    // Optional: Send Telegram notification
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramBotToken && telegramChatId) {
      try {
        await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: `📧 New contact form submission from ${name.trim()} (${email.trim()})`,
          }),
        });
      } catch (error) {
        console.error('Telegram notification failed:', error);
        // Don't fail the request if Telegram fails
      }
    }

    return NextResponse.json({
      ok: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { ok: false, message: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
