import { IProject } from "@/types";
import React from "react";

export default function ProjectCard({
  project: {
    title,
    description,
    image_path,
    deployed_url,
    github_url,
    category,
    key_techs,
  },
}: {
  project: IProject;
}) {
  return <div>ProjectCard</div>;
}
