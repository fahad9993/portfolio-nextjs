import ProjectCard from "@/components/ProjectCard";
import ProjectNavbar from "@/components/ProjectNavbar";
import { projects } from "@/data";
import React from "react";

export default function page() {
  return (
    <div className="px-5 py-2 overflow-auto" style={{ height: "65vh" }}>
      <nav>
        <ProjectNavbar />
      </nav>
      <div className="grid grid-cols-12 gap-4 my-3 relative">
        {projects.map((project, i) => (
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200 rounded-lg">
            <ProjectCard project={project} key={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
