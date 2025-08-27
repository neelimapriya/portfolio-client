'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/contact/contactForm';
import { Mail, PhoneIcon, MapPin, Clock, Send, MessageCircle, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { sendMail } from './actions';
import Image from 'next/image';
import Link from 'next/link';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'neelimasultana6@gmail.com',
    href: 'mailto:neelimasultana6@gmail.com',
    color: 'bg-blue-500',
    description: 'Send me an email anytime'
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '+880 1882277032',
    href: 'tel:+8801882277032',
    color: 'bg-green-500',
    description: 'Call me for quick discussions'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: null,
    color: 'bg-purple-500',
    description: 'Available for remote work'
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: '24 hours',
    href: null,
    color: 'bg-orange-500',
    description: 'I usually respond within a day'
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/neelimapriya',
    icon: '🐙',
    color: 'hover:text-gray-900 dark:hover:text-gray-100'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nelima-sultana-7b4280298',
    icon: '💼',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Neelim.priya/',
    icon: '📘',
    color: 'hover:text-blue-700'
  },
];

const stats = [
  { label: 'Response Rate', value: '100%', icon: MessageCircle },
  { label: 'Happy Clients', value: '10+', icon: Users },
  { label: 'Projects Delivered', value: '25+', icon: Send },
  { label: 'Countries Served', value: '3+', icon: Globe },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const ContactPage = () => {
  return (
    <div className="min-h-screen p-6 md:p-10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 floating"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 floating" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary">
            Get In Touch
          </h1>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Have a project in mind? Want to collaborate? Or just want to say hello? 
          I&apos;d love to hear from you. Let&apos;s create something amazing together!
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={itemVariants}>
            <Card className="text-center hover-lift border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="w-5 h-5 text-purple-600" />
                  <span className="text-2xl font-bold text-gradient-primary">
                    {stat.value}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <Card className="h-full hover-lift border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-purple-600" />
                Send Me a Message
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <ContactForm sendMail={sendMail} />
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info & Image */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Contact Information */}
          <Card className="hover-lift border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <PhoneIcon className="w-6 h-6 text-green-600" />
                Contact Information
              </CardTitle>
              <p className="text-muted-foreground">
                Here are the best ways to reach me
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                >
                  <div className={`w-12 h-12 rounded-full ${info.color} flex items-center justify-center`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <Link href={info.href} className="text-lg font-semibold text-primary hover:underline">
                        {info.value}
                      </Link>
                    ) : (
                      <p className="text-lg font-semibold">{info.value}</p>
                    )}
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Email Button */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 hover-lift">
            <CardContent className="p-6">
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Quick Email</h3>
                <p className="text-sm opacity-90 mb-4">
                  Prefer email? Send me a message directly
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full hover-lift" 
                  asChild
                >
                  <Link href="mailto:neelimasultana6@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Image */}
          <Card className="overflow-hidden hover-lift border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                <Image 
                  src="/mail.png" 
                  alt="Contact illustration" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-white/90 text-black font-medium">
                    <Clock className="w-3 h-3 mr-1" />
                    Usually responds within 24 hours
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12"
      >
        <Card className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Let&apos;s Connect
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Find me on social media and let&apos;s build something great together
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    className={`flex flex-col items-center gap-2 p-6 h-auto hover-lift ${social.color}`}
                    asChild
                  >
                    <Link href={social.url} target="_blank" rel="noopener noreferrer">
                      <span className="text-2xl">{social.icon}</span>
                      <span className="text-sm font-medium">{social.name}</span>
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Availability Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center"
      >
        <Card className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 inline-block">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                Available for new projects
              </span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactPage;
