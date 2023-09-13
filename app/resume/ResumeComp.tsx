"use client";

import Bar from "@/components/Bar";
import EduExpCard from "@/components/EduExpCard";
import { educations, experiences, languages, tools } from "@/data";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "@/animations";
import Link from "next/link";

export default function ResumeComp() {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Education and Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Experience */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <h5 className="my-2 text-xl font-bold">{experiences[0].title}</h5>
          <p className="font-semibold">{experiences[0].place}</p>
          <p className="font-thin">{experiences[0].timeframe}</p>
          <div className="my-4">
            <Link
              href="/resume/experience"
              className="bg-gradient-to-r from-green to-blue-400 rounded-full py-2 px-5 text-white"
            >
              show more
            </Link>
          </div>
        </motion.div>
        {/* Education */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <h5 className="my-2 text-xl font-bold">{educations[0].title}</h5>
          <p className="font-semibold">{educations[0].place}</p>
          <p className="font-thin">{educations[0].timeframe}</p>
          <div className="my-4">
            <Link
              href="/resume/education"
              className="bg-gradient-to-r from-green to-blue-400 rounded-full py-2 px-5 text-white"
            >
              show more
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Languages and Tools */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Languages */}
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages and Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        {/* Tools */}
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools and Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
