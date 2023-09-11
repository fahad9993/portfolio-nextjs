import ProjectsComp from "./ProjectsComp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return <ProjectsComp />;
}
