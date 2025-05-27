'use client';

import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { FormData } from '@/types/contact.type';
import { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const ContactForm = ({ sendMail }: { sendMail: (formData: FormData) => Promise<{ success: boolean; error: string | null }> }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const onSubmit = async (formData: FormData) => {
    const res = await sendMail(formData);
    if (res.success) {
      setShowSuccessMessage(true);
      reset();
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showSuccessMessage) {
      timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [showSuccessMessage]);
  return (
    <div className="max-w-md mx-auto py-6">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input required type="text" placeholder="Name" id="name" {...register('name')} className="h-12" />
          {errors.name && <span className="text-red-500 text-xl font-bold">{errors.name.message}</span>}
        </div>
        <div>
          <Input required type="email" placeholder="Email" id="email" {...register('email')} className="h-12" />
          {errors.email && <span className="text-red-500 text-xl font-bold">{errors.email.message}</span>}
        </div>
        <div>
          <Textarea required placeholder="Message" id="message" {...register('message')} />
          {errors.message && <span className="text-red-500 text-xl font-bold">{errors.message.message}</span>}
        </div>
        <div>
          <Button type="submit" size="lg" className="w-full dark:text-black rounded-full">
            {isSubmitting ? 'Processing' : 'Submit'}
          </Button>
        </div>
        {showSuccessMessage && <p className="text-green-600 font-semibold text-center mt-2">Message sent successfully!</p>}
      </form>
    </div>
  );
};

export default ContactForm;
