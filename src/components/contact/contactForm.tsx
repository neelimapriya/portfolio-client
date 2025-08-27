'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { FormData } from '@/types/contact.type';
import { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare } from 'lucide-react';

const ContactForm = ({ sendMail }: { sendMail: (formData: FormData) => Promise<{ success: boolean; error: string | null }> }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
      setShowErrorMessage(false);
      reset();
    } else {
      setShowErrorMessage(true);
      setErrorMessage(res.error || 'Something went wrong');
      setShowSuccessMessage(false);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showSuccessMessage || showErrorMessage) {
      timer = setTimeout(() => {
        setShowSuccessMessage(false);
        setShowErrorMessage(false);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [showSuccessMessage, showErrorMessage]);

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md mx-auto"
    >
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <motion.div variants={itemVariants} className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
            <User className="w-4 h-4 text-purple-500" />
            Full Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            {...register('name', { required: 'Name is required' })}
            className={`h-12 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
              errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
            }`}
          />
          {errors.name && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-red-500 text-sm"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.name.message}
            </motion.div>
          )}
        </motion.div>

        {/* Email Field */}
        <motion.div variants={itemVariants} className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
            <Mail className="w-4 h-4 text-purple-500" />
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address'
              }
            })}
            className={`h-12 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
              errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
            }`}
          />
          {errors.email && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-red-500 text-sm"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.email.message}
            </motion.div>
          )}
        </motion.div>

        {/* Message Field */}
        <motion.div variants={itemVariants} className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-purple-500" />
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Tell me about your project or just say hello..."
            rows={5}
            {...register('message', { 
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters'
              }
            })}
            className={`resize-none transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
              errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
            }`}
          />
          {errors.message && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-red-500 text-sm"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.message.message}
            </motion.div>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={itemVariants}>
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
          >
            {isSubmitting ? (
              <>
                <div className="loading-dots mr-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                <span>Send Message</span>
              </>
            )}
          </Button>
        </motion.div>

        {/* Success Message */}
        {showSuccessMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              <p className="text-green-800 dark:text-green-300 font-medium">
                Message sent successfully!
              </p>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              Thank you for reaching out. I&apos;ll get back to you soon.
            </p>
          </motion.div>
        )}

        {/* Error Message */}
        {showErrorMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              <p className="text-red-800 dark:text-red-300 font-medium">
                Failed to send message
              </p>
            </div>
            <p className="text-sm text-red-600 dark:text-red-400 mt-1">
              {errorMessage}
            </p>
          </motion.div>
        )}
      </form>

      {/* Additional Info */}
      <motion.div
        variants={itemVariants}
        className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <p className="text-sm text-muted-foreground text-center">
          <span className="font-medium">Privacy:</span> Your information is safe with me and will only be used to respond to your message.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
