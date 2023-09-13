import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function BasicTabs({
  section,
  onTabClick,
}: {
  section: string;
  onTabClick: (tabName: string) => void;
}) {
  const router = useRouter();
  const tabItems = ["experience", "education"];

  const initialIndex = tabItems.indexOf(section);

  const [activeTab, setActiveTab] = useState(initialIndex);

  const handleTabClick = (tabIndex: number) => {
    const selectedTab = tabItems[tabIndex];
    setActiveTab(tabIndex);
    const path = selectedTab;
    router.push(`/resume/${path}`);

    // Call the onTabClick function to send the tab name back to the parent component
    onTabClick(selectedTab);
  };

  return (
    <div className="border-b border-gray-200 mb-4">
      <nav className="flex flex-col sm:flex-row justify-center items-center">
        {tabItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={`cursor-pointer py-2 px-4 capitalize flex-grow ${
              activeTab === index
                ? "bg-gradient-to-r from-green to-blue-400 text-white"
                : "border-transparent text-gray-500 hover:bg-gradient-to-r hover:from-green hover:to-blue-600 hover:text-gray-100 transition duration-300 ease-in-out"
            }`}
          >
            {item}
          </div>
        ))}
        <div className="flex-grow cursor-pointer py-2 px-4 hover:bg-gradient-to-r hover:from-green hover:to-blue-600 hover:text-gray-100 transition duration-300 ease-in-out">
          <Link href="/resume">Go Back</Link>
        </div>
      </nav>
    </div>
  );
}
