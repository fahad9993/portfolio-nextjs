import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

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
  return (
    <div>
      <Image
        src={image_path}
        width={100}
        height={100}
        alt={title}
        className="cursor-pointer"
      />
      <p>{title}</p>

      <div className="grid md:grid-cols-2">
        <div>
          <Link href={github_url}>
            <AiFillGithub />
            <span>Github</span>
          </Link>
          <Link href={deployed_url}>
            <AiFillProject />
            <span>Project</span>
          </Link>
        </div>
        <div>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <div>
            {key_techs.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
        <button>
          <MdClose size={30} />
        </button>
      </div>
    </div>
  );
}
