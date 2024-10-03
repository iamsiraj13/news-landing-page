"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  console.log(path);
  const data = [
    {
      id: 1,
      name: "Sports",
      link: "/sports",
    },
    {
      id: 2,
      name: "Politics",
      link: "/politics",
    },
    {
      id: 3,
      name: "Business",
      link: "/business",
    },
    {
      id: 4,
      name: "Entertainment",
      link: "/entertainment",
    },
    {
      id: 5,
      name: "Technology",
      link: "/technology",
    },
  ];
  return (
    <div className="bg-gray-500 text-white uppercase font-semibold">
      <div className="  container flex justify-between items-center relative h-[48px]">
        {/* navbar  */}
        <div className="flex-wrap hidden lg:flex">
          <ul className="flex items-center   ">
            <li>
              <Link
                href="/"
                className={`px-6 py-[13px] hover:bg-gray-900 ${
                  path === "/" ? "bg-gray-900" : ""
                }`}
              >
                Home
              </Link>
            </li>
            {data?.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={`px-6 py-[13px] hover:bg-gray-900 ${
                      path === item.link ? "bg-gray-900" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
