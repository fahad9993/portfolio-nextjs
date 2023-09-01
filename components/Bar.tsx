import { ISkill } from "@/types";
import React from "react";

export default function Bar({ data: { name, level, Icon } }: { data: ISkill }) {
  return (
    <div className="text-gray-50 my-2 bg-gray-300 rounded-full">
      <div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-400"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
}
