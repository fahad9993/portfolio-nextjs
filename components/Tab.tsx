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
    <div>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex">
          {tabItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(index)}
              className={`cursor-pointer py-2 px-4 inline-flex items-center capitalize ${
                activeTab === index
                  ? "border-indigo-500 bg-white text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {item}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
