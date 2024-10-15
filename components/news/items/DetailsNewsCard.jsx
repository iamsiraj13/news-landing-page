import Image from "next/image";
import Link from "next/link";
import React from "react";

const DetailsNewsCard = ({ type }) => {
  return (
    <div className="bg-white shadow-sm">
      <div className="group relative overflow-hidden">
        <div
          className={`w-full ${(type = "details-news"
            ? "h-[290px]"
            : "h-[250px]")}  group-hover:scale-[1.1] transition-all duration-300`}
        >
          <Image
            src={`https://res.cloudinary.com/sirajul123/image/upload/v1726976696/news/cexjg5szddbmphfzvd5h.webp`}
            layout="fill"
            alt="images"
            className="w-full h-full object-cover"
          />
        </div>
        <Link
          href={`/`}
          className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300 "
        ></Link>
        <div className="left-5 absolute bottom-4 flex justify-start items-start gap-x-2 text-white font-semibold pag-y-2  transition-all">
          <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-red-600">
            Travel
          </div>
          <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-red-600">
            Technology
          </div>
        </div>
      </div>
      <div className="p-4">
        <Link
          href="#"
          className="text-md font-semibold text-slate-600 hover:text-red-600"
        >
          This is news title
        </Link>
        <div className="flex gap-x-2 text-xs">
          <span>October 6, 2023</span>
          <span>Sirajul Islam</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsNewsCard;
