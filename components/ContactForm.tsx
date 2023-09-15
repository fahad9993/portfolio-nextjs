"use client";

import { routeAnimation } from "@/animations";
import { motion } from "framer-motion";
import React, { useState } from "react";
import SnackBar from "./SnackBar";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState([]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server or an email service)
    console.log(formData);
    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const { msg } = await res.json();
    setError(msg);
    console.log(error);
  };

  // For snackbar
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <motion.div
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          handleClick();
        }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            placeholder="John Doe"
            value={formData.fullname}
            onChange={handleChange}
            required
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="user@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            placeholder="Type your text message here..."
            value={formData.message}
            onChange={handleChange}
            required
            //rows={textareaRows}
            className="w-full h-32 border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-green to-blue-400 rounded-full py-2 px-5 text-white"
        >
          Submit
        </button>
      </form>
      <SnackBar
        message="Your message has been deliverd successfully!"
        open={open}
        setOpen={setOpen}
      />
    </motion.div>
  );
}
