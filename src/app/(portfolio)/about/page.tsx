'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LinkIcon, GraduationCap, Code, Award, Heart, Coffee, Target, Users, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const educationData = [
  {
    degree: 'Next Level Web Development 2.0 [Batch-4]',
    institution: 'Programming Hero',
    year: '2025',
    type: 'Professional',
    description: 'Advanced full-stack development with modern technologies',
    certificate: 'https://drive.google.com/file/d/1pysCVgCPRjfw9lMNKalA4f3R2DxtQxeX/view?usp=sharing',
    icon: '🚀',
    color: 'bg-purple-500'
  },
  {
    degree: 'Complete Web Development Course [Batch-8]',
    institution: 'Programming Hero',
    year: '2023',
    type: 'Professional',
    description: 'Comprehensive web development fundamentals and advanced concepts',
    certificate: 'https://drive.google.com/file/d/1fqcI48v-kt7o47nTRu4oyOdXBx-HBIua/view?usp=sharing',
    icon: '💻',
    color: 'bg-blue-500'
  },
  {
    degree: 'Bachelor of Science in Zoology',
    institution: 'National University',
    year: '2018 – 2024',
    type: 'Academic',
    description: 'Scientific research and analytical thinking foundation',
    certificate: null,
    icon: '🔬',
    color: 'bg-green-500'
  },
];

const personalStats = [
  { label: 'Years of Experience', value: '2+', icon: Code },
  { label: 'Projects Completed', value: '25+', icon: Award },
  { label: 'Technologies Mastered', value: '15+', icon: Lightbulb },
  { label: 'Happy Clients', value: '10+', icon: Users },
];

const interests = [
  { name: 'Problem Solving', icon: '🧩', color: 'bg-blue-100 text-blue-700' },
  { name: 'UI/UX Design', icon: '🎨', color: 'bg-pink-100 text-pink-700' },
  { name: 'Open Source', icon: '📚', color: 'bg-green-100 text-green-700' },
  { name: 'Tech Trends', icon: '🔍', color: 'bg-purple-100 text-purple-700' },
  { name: 'Continuous Learning', icon: '📖', color: 'bg-yellow-100 text-yellow-700' },
  { name: 'Team Collaboration', icon: '👥', color: 'bg-indigo-100 text-indigo-700' },
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

const AboutPage = () => {
  return (
    <div className="min-h-screen p-6 md:p-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-4">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Get to know the person behind the code - my journey, passion, and what drives me to create amazing digital experiences.
        </p>
      </motion.div>

      {/* Personal Introduction */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-16"
      >
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden hover-lift">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-purple-200 dark:border-purple-800 shadow-2xl">
                  <Image
                    src="/assets/myPicture.jpg"
                    alt="Nelima Sultana"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4">
                    Hi, I&apos;m <span className="text-gradient-warm">Nelima Sultana</span>
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      As a <span className="text-primary font-semibold">Full Stack Web Developer</span>, I specialize in creating 
                      dynamic, responsive, and user-friendly web applications from concept to deployment.
                    </p>
                    <p>
                      My expertise spans across modern frontend technologies like <span className="text-primary font-semibold">React, Next.js, and TypeScript</span>, 
                      to robust backend systems built with <span className="text-primary font-semibold">Node.js, Express, and MongoDB</span>.
                    </p>
                    <p>
                      I&apos;m passionate about writing clean, scalable code and creating seamless user experiences that solve real-world problems.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={interest.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge className={`${interest.color} px-3 py-1 text-sm hover-lift cursor-pointer`}>
                          <span className="mr-1">{interest.icon}</span>
                          {interest.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {personalStats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card className="text-center hover-lift border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gradient-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-16"
      >
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <GraduationCap className="w-8 h-8 text-purple-600" />
            Educational Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            My learning path that shaped my development career
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 hidden md:block"></div>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="hover-lift border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-full ${edu.color} flex items-center justify-center text-white text-lg`}>
                          {edu.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-primary">
                            {edu.degree}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {edu.institution} • {edu.year}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{edu.type}</Badge>
                        {edu.certificate && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={edu.certificate} target="_blank" rel="noopener noreferrer">
                              <LinkIcon className="w-4 h-4 mr-2" />
                              View Certificate
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden md:block w-4 h-4 rounded-full bg-white border-4 border-purple-600 z-10"></div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Philosophy */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-16"
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                <Heart className="w-6 h-6 text-red-500" />
                My Development Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">User-Centric Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Every line of code should enhance the user experience and solve real problems.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <Code className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Clean & Scalable Code</h3>
                  <p className="text-sm text-muted-foreground">
                    Writing maintainable, efficient code that stands the test of time.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                    <Coffee className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Continuous Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Staying updated with the latest technologies and best practices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-lg opacity-90 mb-6">
              Let&apos;s build something amazing together. I&apos;m always excited to take on new challenges and create innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="hover-lift">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover-lift border-white text-white hover:bg-white hover:text-purple-600">
                <Link href="/projects">
                  View My Work
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AboutPage;
