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
      <span onClick={() => setActiveItem(name)}>{name}</span>
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
    <div>
      <span className="font-bold text-green">{activeItem}</span>
      <div className="text-red-400 font-semibold flex space-x-3">
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
