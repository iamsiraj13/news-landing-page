import Image from "next/image";
import React from "react";
import thumbnail from "../../../assets/23.png";
import Link from "next/link";

const NewsCard = () => {
  return (
    <div className="group relative">
      <div className="overflow-hidden">
        <div className="h-[250px] sm:h-[470px] w-full">
          <Image layout="fill" src={thumbnail} alt="imge" placeholder="blur" />
        </div>
      </div>
      <Link
        className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"
        href={"#"}
      >
        <div className="left-5 absolute bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-y-2">
          <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">
            Travel
          </div>
          <h2>
            ABET accreditation reaffirms UTSA&apos;s commitment to quality
          </h2>
          <div className="flex gap-x-2 text-sm font-normal">
            <span>October 6, 2023</span>
            <span>By Admin</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
