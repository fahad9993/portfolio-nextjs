import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-white dark:bg-dark-500 rounded-2xl shadow-custom-light dark:shadow-custom-dark flex flex-col p-4 lg:flex-row lg:justify-between items-center">
      <div className="text-sm px-2 text-center">
        Copyright &copy; {year} - All rights reserved by Md. Fahad Rahman
      </div>
      <div className="flex pt-4 lg:pt-0 gap-6 px-2 text-green">
        <Link href="https://github.com/fahad9993">
          <AiFillGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/fahad9993/">
          <AiFillLinkedin />
        </Link>
        <Link href="https://www.facebook.com/fahad9993/">
          <AiFillFacebook />
        </Link>
        <Link href="https://www.instagram.com/fahad_rahm4n/">
          <AiFillInstagram />
        </Link>
        <Link href="https://twitter.com/Fahad_9993">
          <RiTwitterLine />
        </Link>
      </div>
    </div>
  );
}
