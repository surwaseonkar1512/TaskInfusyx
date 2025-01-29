import React from "react";
import Image from "next/image";
import { GraduationCap, Building, FileCheck2, Star } from "lucide-react";

const images = [
  require("@/public/assets/Rectangle.png"),
  require("@/public/assets/Graduated.png"),

  require("@/public/assets/Education.png"),
  require("@/public/assets/Nomad visa.png"),
];

const CounterSection = () => {
  const counters = [
    {
      id: 1,
      icon: <Star className="w-10 h-10 text-teal-500" />,
      count: "12+",
      label: "Years of expertise",
      image: images[0],
    },
    {
      id: 2,
      icon: <GraduationCap className="w-10 h-10 text-teal-500" />,
      count: "1500+",
      label: "Satisfied students counselled",
      image: images[1],
    },
    {
      id: 3,
      icon: <Building className="w-10 h-10 text-teal-500" />,
      count: "10+",
      label: "Universities affiliated with us!",
      image: images[2],
    },
    {
      id: 4,
      icon: <FileCheck2 className="w-10 h-10 text-teal-500" />,
      count: "100+",
      label: "Visa Assistance",
      image: images[3],
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-4 grid-cols-2 sm:gap-10 gap-14 px-6 md:px-12">
        {counters.map((item) => (
          <div
            key={item.id}
            className="relative bg-white shadow-xl rounded-3xl flex flex-col items-center px-6 py-6 w-full text-center"
          >
            <div className="absolute w-24 h-24 mb-4 rounded-full shadow-lg bg-white  -top-12">
              <Image
                src={item.image}
                alt={item.label}
                layout="fill"
                objectFit="contain"
                className="  p-6"
              />
            </div>
            <h3 className="sm:text-5xl text-2xl  font-bold text-teal-600 mt-6">
              {item.count}
            </h3>
            <p className="text-gray-700 text-sm mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
