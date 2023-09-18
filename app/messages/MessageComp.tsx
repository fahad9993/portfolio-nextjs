"use client";

import { routeAnimation } from "@/animations";
import MessageCard from "@/components/MessageCard";
import { Message } from "@/types";
import { motion } from "framer-motion";
import React from "react";
import { useEffect, useState } from "react";

export default function MessageComp() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/message")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="text-xl font-bold tracking-wide">Messages</h1>
      {messages.map((message) => (
        <MessageCard message={message} key={message._id} />
      ))}
    </motion.div>
  );
}
