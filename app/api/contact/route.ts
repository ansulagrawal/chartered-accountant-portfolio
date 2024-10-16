import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, message } = body;

  // Here you would typically use a service like SendGrid, Mailgun, or AWS SES to send an email
  // For this example, we'll just log the data and return a success response
  console.log('Contact form submission:', { name, email, phone, message });

  // Simulate sending an email
  await new Promise(resolve => setTimeout(resolve, 1000));

  return NextResponse.json({ message: 'Message sent successfully' });
}