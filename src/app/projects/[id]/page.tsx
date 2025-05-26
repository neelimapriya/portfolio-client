/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetSingleProjectQuery } from "@/redux/features/project/projectApi";
import { Calendar, ExternalLink, Globe, Server, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRef } from "react";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    isFetching,
    isLoading,
    isError,
    error,
    data: project,
  } = useGetSingleProjectQuery(id as string);

  if (isFetching || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-[#F4FBA3]">
        <p className="text-lg animate-pulse">Loading…</p>
      </div>
    );
  }

  if (isError || error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-[#F4FBA3]">
        <p className="text-lg">Error loading project details</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-[#F4FBA3] px-6 py-10" ref={containerRef}>
      <div className="max-w-6xl mx-auto space-y-12">
       
        <div className="mb-6 ">
          <Button asChild variant="outline" size="sm" className="text-[#F4FBA3]  hover:text-black hover:bg-white">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft size={16} /> Back to Projects
            </Link>
          </Button>
        </div>

        
        <header className="space-y-3">
          <h1 className="text-4xl font-bold leading-tight">{project.title}</h1>
          <p className="text-lg text-[#F4FBA3]/80">{project.subtitle}</p>
          <div className="flex flex-wrap items-center gap-6 text-sm mt-4">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(project.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Server size={18} />
              <span className="capitalize">{project.category}</span>
            </div>
          </div>
        </header>

       
        <div className="rounded-xl overflow-hidden border border-[#F4FBA3] shadow-lg">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-[400px] object-cover"
            priority
          />
        </div>

      
        <section>
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <p className="text-[#F4FBA3]/90 text-base leading-relaxed">{project.technologies}</p>
        </section>

       
        <section>
          <Card className="bg-black border border-[#F4FBA3]">
            <CardContent className="py-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#F4FBA3]">Project Overview</h2>
              <div
                className="prose prose-invert max-w-none text-[#F4FBA3]"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </CardContent>
          </Card>
        </section>

        <section className="flex flex-col sm:flex-row gap-4">
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full py-4 bg-[#F4FBA3] text-black hover:bg-amber-200 cursor-pointer">
                <Globe className="mr-2" /> Live Demo <ExternalLink className="ml-2" />
              </Button>
            </Link>
          )}
          {project.githubClientUrl && (
            <Link href={project.githubClientUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full py-4 border-[#F4FBA3] text-[#F4FBA3] bg-black hover:bg-[#F4FBA3] hover:text-black cursor-pointer">
                <Globe className="mr-2" /> Client GitHub <ExternalLink className="ml-2" />
              </Button>
            </Link>
          )}
          {project.githubServerUrl && (
            <Link href={project.githubServerUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full py-4 border-[#F4FBA3] text-[#F4FBA3] bg-black hover:bg-[#F4FBA3] hover:text-black cursor-pointer">
                <Globe className="mr-2" /> Server GitHub <ExternalLink className="ml-2" />
              </Button>
            </Link>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
