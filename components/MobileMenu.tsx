// components/MobileMenu.js
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function MobileMenu({
  activeItem,
  setActiveItem,
}: {
  activeItem: string;
  setActiveItem: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const PageLink = ({ name }: { name: string }) => (
    <Link
      href={name === "about" ? "/" : `/${name}`}
      className={`hover:text-blue-500 ${
        activeItem === name ? "text-black dark:text-white" : "text-gray-500"
      } rounded-md capitalize`}
      onClick={() => setActiveItem(name)}
    >
      {name}
    </Link>
  );

  return (
    <div className="fixed bottom-5 right-5 z-10 xsm:hidden">
      <div
        className={`w-8 h-8 bg-gradient-radial from-green to-blue-400 rounded-full flex flex-col justify-around items-center cursor-pointer transition-colors ${
          isOpen ? "hover:bg-blue-600" : ""
        }`}
        onClick={toggleMenu}
      >
        <FiMenu className="text-white" />
      </div>
      {isOpen && (
        <div className="flex flex-col space-y-2">
          <PageLink name="about" />
          <PageLink name="resume" />
          <PageLink name="projects" />
          <PageLink name="contact" />
        </div>
      )}
    </div>
  );
}
