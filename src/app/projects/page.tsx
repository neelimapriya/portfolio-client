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

  const { isFetching, isLoading, isError, data, error } =
    useGetAllProjectsQuery(getQueryParams());
    console.log(data);

  const ProjectsSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {[...Array(limit)].map((_, index) => (
        <Skeleton key={index} className="h-[400px] w-full" />
      ))}
    </div>
  );

  return (
    <div className="max-w-[1400px] w-full mx-auto py-28 px-4 md:px-6 lg:px-8 flex flex-col gap-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
          <h2>All Projects</h2>
        </h2>
        <p className="text-[#F4FBA3] max-w-2xl mx-auto">
         Explore my recent projects and portfolio highlights.
        </p>
      </div>
      <ProjectFilter
        category={category}
        onCategoryChange={setCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {isFetching || isLoading ? (
        <ProjectsSkeleton />
      ) : isError || error ? (
        // <Error message="Error fetching projects" />
        <p>Error fetching project</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {data?.data?.map((project) => (
              <ProjectCard key={project?._id} project={project} />
            ))}
          </div>
          {data?.data?.length === 0 && 
          // <Error message="No projects found" />
          <p>project not found</p>
          }
          <Pagination
            currentPage={currentPage}
            totalPages={data?.meta?.totalPage || 1}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default ProjectsPage;