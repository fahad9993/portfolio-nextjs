"use client";

import { NavItemProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavItem = ({ activeItem, setActiveItem, name, route }: NavItemProps) => {
  return activeItem !== name ? (
    <Link href={route}>
      <span onClick={() => setActiveItem(name)} className="hover:text-green">
        {name}
      </span>
    </Link>
  ) : null;
};

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("");

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/resume") setActiveItem("Resume");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/contact") setActiveItem("Contact");
    // Setting active item for dynamic routes
    if (pathname === "/resume/experience") setActiveItem("Resume");
    if (pathname === "/resume/education") setActiveItem("Resume");
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-green text-xl border-b-4 border-green md:text-2xl">
        {activeItem}
      </span>
      <div className="text-lg flex space-x-5">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Contact"
          route="/contact"
        />
      </div>
    </div>
  );
}
