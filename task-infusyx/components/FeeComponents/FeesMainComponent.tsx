"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";
import FeesCard from "./FeesCard";

const feeImage = require("@/public/assets/blog.png");

interface FeesMainComponentProps {}

const FeesMainComponent: React.FC<FeesMainComponentProps> = (props) => {
  const colleges = [
    {
      image: feeImage.src,
      name: "Andijan State Medical Institute",
      fee: "₹5,22,111/-",
      duration: "4 years",
    },
    {
      image: feeImage.src,
      name: "Andijan State Medical Institute",
      fee: "₹5,22,111/-",
      duration: "4 years",
    },
    {
      image: feeImage.src,
      name: "Andijan State Medical Institute",
      fee: "₹5,22,111/-",
      duration: "4 years",
    },
    {
      image: feeImage.src,
      name: "Andijan State Medical Institute",
      fee: "₹5,22,111/-",
      duration: "4 years",
    },
    {
      image: feeImage.src,
      name: "Andijan State Medical Institute",
      fee: "₹5,22,111/-",
      duration: "4 years",
    },
    {
      image: feeImage.src,
      name: "Andijan State Medical Institute",
      fee: "₹5,22,111/-",
      duration: "4 years",
    },
  ];

  return (
    <div
      className="relative min-h-full my-10 flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/glass-buildings-seen-from-lake_1127-2268.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-colors-primary/70 w-full h-full absolute top-0 left-0 z-0"></div>

      <div className="relative z-10 w-full max-w-7xl">
        <p className="text-4xl font-bold text-white text-center py-5">
          Why Study MBBS in{" "}
          <span className="text-black underline">Uzbekistan?</span>
        </p>

\        <div className="flex justify-center items-center w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 2 },
              640: { slidesPerView: 1 },
            }}
            className="p-6 flex items-center justify-center w-full mx-auto"
          >
            {colleges.map((college, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center w-full mx-auto"
              >
                <div className="w-full  sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                  <FeesCard college={college} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeesMainComponent;
