import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = { title: "Contact Me" };

export default function Contact() {
  return (
    <div className="px-6 py-2">
      <ContactForm />
    </div>
  );
}
