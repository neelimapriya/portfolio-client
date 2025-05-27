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
import { ExternalLink, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: TProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group bg-white flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0 overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src={project?.image || "/placeholder.svg"}
            alt={project?.title || "Project Image"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
            loading="eager"
            className="rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <Badge className="bg-[#F4FBA3] text-black text-xs font-medium px-2 py-1 ">
              {project?.category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-5 bg-gradient-to-b from-[#F4FBA3] to-white ">
        <CardTitle className="mb-2 text-xl font-bold text-black">
          {project?.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project?.subtitle}
        </p>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project?.technologies}
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-0 border-t border-black ">
        <div className="flex justify-between w-full items-center gap-2 mt-2">
          {/* {project?.githubClientUrl && (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-xs px-2 py-1 text-black hover:text-primary hover:bg-black 
                "
            >
              <Link
                href={project?.githubClientUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-1 h-3.5 w-3.5" />
                Github Client
              </Link>
            </Button>
          )}
          {project?.githubServerUrl && (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-xs px-2 py-1 text-black hover:text-primary hover:bg-black 
                "
            >
              <Link
                href={project?.githubServerUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-1 h-3.5 w-3.5" />
                Github Server
              </Link>
            </Button>
          )} */}

          <Button
            asChild
            variant="outline"
            size="sm"
            className="text-xs px-2 py-1 border border-black text-black  "
          >
            <Link href={`/projects/${project?._id}`}>
              <ExternalLink className="mr-1 h-3.5 w-3.5" />
              Project Details
            </Link>
          </Button>

          {project?.liveUrl && (
            <Button
              asChild
              variant="default"
              size="sm"
              className="text-xs px-2 py-1 bg-[#F4FBA3] hover:bg-black hover:text-primary text-black"
            >
              <Link
                href={project?.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-1 h-3.5 w-3.5" />
                Live Link
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
