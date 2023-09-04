"use client";

import ProjectCard from "@/components/ProjectCard";
import ProjectNavbar from "@/components/ProjectNavbar";
import { projects as projectsData } from "@/data";
import { Category } from "@/types";
import React, { useState } from "react";

export default function page() {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="px-5 py-2 overflow-auto" style={{ height: "65vh" }}>
      <nav>
        <ProjectNavbar handlerFilterCategory={handlerFilterCategory} />
      </nav>
      <div className="grid grid-cols-12 gap-4 my-3 relative">
        {projects.map((project) => (
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200 rounded-lg">
            <ProjectCard project={project} key={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
