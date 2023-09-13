import ResumeSection from "./ResumeSection";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: { section: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const section = params.section;
  // Coverting section name to Capitalize
  const section_cap = section.charAt(0).toUpperCase() + section.slice(1);

  return {
    title: `${section_cap} | Resume`,
  };
}

export default function Projects({ params }: { params: { section: string } }) {
  const section = params.section;
  return <ResumeSection section={section} />;
}
