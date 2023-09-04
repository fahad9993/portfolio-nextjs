import React from "react";
import { Category } from "@/types";

export function NavItem({ value }: { value: Category | "all" }) {
  return (
    <li className="capitalize cursor-pointer hover:text-green">{value}</li>
  );
}

export default function ProjectNavbar() {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" />
      <NavItem value="javascript" />
      <NavItem value="react" />
      <NavItem value="mongoDB" />
      <NavItem value="node" />
      <NavItem value="express" />
      <NavItem value="html" />
      <NavItem value="css" />
    </div>
  );
}
