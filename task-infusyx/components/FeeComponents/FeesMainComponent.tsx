"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
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
      className="relative min-h-screen my-10 flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/glass-buildings-seen-from-lake_1127-2268.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for readability */}
      <div className=" bg-colors-primary/70 w-full h-full absolute top-0 left-0 z-0"></div>

      <div className="relative z-10 w-full max-w-7xl">
        <p className="text-4xl font-bold text-white text-center py-5">
          Why Study MBBS in{" "}
          <span className="text-colors-primary underline">Uzbekistan?</span>
        </p>

        {/* Swiper with Autoplay */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 3000, // 3 seconds delay
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            640: { slidesPerView: 1 },
          }}
          className="p-6"
        >
          {colleges.map((college, index) => (
            <SwiperSlide key={index}>
              <FeesCard college={college} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeesMainComponent;
