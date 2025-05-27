import ContactForm from '@/components/contact/contactForm';
import { FormData } from '@/types/contact.type';
import { Mail, PhoneIcon } from 'lucide-react';
import nodemailer from 'nodemailer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const sendMail = async (formData: FormData) => {
    'use server';
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
        subject: '',
        text: formData.message,
        html: '',
      };
      // send mail
      await transporter.sendMail(mailOptions);
      return {
        success: true,
        error: null,
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return {
        success: false,
        error: 'Oops! an error occurred!',
      };
    }
  };
  return (
    <div className="flex flex-col md:flex-row w-full md:mt-5 gap-6">
      <div className="w-full md:w-1/2">
        <h2 className="text-md md:text-xl lg:text-2xl font-medium">Let&apos;s Get Connected</h2>
        <ContactForm sendMail={sendMail} />
      </div>
      <div className="w-full md:w-1/2">
        <Button className="dark:text-black font-mono w-full bg-[#669bd2]" asChild>
          <a href="mailto:neelimasultana6@gmail.com">
            <Mail />
            <h2>neelimasultana6@gmail.com</h2>
          </a>
        </Button>

        <figure className="mb-4 mt-8 overflow-hidden rounded-2xl h-50 relative">
          <Image src="/mail.png" className="object-cover" alt="mail" fill />
        </figure>

        <div className="flex flex-col  lg:flex-row justify-between text-sm pt-2">
          <div className="flex gap-4 font-semibold justify-between">
            <a href="https://github.com/neelimapriya" target="_blank">
              Github
            </a>
            <a href="https://www.facebook.com/Neelim.priya/" target="_blank">
              Facebook
            </a>
            <a href="www.linkedin.com/in/nelima-sultana-7b4280298" target="_blank">
              LinkedIn
            </a>
          </div>
          <a href="tel:+8801882277032" className="font-semibold text-center mt-2 lg:mt-0 hover:text-primary flex items-center gap-2">
            <PhoneIcon className="size-4" /> +880 1882277032
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
