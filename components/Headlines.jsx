import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import LoadingSpinnerComponent from "react-spinners-components";

const Headlines = () => {
  const head = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
  ];
  return (
    <div className="flex   bg-white shadow container mx-auto">
      <div className="flex md:w-[170px] w-full bg-[#dddddd] relative after:absolute after:bg-[#dddddd] after:w-[20px]   after:left-[140px] after:skew-x-[200deg] after:top-0 after:bottom-0 after:z-30">
        <div className="flex items-center py-2 pl-4 gap-x-1">
          <span>
            <LoadingSpinnerComponent
              type="Ripple"
              colors={["#800000", "#c80000"]}
              size={"30px"}
            />
          </span>
          <h2 className="text-[#333333] text-[16px] font-semibold">
            Headlines
          </h2>
        </div>
      </div>
      <div className="flex md:w-calc(100%-170px) w-full">
        <div className="flex w-full justify-start items-center gap-x-2">
          <Marquee>
            {head.map((item) => (
              <div key={item.id}>
                <Link
                  className="text-[#333333] pr-4 border-l-2 border-purple-500 pl-4 text-[16px] font-bold"
                  href={`/headlines/${item.id}`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Headlines;
