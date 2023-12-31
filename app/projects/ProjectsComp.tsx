"use client";

import { fadeInUp, routeAnimation, stagger } from "@/animations";
import ProjectCard from "@/components/ProjectCard";
import ProjectNavbar from "@/components/ProjectNavbar";
import { projects as projectsData } from "@/data";
import { Category } from "@/types";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function ProjectsComp() {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const [showDetails, setShowDetails] = useState<string | null>(null);

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
    <motion.div
      className="px-5 py-2 overflow-auto md:overflow-hidden"
      style={{ height: "65vh" }}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <nav>
        <ProjectNavbar
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />
      </nav>
      <motion.div
        className="grid grid-cols-12 gap-4 my-3 relative"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.div
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200 rounded-lg"
            key={project.title}
            variants={fadeInUp}
          >
            <ProjectCard
              project={project}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
