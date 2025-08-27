'use client';

import { motion } from 'framer-motion';
import Pagination from '@/components/project/pagination';
import ProjectCard from '@/components/project/projectCard';
import ProjectFilter from '@/components/project/ProjectFilters';
import useProjectFilters from '@/components/project/useProjectFilters';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useGetAllProjectsQuery } from '@/redux/features/project/projectApi';
import { FolderOpen, Search, Filter, Sparkles, Code, Globe, TrendingUp } from 'lucide-react';

const ProjectsPage = () => {
  const { category, setCategory, sortBy, setSortBy, currentPage, setCurrentPage, limit, getQueryParams } = useProjectFilters();

  const { isFetching, isLoading, isError, data, error } = useGetAllProjectsQuery(getQueryParams());
console.log(data);
  const ProjectsSkeleton = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {[...Array(limit)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-[400px] overflow-hidden">
            <div className="relative h-48 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse">
              <div className="absolute inset-0 shimmer"></div>
            </div>
            <CardContent className="p-6">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-4" />
              <Skeleton className="h-4 w-2/3 mb-4" />
              <div className="flex gap-2 mb-4">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-16" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-9 w-24" />
                <Skeleton className="h-9 w-20" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

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

  const stats = [
    { label: 'Total Projects', value: data?.meta?.total || 0, icon: FolderOpen, color: 'text-blue-500' },
    { label: 'Categories', value: 4, icon: Filter, color: 'text-green-500' },
    { label: 'Technologies', value: '15+', icon: Code, color: 'text-purple-500' },
    { label: 'Live Sites', value: data?.data?.filter(p => p.liveUrl).length || 0, icon: Globe, color: 'text-orange-500' },
  ];

  return (
    <div className="min-h-screen p-6 md:p-10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 floating"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20 floating" style={{animationDelay: '1s'}}></div>
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
            <FolderOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary">
            My Projects
          </h1>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore my portfolio of web applications, from e-commerce platforms to innovative dashboards. 
          Each project represents a unique challenge and creative solution.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={itemVariants}>
            <Card className="text-center hover-lift border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className={`text-2xl font-bold ${stat.color}`}>
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

      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold">Find Your Perfect Project</h2>
            </div>
            <ProjectFilter 
              category={category} 
              onCategoryChange={setCategory} 
              sortBy={sortBy} 
              onSortChange={setSortBy} 
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        {isFetching || isLoading ? (
          <ProjectsSkeleton />
        ) : isError || error ? (
          <motion.div variants={itemVariants}>
            <Card className="text-center p-12 border-2 border-red-200 dark:border-red-800">
              <CardContent>
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-red-700 dark:text-red-300">
                  Oops! Something went wrong
                </h3>
                <p className="text-muted-foreground">
                  We couldn&apos;t fetch the projects. Please try again later.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <>
            {data?.data?.length === 0 ? (
              <motion.div variants={itemVariants}>
                <Card className="text-center p-12 border-2 border-yellow-200 dark:border-yellow-800">
                  <CardContent>
                    <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                      <Search className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-700 dark:text-yellow-300">
                      No projects found
                    </h3>
                    <p className="text-muted-foreground">
                      Try adjusting your filters to see more projects.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {data?.data?.map((project, index) => (
                  <motion.div
                    key={project?._id}
                    variants={itemVariants}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}
      </motion.div>

      {/* Pagination */}
      {data?.data && data.data.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <Card className="p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-800">
            <CardContent className="p-0">
              <Pagination 
                currentPage={currentPage} 
                totalPages={data?.meta?.totalPage || 1} 
                onPageChange={setCurrentPage} 
              />
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-16"
      >
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Have a Project in Mind?</h3>
            </div>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to work on new challenges and bring innovative ideas to life. 
              Let&apos;s create something amazing together!
            </p>
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                Available for new projects
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
