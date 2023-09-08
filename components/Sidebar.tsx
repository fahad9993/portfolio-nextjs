"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { Black_Ops_One } from "next/font/google";
import { useTheme } from "next-themes";

// const imageLoader = ({ src }: any) => {
//   return `https://fahad9993.github.io/cv-new/assets/img/${src}`;
// };

const black_ops_one = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-blackOps",
});

export default function Sidebar() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="https://fahad9993.github.io/cv-new/assets/img/profilePic.png"
        width={128}
        height={128}
        className="rounded-full mx-auto border"
        alt="user avatar"
        priority={true}
      />
      <h3
        className={`${black_ops_one.variable} my-4 text-3xl font-medium tracking-wider font-cursive`}
      >
        Md. Fahad Rahman
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full">
        Mechanical Engineer
      </p>
      <Link
        href="https://fahad9993.github.io/cv-new/assets/pdf/Fahad-cv.pdf"
        className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full flex justify-center items-center"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </Link>
      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <Link href="https://www.facebook.com/fahad9993">
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </Link>
        <Link href="https://www.github.com/fahad9993">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </Link>
        <Link href="https://www.linkedin.com/in/fahad9993">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </Link>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-8 h-8" />
          <span>Dhaka, Bangladesh</span>
        </div>
        <p className="my-2">fahad9993@gmail.com</p>
        <p className="my-2">+880-01760979908</p>
        {/* buttons */}
        <button
          className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none"
          onClick={() => window.open("mailto:fahad9993@gmail.com")}
        >
          Email Me
        </button>
        <button
          onClick={changeTheme}
          className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}
