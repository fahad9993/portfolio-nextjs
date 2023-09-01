import EduExpCard from "@/components/EduExpCard";
import { educations, experiences } from "@/data";
import React from "react";

export default function page() {
  return (
    <div className="px-6 py-2">
      {/* Education and Experience */}
      <div className="grid gap-6 md:grid-cols-2">
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
      </div>
      {/* Languages and Tools */}
    </div>
  );
}
