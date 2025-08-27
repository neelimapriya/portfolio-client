'use client';

import Image from 'next/image';
import Img from '@/assets/myPicture.jpg';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Download, Github, Linkedin, Facebook, Instagram, ArrowRight, Sparkles, Code, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Full Stack Developer',
    'React.js Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Node.js Developer'
  ];

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '🔺' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' }
  ];

  const cvFileName = '';
  const cvPath = `/cv/${cvFileName}`;
  const driveLink = 'https://docs.google.com/document/d/1hE45ZDo4GjpEbz3qUxrjtcFZMpV-EWxNj0aEfI1UL-g/edit?usp=sharing';

  // Auto-rotate roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(cvPath, { method: 'HEAD' });
      if (response.ok) {
        const link = document.createElement('a');
        link.href = cvPath;
        link.setAttribute('download', cvFileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(driveLink, '_blank');
      }
    } catch (error) {
      console.error('Download error:', error);
      window.open(driveLink, '_blank');
    } finally {
      setTimeout(() => setIsDownloading(false), 1500);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const skillsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900/50 dark:via-gray-800/30 dark:to-gray-900/50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-20 floating"></div>
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-gradient-to-r from-pink-400 to-red-600 opacity-20 floating" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-blue-600 opacity-20 floating" style={{animationDelay: '2s'}}></div>
      
      {/* Main Content */}
      <section className="relative z-10 flex flex-col-reverse md:flex-row items-center min-h-screen gap-8 md:gap-16 justify-center px-4 md:px-8">
        <motion.div 
          className="space-y-6 max-w-2xl text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 justify-center md:justify-start">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium text-muted-foreground">Hello there, I&apos;m</span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient-primary leading-tight"
          >
            Nelima Sultana
          </motion.h1>

          {/* Role with Animation */}
          <motion.div variants={itemVariants} className="h-16 md:h-20 flex items-center justify-center md:justify-start">
            <div className="relative">
              <motion.p 
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl md:text-3xl font-semibold text-primary"
              >
                {roles[currentRole]}
              </motion.p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I craft <span className="text-gradient-warm font-semibold">modern web applications</span> with cutting-edge technologies, 
              focusing on performance, scalability, and exceptional user experiences.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Passionate about transforming ideas into reality through clean code and innovative solutions. 
              From startups to enterprise applications, I build digital experiences that matter.
            </p>
          </motion.div>

          {/* Skills Pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center md:justify-start">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillsVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <Badge 
                  variant="secondary" 
                  className="hover-lift px-3 py-1 text-sm font-medium glass hover:bg-primary/20 transition-all duration-300"
                >
                  <span className="mr-1">{skill.icon}</span>
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <Button 
              size="lg" 
              className="cursor-pointer hover-lift bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg" 
              onClick={handleDownloadCV} 
              disabled={isDownloading}
            >
              {isDownloading ? (
                <>
                  <div className="loading-dots">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <span className="ml-2">Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </>
              )}
            </Button>
            
            <Button size="lg" variant="outline" asChild className="hover-lift border-2 border-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/projects" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-4 mt-8">
            <SocialButton 
              name="Github" 
              href="https://github.com/neelimapriya" 
              icon={<Github className="w-4 h-4" />}
              className="hover:text-gray-900 dark:hover:text-gray-100"
            />
            <SocialButton 
              name="LinkedIn" 
              href="https://www.linkedin.com/in/nelima-sultana-7b4280298" 
              icon={<Linkedin className="w-4 h-4" />}
              className="hover:text-blue-600"
            />
            <SocialButton 
              name="Facebook" 
              href="https://www.facebook.com/Neelim.priya/" 
              icon={<Facebook className="w-4 h-4" />}
              className="hover:text-blue-700"
            />
            <SocialButton 
              name="Instagram" 
              href="https://www.instagram.com/neelim_priya" 
              icon={<Instagram className="w-4 h-4" />}
              className="hover:text-pink-600"
            />
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 100 }} 
          animate={{ opacity: 1, scale: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-80 h-96 md:w-96 md:h-[500px] group">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500 hover-lift">
              <Image 
                src={Img} 
                alt="Nelima Sultana" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                priority
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-white/90 text-black font-medium">
                  <Zap className="w-3 h-3 mr-1" />
                  Available for work
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

type SocialButtonProps = {
  name: string;
  href: string;
  icon: React.ReactNode;
  className?: string;
};

function SocialButton({ name, href, icon, className = '' }: SocialButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button 
        variant="ghost" 
        size="sm"
        className={`hover-lift p-3 rounded-full transition-all duration-300 ${className}`}
        asChild
      >
        <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
          {icon}
        </Link>
      </Button>
    </motion.div>
  );
}
