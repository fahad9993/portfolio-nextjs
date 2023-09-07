"use client";

import React, { FunctionComponent } from "react";
import { Category } from "@/types";

export function NavItem({
  value,
  handlerFilterCategory,
  active,
}: {
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}) {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) {
    className += " text-green";
  }

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
}

export default function ProjectNavbar(
  props: React.JSX.IntrinsicAttributes & {
    handlerFilterCategory: Function;
    active: string;
  }
) {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="javascript" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="mongoDB" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="express" {...props} />
      <NavItem value="html" {...props} />
      <NavItem value="css" {...props} />
    </div>
  );
}
