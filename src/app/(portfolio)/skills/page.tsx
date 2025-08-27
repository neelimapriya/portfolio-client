'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Code, Database, Server, TrendingUp, Wrench } from 'lucide-react';

type Skill = {
  name: string;
  level: number; // 0-100
  category: string;
  icon?: string;
  color?: string;
};

const skillsData: Skill[] = [
  // Frontend
  { name: 'HTML', level: 95, category: 'Frontend', icon: '🌐', color: 'bg-orange-500' },
  { name: 'CSS', level: 90, category: 'Frontend', icon: '🎨', color: 'bg-blue-500' },
  { name: 'JavaScript', level: 88, category: 'Frontend', icon: '⚡', color: 'bg-yellow-500' },
  { name: 'TypeScript', level: 85, category: 'Frontend', icon: '📘', color: 'bg-blue-600' },
  { name: 'React.js', level: 92, category: 'Frontend', icon: '⚛️', color: 'bg-cyan-500' },
  { name: 'Next.js', level: 88, category: 'Frontend', icon: '🔺', color: 'bg-gray-800' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend', icon: '🌊', color: 'bg-teal-500' },
  { name: 'Material UI', level: 80, category: 'Frontend', icon: '🎭', color: 'bg-indigo-500' },
  { name: 'Shadcn UI', level: 85, category: 'Frontend', icon: '🛡️', color: 'bg-gray-700' },
  { name: 'Redux', level: 75, category: 'Frontend', icon: '🔄', color: 'bg-purple-600' },
  
  // Backend
  { name: 'Node.js', level: 80, category: 'Backend', icon: '🟢', color: 'bg-green-600' },
  { name: 'Express.js', level: 85, category: 'Backend', icon: '🚀', color: 'bg-gray-600' },
  { name: 'MongoDB', level: 82, category: 'Backend', icon: '🍃', color: 'bg-green-500' },
  { name: 'Mongoose', level: 80, category: 'Backend', icon: '🗄️', color: 'bg-red-600' },
  { name: 'PostgreSQL', level: 70, category: 'Backend', icon: '🐘', color: 'bg-blue-700' },
  { name: 'Prisma', level: 65, category: 'Backend', icon: '💎', color: 'bg-indigo-600' },
  { name: 'JWT', level: 85, category: 'Backend', icon: '🔐', color: 'bg-orange-600' },
  { name: 'RESTful APIs', level: 88, category: 'Backend', icon: '🌐', color: 'bg-green-700' },
  
  // Tools & Others
  { name: 'Git', level: 85, category: 'Tools', icon: '📚', color: 'bg-orange-700' },
  { name: 'GitHub', level: 88, category: 'Tools', icon: '🐙', color: 'bg-gray-800' },
  { name: 'Figma', level: 70, category: 'Tools', icon: '🎨', color: 'bg-pink-500' },
  { name: 'Postman', level: 80, category: 'Tools', icon: '📮', color: 'bg-orange-500' },
  { name: 'Vercel', level: 85, category: 'Tools', icon: '▲', color: 'bg-black' },
  { name: 'Netlify', level: 80, category: 'Tools', icon: '🌐', color: 'bg-teal-600' },
  { name: 'WordPress', level: 75, category: 'Tools', icon: '📝', color: 'bg-blue-800' },
];

const categories = [
  { name: 'Frontend', icon: Code, color: 'bg-blue-500', description: 'User Interface & Experience' },
  { name: 'Backend', icon: Server, color: 'bg-green-500', description: 'Server & Database Logic' },
  { name: 'Tools', icon: Wrench, color: 'bg-purple-500', description: 'Development & Deployment' },
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
      duration: 0.5,
    },
  },
};

const skillBarVariants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1.5,
      delay: 0.2,
    },
  }),
};

const SkillsPage = () => {
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
          Skills & Technologies
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of my technical expertise across frontend, backend, and development tools. 
          Each skill represents years of hands-on experience and continuous learning.
        </p>
      </motion.div>

      {/* Skills Overview Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {categories.map((category) => {
          const categorySkills = skillsData.filter(skill => skill.category === category.name);
          const avgLevel = Math.round(categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length);
          
          return (
            <motion.div key={category.name} variants={itemVariants}>
              <Card className="hover-lift border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{category.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-2xl font-bold text-green-500">{avgLevel}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Average Proficiency</p>
                  <Badge variant="secondary" className="mt-2">
                    {categorySkills.length} Skills
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Skills by Category */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {categories.map((category) => (
          <motion.div key={category.name} variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {category.name} Development
                  </CardTitle>
                </div>
                <p className="text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skillsData
                    .filter(skill => skill.category === category.name)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                          <motion.div
                            className={`h-2.5 rounded-full ${skill.color} relative overflow-hidden`}
                            variants={skillBarVariants}
                            custom={skill.level}
                            initial="hidden"
                            animate="visible"
                          >
                            <div className="absolute inset-0 shimmer"></div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12"
      >
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-6 h-6 text-yellow-500" />
              <CardTitle className="text-2xl font-bold">Additional Expertise</CardTitle>
            </div>
            <p className="text-muted-foreground">
              Other technologies and tools I work with regularly
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {[
                'SSLCOMMERZ', 'Stripe', 'ShurjoPay', 'Email.js', 'Nodemailer', 
                'Cookies', 'DBMS', 'SQL', 'Responsive Design', 'SEO', 'Performance Optimization'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-3 py-1 text-sm hover-lift cursor-pointer hover:bg-primary/20 transition-all duration-200"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-center mt-12"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover-lift cursor-pointer">
          <Database className="w-4 h-4" />
          <span>Ready to build something amazing together?</span>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
