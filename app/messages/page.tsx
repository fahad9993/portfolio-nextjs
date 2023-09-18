import React from "react";
import MessageComp from "./MessageComp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages",
};

export default function Messages() {
  return <MessageComp />;
}
