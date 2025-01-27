import Image from "next/image";
import React from "react";

const Banner = () => {
  const bannerImage = require("@/public/assets/bannerImage.png");
  const rightMark = require("@/public/assets/rightMark.png");
  const social = require("@/public/assets/bannerImagestudent.png");

  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/glass-buildings-seen-from-lake_1127-2268.jpg")',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Rotated Apply Now Button */}
      <div className="sm:block absolute hidden top-1/2 -left-12 transform -translate-y-1/2 -rotate-90 z-20">
        <button className="bg-colors-primary text-white text-sm sm:text-base font-semibold px-4 sm:px-6 py-2 rounded-lg hover:bg-primary-dark transition duration-300">
          Apply Now
        </button>
      </div>

      {/* Main Content */}
      <div className="relative max-w-[1200px] w-full h-full mx-auto flex flex-col-reverse md:flex-row px-6 sm:px-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-white z-10 my-auto border-l-[6px] border-l-colors-primary pl-6 md:pl-10">
          {/* Heading */}
          <div className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Pursue <span className="text-colors-primary">MBBS</span> In{" "}
            <span className="text-colors-primary">Uzbekistan</span> Top
            Universities
          </div>

          {/* List of Features */}
          <ul className="space-y-3">
            {[
              "Low-cost medical education starting from INR 5 Lacs﻿*",
              "No Donation ﻿&﻿ Capitation fees﻿",
              "﻿Practice in India ﻿&﻿ across the world﻿",
              "﻿Worldwide accepted the degree﻿",
            ].map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <Image
                  src={rightMark}
                  alt="right mark"
                  width={20}
                  height={20}
                  className="rounded-lg object-contain"
                  priority
                />
                <span className="text-sm sm:text-base">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Apply Now Button */}
          <div className="py-4">
            <button className="bg-colors-primary text-white text-sm sm:text-base font-semibold px-6 py-2 rounded-lg hover:bg-primary-dark transition duration-300">
              Apply Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end items-end mt-20">
          {/* Black Background */}
          <div className="relative h-[200px] sm:h-[300px] md:h-[400px] w-[200px] sm:w-[300px] md:w-[400px] bg-black rounded-t-[80px] sm:rounded-t-[120px] md:rounded-t-[150px] flex justify-center items-center z-0 overflow-visible">
            {/* Social Image */}
            <div className="absolute top-0 -left-20 sm:-left-24">
              <Image
                src={social}
                alt="social image"
                width={120}
                height={120}
                className="md:hidden block rounded-lg object-contain"
                priority
              />
              <Image
                src={social}
                alt="social image"
                width={200}
                height={200}
                className="md:block hidden rounded-lg object-contain"
                priority
              />
            </div>

            {/* Banner Image */}
            <div className="absolute -top-14 sm:-top-16 md:-top-[118px]">
              <Image
                src={bannerImage}
                alt="banner image"
                width={400}
                height={400}
                className="md:block hidden rounded-lg object-contain"
                priority
              />
              <Image
                src={bannerImage}
                alt="social image"
                width={200}
                height={200}
                className="md:hidden block rounded-lg object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
