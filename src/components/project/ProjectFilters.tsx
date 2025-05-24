"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Filter, SortAsc, SortDesc } from "lucide-react";
import { useState } from "react";

interface ProjectFilterProps {
  category: string;
  onCategoryChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
}

const ProjectFilter = ({
  category,
  onCategoryChange,
  sortBy,
  onSortChange,
}: ProjectFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getSortLabel = (value: string) => {
    switch (value) {
      case "title-asc":
        return "Title (A-Z)";
      case "title-desc":
        return "Title (Z-A)";
      case "createdAt-desc":
        return "Newest First";
      case "createdAt-asc":
        return "Oldest First";
      default:
        return "Default";
    }
  };

  const getSortIcon = (value: string) => {
    if (value.includes("asc")) return <SortAsc className="w-4 h-4" />;
    if (value.includes("desc")) return <SortDesc className="w-4 h-4" />;
    return null;
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        {/* Desktop Category Tabs */}
        <div className="hidden md:block w-full md:w-auto">
          <Tabs
            value={category}
            onValueChange={onCategoryChange}
            className="w-full md:w-auto "
          >
            <TabsList className="bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-black p-1 rounded-xl ">
              <TabsTrigger
                value="all"
                className="rounded-lg  data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#F4FBA3] data-[state=active]:to-yellow-300 data-[state=active]:text-black data-[state=active]:shadow-md transition-all duration-300"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="fullstack"
                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#F4FBA3] data-[state=active]:to-yellow-300 data-[state=active]:text-black data-[state=active]:shadow-md transition-all duration-300"
              >
                Full Stack
              </TabsTrigger>
              <TabsTrigger
                value="frontend"
                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#F4FBA3] data-[state=active]:to-yellow-300 data-[state=active]:text-black data-[state=active]:shadow-md transition-all duration-300"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#F4FBA3] data-[state=active]:to-yellow-300 data-[state=active]:text-black data-[state=active]:shadow-md transition-all duration-300"
              >
                Backend
              </TabsTrigger>
              <TabsTrigger
                value="wordpress"
                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#F4FBA3] data-[state=active]:to-yellow-300 data-[state=active]:text-black data-[state=active]:shadow-md transition-all duration-300"
              >
                Wordpress
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Mobile Category Dropdown */}
        <div className="md:hidden w-full">
          <Select value={category} onValueChange={onCategoryChange}>
            <SelectTrigger className="w-full bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800/50 rounded-xl">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-950 border border-purple-200 dark:border-purple-800/50 rounded-xl">
              <SelectItem value="all">All Projects</SelectItem>
              <SelectItem value="fullstack">Full Stack</SelectItem>
              <SelectItem value="frontend">Frontend</SelectItem>
              <SelectItem value="backend">Backend</SelectItem>
              <SelectItem value="wordpress">Wordpress</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort Dropdown */}
        <div className="w-full sm:w-auto">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto bg-white/50  backdrop-blur-sm border border-[#F4FBA3] rounded-xl hover:bg-[#F4FBA3]  transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <span className="hidden sm:inline">Sort by:</span>
                  <span className="font-medium">{getSortLabel(sortBy)}</span>
                  {getSortIcon(sortBy)}
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-full sm:w-auto bg-white/50  backdrop-blur-sm border border-[#F4FBA3] rounded-xl hover:bg-[#F4FBA3]  transition-all duration-300"
            >
              <DropdownMenuLabel>Sort Projects</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className={`flex items-center justify-between ${
                  sortBy === "default"
                    ? "bg-[#F4FBA3]  text-black "
                    : ""
                } cursor-pointer`}
                onClick={() => {
                  onSortChange("default");
                  setIsOpen(false);
                }}
              >
                <span>Default</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`flex items-center justify-between ${
                  sortBy === "title-asc"
                    ? "bg-[#F4FBA3]  text-black "
                    : ""
                } cursor-pointer`}
                onClick={() => {
                  onSortChange("title-asc");
                  setIsOpen(false);
                }}
              >
                <span>Title (A-Z)</span>
                <SortAsc className="w-4 h-4" />
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`flex items-center justify-between ${
                  sortBy === "title-desc"
                    ? "bg-[#F4FBA3]  text-black "
                    : ""
                } cursor-pointer`}
                onClick={() => {
                  onSortChange("title-desc");
                  setIsOpen(false);
                }}
              >
                <span>Title (Z-A)</span>
                <SortDesc className="w-4 h-4" />
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`flex items-center justify-between ${
                  sortBy === "createdAt-desc"
                    ? "bg-[#F4FBA3]  text-black "
                    : ""
                } cursor-pointer`}
                onClick={() => {
                  onSortChange("createdAt-desc");
                  setIsOpen(false);
                }}
              >
                <span>Newest First</span>
                <SortDesc className="w-4 h-4" />
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`flex items-center justify-between ${
                  sortBy === "createdAt-asc"
                    ? "bg-[#F4FBA3]  text-black "
                    : ""
                } cursor-pointer`}
                onClick={() => {
                  onSortChange("createdAt-asc");
                  setIsOpen(false);
                }}
              >
                <span>Oldest First</span>
                <SortAsc className="w-4 h-4" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.div>

      {/* Active filters display */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex flex-wrap items-center gap-2"
      >
        {category !== "all" && (
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#F4FBA3]  text-black  border border-[#F4FBA3] ">
            <span>
              Category: {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </div>
        )}
        {sortBy !== "default" && (
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#F4FBA3]  text-black  border border-black ">
            <span>Sort: {getSortLabel(sortBy)}</span>
            {getSortIcon(sortBy)}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectFilter;
