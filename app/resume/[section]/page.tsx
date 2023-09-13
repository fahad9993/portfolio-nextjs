import React from "react";

export default function page({ params }: { params: { section: string } }) {
  const section = params.section;
  return <div>page {section}</div>;
}
