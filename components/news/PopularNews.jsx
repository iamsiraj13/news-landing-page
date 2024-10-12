import React from "react";
import Title from "../Title";
import NewsCard from "./items/NewsCard";

const PopularNews = () => {
  return (
    <div className="  w-full pb-8">
      <div className="flex flex-col w-full gap-y-[14px]">
        <Title title="Popular News" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4]?.map((item, index) => (
            <NewsCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularNews;
