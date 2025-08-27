'use server';

import nodemailer from 'nodemailer';
import { FormData } from '@/types/contact.type';

export async function sendMail(formData: FormData) {
  try {
    // nodemailer setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    const mailOptions = {
      from: formData.email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${formData.name}`,
      text: formData.message,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">New Contact Form Message</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea;">${formData.message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
    };
    
    // send mail
    await transporter.sendMail(mailOptions);
    return {
      success: true,
      error: null,
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      error: 'Sorry, there was an error sending your message. Please try again later.',
    };
  }
} 