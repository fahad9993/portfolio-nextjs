"use client";

import Navbar from "@/components/Navbar";
import "./globals.css";
// import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Footer from "@/components/Footer";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Md. Fahad Rahman | Portfolio",
//   description: "Strive for excellence",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Md. Fahad Rahman | Portfolio | Web Developer</title>
        <meta
          name="Portfolio"
          content="Portfolio for Full Stack Web Developer"
        />
      </Head>
      <body
        className={`${nunito_sans.className} bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white`}
      >
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
      </body>
    </html>
  );
}
