"use client";

import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { SnackbarProvider } from "notistack";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SnackbarProvider>
        <ThemeProvider attribute="class">
          <main className="grid grid-cols-12 gap-6 mt-14 mb-6 px-5 lg:px-48 sm:px-20 md:px-32">
            <div className="col-span-12 lg:col-span-3 bg-white dark:bg-dark-500 rounded-2xl p-4 text-center shadow-custom-light dark:shadow-custom-dark">
              <Sidebar />
            </div>
            <div className="col-span-12 lg:col-span-9 bg-white dark:bg-dark-500 rounded-2xl flex flex-col overflow-hidden shadow-custom-light dark:shadow-custom-dark">
              <Navbar />
              <AnimatePresence mode="wait">{children}</AnimatePresence>
            </div>
          </main>
          <footer className="mb-14 px-5 lg:px-48 sm:px-20 md:px-32">
            <Footer />
          </footer>
        </ThemeProvider>
      </SnackbarProvider>
    </>
  );
}
