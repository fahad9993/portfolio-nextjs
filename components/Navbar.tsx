"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("");

  return (
    <div>
      <span className="font-bold text-green">{activeItem}</span>
      <div className="text-red-400 font-semibold flex space-x-3">
        {activeItem !== "About" && (
          <Link href="/">
            <span onClick={() => setActiveItem("About")}>About</span>
          </Link>
        )}
        {activeItem !== "Resume" && (
          <Link href="/resume">
            <span onClick={() => setActiveItem("Resume")}>Resume</span>
          </Link>
        )}
        {activeItem !== "Projects" && (
          <Link href="/projects">
            <span onClick={() => setActiveItem("Projects")}>Projects</span>
          </Link>
        )}
      </div>
    </div>
  );
}
