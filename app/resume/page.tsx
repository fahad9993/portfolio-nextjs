import EduExpCard from "@/components/EduExpCard";
import { educations } from "@/data";
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
            <h5 className="my-2 text-xl font-bold">
              Admin and Accounts Officer
            </h5>
            <p className="font-semibold">HISP Bangladesh Foundation</p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      {/* Languages and Tools */}
    </div>
  );
}
