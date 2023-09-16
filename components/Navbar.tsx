"use client";

import { NavItemProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const NavItem = ({ activeItem, setActiveItem, name, route }: NavItemProps) => {
  return activeItem !== name ? (
    <Link href={route}>
      <span
        onClick={() => setActiveItem(name)}
        className="hover:text-green capitalize"
      >
        {name}
      </span>
    </Link>
  ) : null;
};

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("");

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") setActiveItem("about");
    if (pathname === "/resume") setActiveItem("resume");
    if (pathname === "/projects") setActiveItem("projects");
    if (pathname === "/contact") setActiveItem("contact");
    // Setting active item for dynamic routes
    if (pathname === "/resume/experience") setActiveItem("resume");
    if (pathname === "/resume/education") setActiveItem("resume");
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-green text-xl border-b-4 border-green md:text-2xl capitalize">
        {activeItem}
      </span>
      <div className="text-lg xsm:flex space-x-5 hidden">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="about"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="resume"
          route="/resume"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="contact"
          route="/contact"
        />
      </div>
      <MobileMenu activeItem={activeItem} setActiveItem={setActiveItem} />
    </div>
  );
}
