"use client";
import { GraduationCap } from "lucide-react";
import React from "react";
import Image from "next/image"; // Next.js optimized Image component
const feeImage = require("@/public/assets/blog.png");

interface FeesCardProps {
  college: {
    image: string;
    name: string;
    fee: string;
    duration: string;
  };
}

const FeesCard: React.FC<FeesCardProps> = ({ college }) => {
  return (
    <div>
      <div className="bg-white my-10 shadow-md rounded-xl overflow-hidden border border-teal-300 hover:shadow-lg transition duration-300 w-72 p-2">
        {/* Image */}
        <div className="relative">
          <Image
            src={feeImage}
            alt={college.name}
            className="w-full h-40 object-cover rounded-xl "
            width={300} // Set width for Next.js Image
            height={160} // Set height for Next.js Image
          />
        </div>

        {/* Content */}
        <div className="relative p-4">
          {/* Title */}
          <div className="absoulte flex items-center gap-2 mb-3 rounded-lg border border-colors-primary p-2 border-t-4 -mt-10 bg-white z-40">
            <GraduationCap className="text-teal-500 w-14 h-full border border-colors-primary rounded-full p-1" />
            <h3 className="text-[14px] font-semibold text-gray-800">
              {college.name}
            </h3>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <p>
              <span className="font-bold">Fee Structure:</span> {college.fee}
            </p>
            <p>
              <span className="font-bold">Duration:</span> {college.duration}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-4">
            <button className="w-full bg-white text-teal-600 font-semibold py-2 px-4 rounded-md hover:bg-teal-200 transition border border-colors-primary">
              Read More
            </button>
            <button className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-600 transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesCard;
