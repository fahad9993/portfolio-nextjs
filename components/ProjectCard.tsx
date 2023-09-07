"use client";

import { fadeInUp, stagger } from "@/animations";
import { IProject } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

export default function ProjectCard({
  project: {
    id,
    title,
    description,
    image_path,
    deployed_url,
    github_url,
    category,
    key_techs,
  },
  showDetails,
  setShowDetails,
}: {
  project: IProject;
  showDetails: string | null;
  setShowDetails: (id: string | null) => void;
}) {
  return (
    <div>
      <Image
        src={image_path}
        width={300}
        height={150}
        style={{ width: "auto", height: "auto" }}
        alt={title}
        className="cursor-pointer"
        onClick={() => setShowDetails(id)}
        priority={false}
      />
      <p className="my-2 text-center">{title}</p>

      {showDetails === id && (
        <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 w-full h-auto gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100 p-2">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp}>
              <Image
                src={image_path}
                width={300}
                height={150}
                style={{ width: "auto", height: "auto" }}
                alt={title}
                priority={false}
              />
            </motion.div>
            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fadeInUp}
            >
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
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              className="mb-3 text-xl font-medium md:text-2xl"
              variants={fadeInUp}
            >
              {title}
            </motion.h2>
            <motion.h3 className="mb-3 font-medium" variants={fadeInUp}>
              {description}
            </motion.h3>
            <motion.div
              className="flex flex-wrap mt-5 gap-x-2 text-sm tracking-wider"
              variants={fadeInUp}
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            onClick={() => setShowDetails(null)}
            className="absolute top-3 right-3 p-1 focus:outline-none bg-gray-200 dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
}
