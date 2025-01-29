"use client";

import Image from "next/image";

// Import university logos
import uni1 from "@/public/assets/partner/image 42.png";
import uni2 from "@/public/assets/partner/image 43.png";
import uni3 from "@/public/assets/partner/image 44.png";
import uni4 from "@/public/assets/partner/image 45.png";

const PartnerUniversities = () => {
  const universities = [
    { id: 1, image: uni1, name: "University 1" },
    { id: 2, image: uni2, name: "University 2" },
    { id: 3, image: uni3, name: "University 3" },
    { id: 4, image: uni4, name: "University 4" },
  ];

  return (
    <div className="py-10 bg-white">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          Our Partners <span className="text-teal-500">Universities</span>
        </h2>
        <p className="text-gray-500">
          We are affiliated with these medical universities
        </p>
      </div>

      {/* University Logos */}
      <div className="mt-8 flex flex-wrap justify-center gap-16 px-4">
        {universities.map((uni) => (
          <div key={uni.id} className="w-24 ">
            <Image
              src={uni.image}
              alt={uni.name}
              className="w-full h-auto object-contain"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerUniversities;
