"use client";

import Pagination from "@/components/project/pagination";
import ProjectCard from "@/components/project/projectCard";
import ProjectFilter from "@/components/project/ProjectFilters";
import useProjectFilters from "@/components/project/useProjectFilters";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllProjectsQuery } from "@/redux/features/project/projectApi";

const ProjectsPage = () => {
  const {
    category,
    setCategory,
    sortBy,
    setSortBy,
    currentPage,
    setCurrentPage,
    limit,
    getQueryParams,
  } = useProjectFilters();

  const { isFetching, isLoading, isError, data, error } = useGetAllProjectsQuery(getQueryParams());

  const ProjectsSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(limit)].map((_, index) => (
        <Skeleton key={index} className="h-[400px] w-full rounded-xl bg-[#1e1e1e]" />
      ))}
    </div>
  );

  return (
    <section className="w-full max-w-screen-xl mx-auto py-20 px-4 md:px-8">
      <header className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Explore Projects
        </h2>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Dive into a curated collection of full-stack applications and creative web solutions.
        </p>
      </header>

      <ProjectFilter
        category={category}
        onCategoryChange={setCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="mt-10">
        {isFetching || isLoading ? (
          <ProjectsSkeleton />
        ) : isError || error ? (
          <p className="text-red-500 text-center">Error fetching projects.</p>
        ) : (
          <>
            {data?.data?.length === 0 ? (
              <p className="text-center text-gray-400">No projects found.</p>
            ) : (
              <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
                {data?.data?.map((project) => (
                  <ProjectCard key={project?._id} project={project} />
                ))}
              </div>
            )}

            <div className="mt-12">
              <Pagination
                currentPage={currentPage}
                totalPages={data?.meta?.totalPage || 1}
                onPageChange={setCurrentPage}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
