import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = ({ item, type }) => {
  return (
    <div className="group relative rounded-sm">
      <div className="overflow-hidden">
        <div
          className={`${
            type ? "h-[270px] sm:h-[470px]" : "h-[228px]"
          } w-full group-hover:scale-110 transition-all duration-500 `}
        >
          <Image
            src={`https://res.cloudinary.com/sirajul123/image/upload/v1726976696/news/cexjg5szddbmphfzvd5h.webp`}
            layout="fill"
            alt="images"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Link
        href={`/`}
        className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300 "
      ></Link>
      <div className="left-5 absolute bottom-4 flex justify-start items-start flex-col text-white font-semibold pag-y-2  transition-all">
        <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-red-600">
          Travel
        </div>
        <h2 className="text-xl">Liton Das is working hard for his career</h2>
        <div className="flex gap-x-2 text-sm">
          <span>October 6, 2023</span>
          <span>Sirajul Islam</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
