import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data";
import React from "react";

export default function page() {
  return (
    <div className="p-4">
      <nav>Navbar</nav>
      <div>
        {projects.map((project) => (
          <div>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
