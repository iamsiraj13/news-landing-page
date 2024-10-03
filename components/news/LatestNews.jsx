"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsCard from "./items/NewsCard";

const LatestNews = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-full flex flex-col-reverse gap-3 pr-0 lg:pr-2">
      <Carousel
        autoPlay
        autoPlaySpeed={3000}
        infinite
        renderButtonGroupOutside={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item}>
            <div className="w-full h-[200px] sm:h-[470px] relative">
              <NewsCard />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default LatestNews;
