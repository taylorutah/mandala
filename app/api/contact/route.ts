// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { firstName = '', lastName = '', company = '', email = '', message = '' } = await req.json();

    const fullName = `${firstName} ${lastName}`.trim() || 'Unknown';
    const submittedAt = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short',
    });

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin:0; padding:20px; background:#f9f9fb; color:#000; }
          .container { max-width:600px; margin:0 auto; background:#fff; padding:32px; border:1px solid #e0e0e0; border-radius:8px; }
          .label { font-weight:600; margin-top:16px; display:block; }
          .value { margin-top:4px; line-height:1.6; }
          .value a { color:#000; text-decoration:underline; }
          .message { margin-top:16px; white-space:pre-wrap; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="label">Name:</div>
          <div class="value">${fullName}</div>

          <div class="label">Company:</div>
          <div class="value">${company || '—'}</div>

          <div class="label">Email:</div>
          <div class="value"><a href="mailto:${email}">${email}</a></div>

          <div class="label">Submitted:</div>
          <div class="value">${submittedAt}</div>

          <div class="label">Message:</div>
          <div class="message">${message.replace(/\n/g, '<br>')}</div>
        </div>
      </body>
      </html>
    `;

    const text = `Name: ${fullName}\nCompany: ${company || '—'}\nEmail: ${email}\nSubmitted: ${submittedAt}\n\nMessage:\n${message}`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'NAPCO Contact <no-reply@resend.dev>',
        to: 'taylor@napcopumps.com',
        reply_to: email,
        subject: `Lead: ${fullName}`,
        html,
        text
      })
    });

    if (!res.ok) throw new Error(await res.text());
    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}