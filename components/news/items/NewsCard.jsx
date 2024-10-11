import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = () => {
  return (
    <div className="group relative">
      <div className="overflow-hidden">
        <div className="h-[250px] w-full sm:h-[470px]">
          <Image
            src={`https://res.cloudinary.com/sirajul123/image/upload/v1726976696/news/cexjg5szddbmphfzvd5h.webp`}
            layout="fill"
            alt="images"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Link
        href="#"
        className="w-full h-full block absolute top-0 left-0 invisible group-hover:visible bg-white cursor-pointer opacity-5  transition-all duration-300"
      >
        <div className="left-5 absolute bottom-4 flex justify-start items-start flex-col text-black font-semibold gap-y-2">
          <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">
            Travel
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
