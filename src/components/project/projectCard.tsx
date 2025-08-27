'use client';

import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { TProject } from "@/types/project.type";
import { ExternalLink, Globe, Github, Calendar, User, Code2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: TProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="group"
    >
      <Card className="h-full overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-500 hover-lift shadow-lg hover:shadow-2xl hover:shadow-purple-500/20">
        <CardHeader className="p-0 relative overflow-hidden">
          <div className="relative h-48 w-full">
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="w-full h-full"
            >
              <Image
                src={project?.image || "/placeholder.svg"}
                alt={project?.title || "Project Image"}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
                loading="eager"
                className="object-cover"
              />
            </motion.div>
            
            {/* Gradient Overlay */}
            <motion.div 
              variants={overlayVariants}
              initial="hidden"
              whileHover="visible"
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            />

            {/* Category Badge */}
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-white/90 text-black text-xs font-medium px-3 py-1 border-0 shadow-md backdrop-blur-sm">
                <Code2 className="w-3 h-3 mr-1" />
                {project?.category}
              </Badge>
            </div>

            {/* Quick Action Buttons - Visible on Hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100"
            >
              {project?.liveUrl && (
                <Button
                  size="sm"
                  className="bg-white/90 text-black hover:bg-white border-0 shadow-md backdrop-blur-sm flex-1"
                  asChild
                >
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="w-3 h-3 mr-1" />
                    Live
                  </Link>
                </Button>
              )}
              {project?.githubClientUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-white/90 border-white/20 text-black hover:bg-white shadow-md backdrop-blur-sm"
                  asChild
                >
                  <Link href={project.githubClientUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3 h-3" />
                  </Link>
                </Button>
              )}
            </motion.div>
          </div>
        </CardHeader>

        <CardContent className="p-6 flex-grow">
          <div className="space-y-4">
            {/* Title */}
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              {project?.title}
            </CardTitle>

            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {project?.subtitle}
            </p>

            {/* Technologies */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Technologies</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {project?.technologies?.split(',').slice(0, 3).map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-0"
                  >
                    {tech.trim()}
                  </Badge>
                ))}
                {project?.technologies?.split(',').length > 3 && (
                  <Badge
                    variant="secondary"
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border-0"
                  >
                    +{project?.technologies?.split(',').length - 3} more
                  </Badge>
                )}
              </div>
            </div>

            {/* Meta Information */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{new Date(project?.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                <span>{project?.createdBy?.name}</span>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 border-t border-gray-100 dark:border-gray-800">
          <div className="flex justify-between w-full items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-900/20 transition-all duration-300"
              asChild
            >
              <Link href={`/projects/${project?._id}`}>
                <ExternalLink className="w-4 h-4 mr-2" />
                View Details
              </Link>
            </Button>

            {project?.liveUrl && (
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
                asChild
              >
                <Link href={project?.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4 mr-2" />
                  Live Site
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>

        {/* Decorative Elements */}
        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
