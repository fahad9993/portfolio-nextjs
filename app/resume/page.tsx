import Bar from "@/components/Bar";
import EduExpCard from "@/components/EduExpCard";
import { educations, experiences, languages, tools } from "@/data";
import React from "react";

export default function page() {
  return (
    <div className="px-6 py-2">
      {/* Education and Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Experience */}
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            {experiences.map((card, i) => (
              <div key={i}>
                <EduExpCard card={card} />
              </div>
            ))}
          </div>
        </div>
        {/* Education */}
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            {educations.map((card, i) => (
              <div key={i}>
                <EduExpCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Languages and Tools */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Languages */}
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages and Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        {/* Tools */}
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools and Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
