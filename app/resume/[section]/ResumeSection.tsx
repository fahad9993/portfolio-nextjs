"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { routeAnimation } from "@/animations";
import Tab from "@/components/Tab";
import { educations, experiences } from "@/data";
import EduExpCard from "@/components/EduExpCard";

export default function page({ section }: { section: string }) {
  // State to store the selected tabName
  const [selectedTab, setSelectedTab] = useState<string | null>(section);

  // Function to handle tab clicks and update selectedTab state
  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Tab section={selectedTab || section} onTabClick={handleTabClick} />
      {/* Render content based on the selected tab */}
      {selectedTab === "experience" && (
        <div>
          {experiences.map((card) => (
            <div key={card.place}>
              <EduExpCard card={card} />
            </div>
          ))}
        </div>
      )}

      {selectedTab === "education" && (
        <div>
          {educations.map((card) => (
            <div key={card.title}>
              <EduExpCard card={card} />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
