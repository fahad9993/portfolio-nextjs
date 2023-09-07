import { ISkill } from "@/types";
import React from "react";
import { motion } from "framer-motion";

export default function Bar({ data: { name, level, Icon } }: { data: ISkill }) {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: level,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="text-white my-2 bg-gray-300 dark:bg-dark-300 rounded-full">
      <motion.div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-400"
        style={{ width: level }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
}
