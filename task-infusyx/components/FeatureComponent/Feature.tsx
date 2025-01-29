import React from "react";
import { GraduationCap, Home, UserPlus, Bed } from "lucide-react"; // Use appropriate icons
import Image from "next/image";

const dotImageBg = require("@/public/assets/13972.jpg");

const features = [
  {
    icon: <GraduationCap className="text-teal-500 w-8 h-8 " />,
    title: "Education",
    description:
      "Get the best of quality education in Uzbekistan with the most skilled professionals.",
  },
  {
    icon: <Home className="text-teal-500 w-8 h-8 " />,
    title: "Fee Structure",
    description:
      "Low tuition fee Medical universities in Uzbekistan offered low-cost education to foreign students.",
  },
  {
    icon: <UserPlus className="text-teal-500 w-8 h-8 " />,
    title: "Admission",
    description:
      "Direct Admissions: Students will get direct admission to the medical university of Uzbekistan.",
  },
  {
    icon: <Bed className="text-teal-500 w-8 h-8 " />,
    title: "Accommodation",
    description:
      "Living & accommodation is better, and the cost of living in Tajikistan is low, around 62 USD.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="my-10">
      <p className="text-4xl font-bold text-black text-center py-5">
        Why Study MBBS in{" "}
        <span className="text-colors-primary underline ">Uzbekistan ?</span>
      </p>

      <div className="relative w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12 max-w-6xl mx-auto p-6 sm:p-10 mb-32">
        {/* Randomly positioned image */}
        <Image
          src={dotImageBg}
          width={200}
          height={200}
          alt="Decorative Dots"
          className="sm:block hidden absolute -left-32 rounded-xl opacity-50"
        />
        <Image
          src={dotImageBg}
          width={200}
          height={200}
          alt="Decorative Dots"
          className="sm:block hidden absolute -right-32 rounded-xl opacity-50 top-[220px]"
        />
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative flex flex-col bg-gray-100 hover:bg-colors-primary/10 items-start text-start p-6 border border-teal-500 rounded-xl shadow-md hover:shadow-lg transition duration-300 ${
              index === 1 || index === 3 ? "sm:top-20 top-0" : ""
            }`}
            style={{ zIndex: 1 }} 
          >
            <div className="relative p-2 rounded-xl shadow-sm -mt-14 overflow-hidden">
              <div className="bg-white p-2 rounded-lg">{feature.icon}</div>

              <div
                className="absolute inset-0 border-[3px] border-teal-500 rounded-xl p-4"
                style={{ clipPath: "inset(50% 0 0  0 )" }}
              ></div>
            </div>

            <h3 className="text-2xl font-semibold text-black mt-4">
              {feature.title}
            </h3>

            <div className="start-0 w-16 h-[2px] bg-teal-500 my-3 "></div>

\            <p className="text-gray-600 text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
