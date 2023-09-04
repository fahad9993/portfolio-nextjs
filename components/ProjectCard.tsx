"use client";

import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <Image
        src={image_path}
        width={200}
        height={200}
        alt={title}
        className="cursor-pointer"
        onClick={() => setShowDetails(true)}
      />
      <p className="my-2 text-center">{title}</p>

      {showDetails && (
        <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 w-full h-auto gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100 p-2">
          <div>
            <Image src={image_path} width={400} height={400} alt={title} />
            <div className="flex justify-center my-4 space-x-3">
              <Link
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub />
                <span>Github</span>
              </Link>
              <Link
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject />
                <span>Project</span>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl ">{title}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 gap-x-2 text-sm tracking-wider">
              {key_techs.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => setShowDetails(false)}
            className="absolute top-3 right-3 p-1 focus:outline-none bg-gray-200 dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
}
