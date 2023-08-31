import { IService } from "@/types";
import React from "react";

export default function ServiceCard({
  service: { Icon, title, about },
}: {
  service: IService;
}) {
  // as the paragraphs of about contains html markup, so to render it
  // It also requires self closing <p> tags
  // The function should be called afterwards
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-green" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
}
