"use client";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import NewsCard from "./items/NewsCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const LatestNews = () => {
  return (
    <div className="w-full flex flex-col-reverse gap-3 pr-0">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        voluptatibus fugit dolore, iure cupiditate ipsum aut facilis recusandae
        earum laudantium.
      </p>
      <Carousel
        autoPlay={true}
        arrows={true}
        renderButtonGroupOutside={true}
        responsive={responsive}
        infinite={true}
        transitionDuration={100}
      >
        {[1, 2, 3, 4, 5]?.map((item, index) => (
          <NewsCard key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default LatestNews;
