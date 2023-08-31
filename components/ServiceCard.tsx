import { IService } from "@/types";
import React from "react";

export default function ServiceCard({
  service: { Icon, title, about },
}: {
  service: IService;
}) {
  return (
    <div>
      <Icon />
      <div>
        <h4>{title}</h4>
        <p>{about}</p>
      </div>
    </div>
  );
}
