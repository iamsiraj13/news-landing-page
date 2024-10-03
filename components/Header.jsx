import React from "react";
import moment from "moment";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import logo from "../assets/images.jpeg";
import add from "../assets/download.png";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      {/* header top  */}
      <div className="container flex justify-between border-b-2 border-gray-300 items-center bg-white text-black">
        <span className="text-sm">{moment().format("LLLL")}</span>
        <div className="flex gap-2">
          <a
            href="#"
            className="w-[37px] h-[37px] flex items-center justify-center md:text-2xl text-xl bg-[#ffffff2b]"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-[37px] h-[37px] flex items-center justify-center text-2xl bg-[#ffffff2b]"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="#"
            className="w-[37px] h-[37px] flex items-center justify-center text-2xl bg-[#ffffff2b]"
          >
            <AiFillYoutube />
          </a>
        </div>
      </div>
      {/* header top end  */}
      {/* header middle  */}
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-[38px] sm:text-[48px] md:text-[80px] font-bold uppercase">
            news <span className="text-purple-700">portal</span>
          </h2>
        </div>
      </div>
      {/* header middle end  */}
      <Navbar />
    </div>
  );
};

export default Header;
