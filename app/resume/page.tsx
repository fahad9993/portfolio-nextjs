import { Metadata } from "next";
import ResumeComp from "./ResumeComp";

export const metadata: Metadata = {
  title: "Resume",
};

export default function Resume() {
  return <ResumeComp />;
}
