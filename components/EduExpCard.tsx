import { IEducation } from "@/types";
import React from "react";

export default function EduExpCard({
  card: { title, place, about, timeframe },
}: {
  card: IEducation;
}) {
  return (
    <>
      <h5 className="my-2 text-xl font-bold">{title}</h5>
      <p className="font-semibold">{place}</p>
      <p className="font-thin">{timeframe}</p>
      <p className="my-3">{about}</p>
    </>
  );
}
