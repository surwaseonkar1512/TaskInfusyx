"use client";

import Image from "next/image";

// Import images (Replace with actual images)
import gallery1 from "@/public/assets/gallary/image 39.png";
import gallery2 from "@/public/assets/gallary/image 40.png";
import gallery3 from "@/public/assets/gallary/image 40.png";

const PhotoGallery = () => {
  const galleryImages = [
    { id: 1, image: gallery1, alt: "Doctors discussing in hospital" },
    { id: 2, image: gallery2, alt: "Medical students reviewing reports" },
    { id: 3, image: gallery3, alt: "Surgeons performing an operation" },
  ];

  return (
    <div className=" max-w-[1200px] mx-auto flex flex-col items-center justify-center py-10 bg-white">
      {/* Header Section */}
      <div className="flex items-center justify-between px-4 md:px-10">
        <div>
          <h2 className="text-3xl font-bold">
            Recent Photo{" "}
            <span className="text-teal-500 underline">Gallery</span>
          </h2>
          <p className="text-gray-500">
            Celebrating Achievements, One Click at a Time!
          </p>
        </div>
      </div>
      <div className="w-full flex justify-end items-end my-3">
        <a
          href="#"
          className=" text-colors-primary flex items-center font-medium"
        >
          View More{" "}
          <span className="text-white flex items-center justify-center h-8 w-8 rounded-full  bg-teal-500 ml-2 text-xl">
            ➜
          </span>
        </a>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {galleryImages.map((photo) => (
          <div key={photo.id} className="rounded-lg overflow-hidden shadow-md">
            <Image
              src={photo.image}
              alt={photo.alt}
              className="w-full h-60 object-cover"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
