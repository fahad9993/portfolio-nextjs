"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}

const NavItem = ({ activeItem, setActiveItem, name, route }: Props) => {
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
      </div>
    </div>
  );
}
