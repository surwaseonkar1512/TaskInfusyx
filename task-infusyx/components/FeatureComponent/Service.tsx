import Image from "next/image";
import React from "react";

type Service = {
  title: string;
  description: string;
  image: string;
};

const images = [
  require("@/public/assets/pana.png"),
  require("@/public/assets/pana2.png"),

  require("@/public/assets/Card 03.png"),
  require("@/public/assets/Card 5.png"),
  require("@/public/assets/Card 6.png"),
  require("@/public/assets/Card 4.png"),
  require("@/public/assets/Card 03.png"),
];

const services: Service[] = [
  {
    title: "Admission",
    description: "Get the guaranteed admission to top university.",
    image: images[0],
  },
  {
    title: "Airport Pickup",
    description: "Get picked up at airport by our representative.",
    image: images[1],
  },
  {
    title: "Visa Process",
    description:
      "Fill the visa applications followed by universities guidelines.",
    image: images[2],
  },
  {
    title: "Documentation",
    description: "Verification of legalized documents.",
    image: images[3],
  },
  {
    title: "Accommodation",
    description: "Find the best place to stay.",
    image: images[4],
  },
  {
    title: "Free Counseling",
    description: "Get expert advice by our reputed counselors.",
    image: images[5],
  },
];

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
}) => (
  <div className="bg-white shadow-lg grid-cols-2 grid-flow-col rounded-2xl p-6 text-center w-64 hover:shadow-xl transition-all">
    <div className="h-[120px] flex items-center justify-center">
      <Image
        src={image}
        alt={title}
        width={120}
        height={120}
        className="mx-auto mb-4 flex items-center"
      />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-teal-600">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

const ServicesGrid: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-5 items-center justify-center bg-gradient-to-r from-blue-100 to-teal-200 p-10">
      <h2 className="text-3xl font-bold text-gray-900 py-10">
        Our Valuable <span className="text-teal-500 underline"> Services</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
