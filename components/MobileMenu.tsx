import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const MobileMenu = () => {
  const menus = [
    { name: "about", link: "/", icon: MdOutlineDashboard },
    { name: "resume", link: "/resume", icon: AiOutlineUser },
    { name: "projects", link: "/projects", icon: FiMessageSquare },
    { name: "contact", link: "/contact", icon: FiMessageSquare },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="sm:top-0 top-1/2 left-0 fixed sm:translate-y-1/2 -translate-y-1/2 opacity-50 sm:hidden">
      <div className="flex justify-end gap-2">
        <div
          className={`bg-[#0e0e0e]  ${
            open ? "sm:w-72 w-16" : "w-8 sm:w-16"
          } duration-500 text-gray-100 px-1`}
        >
          <div className="py-3 flex justify-start">
            <HiMenuAlt3
              size={12}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                href={menu?.link}
                key={i}
                className="mt-5 group flex flex-col sm:flex-row items-center text-sm  gap-1 font-medium p-2 hover:bg-gray-800 rounded-md"
              >
                <div>{React.createElement(menu?.icon, { size: "10" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                {/* <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-red-600 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2> */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileMenu;
