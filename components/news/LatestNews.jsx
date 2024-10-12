"use client";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import NewsCard from "./items/NewsCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Title from "../Title";

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
const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="flex justify-between items-center">
      <Title title="Latest News" />
      <div className="flex justify-center items-center gap-x-3">
        <button
          onClick={() => previous()}
          className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-300 rounded-full hover:bg-slate-600 hover:text-white"
        >
          <span>
            <FiChevronLeft />
          </span>
        </button>
        <button
          onClick={() => next()}
          className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-300 rounded-full  hover:bg-slate-600 hover:text-white"
        >
          <span>
            <FiChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
};
const LatestNews = () => {
  return (
    <div className="w-full flex flex-col-reverse gap-3 pr-0">
      <Carousel
        autoPlay={true}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        responsive={responsive}
        infinite={true}
        transitionDuration={200}
      >
        {[1, 2, 3, 4, 5]?.map((item, index) => (
          <NewsCard key={index} item={item} type="latest" />
        ))}
      </Carousel>
    </div>
  );
};

export default LatestNews;
