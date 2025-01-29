"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images correctly
import blog1Image from "@/public/assets/image 36.png";
import blog2Image from "@/public/assets/image 37.png";
import blog3Image from "@/public/assets/image 37.png";

const BlogSlider = () => {
  const blogs = [
    {
      id: 1,
      image: blog1Image,
      title: "5 Reasons to Study MBBS in Russia",
      description:
        "Discover why Uzbekistan is the perfect destination for aspiring doctors with affordable fees and globally recognized .",
      author: "Tracey Wilson",
      authorImage:
        "https://media.istockphoto.com/id/1472635214/photo/portrait-of-a-beautiful-mixed-race-senior-woman-in-her-home.jpg?s=612x612&w=0&k=20&c=4empJynZ0Yk7a-s4X33IWnQ5-r0SkkH6jU51yGEjAOI=",

      date: "Dec 26, 2024",
    },
    {
      id: 2,
      image: blog2Image,
      title: "Why Choose MBBS in Uzbekistan?",
      description:
        "Learn about the advantages of studying medicine in Uzbekistan, including low tuition fees and high-quality education.",
      author: "John Smith",
      authorImage:
        "https://media.istockphoto.com/id/1472635214/photo/portrait-of-a-beautiful-mixed-race-senior-woman-in-her-home.jpg?s=612x612&w=0&k=20&c=4empJynZ0Yk7a-s4X33IWnQ5-r0SkkH6jU51yGEjAOI=",

      date: "Jan 10, 2025",
    },
    {
      id: 3,
      image: blog3Image,
      title: "Top Medical Universities in Russia",
      description:
        "Explore the best medical universities in Russia that offer world-class education for aspiring doctors  high-quality education..",
      author: "Emily Johnson",
      authorImage:
        "https://media.istockphoto.com/id/1472635214/photo/portrait-of-a-beautiful-mixed-race-senior-woman-in-her-home.jpg?s=612x612&w=0&k=20&c=4empJynZ0Yk7a-s4X33IWnQ5-r0SkkH6jU51yGEjAOI=",

      date: "Feb 5, 2025",
    },
    {
      id: 4,
      image: blog1Image,
      title: "5 Reasons to Study MBBS in Russia",
      description:
        "Discover why Uzbekistan is the perfect destination for aspiring doctors with affordable fees and globally recognize.",
      author: "Tracey Wilson",
      authorImage:
        "https://media.istockphoto.com/id/1472635214/photo/portrait-of-a-beautiful-mixed-race-senior-woman-in-her-home.jpg?s=612x612&w=0&k=20&c=4empJynZ0Yk7a-s4X33IWnQ5-r0SkkH6jU51yGEjAOI=",

      date: "Dec 26, 2024",
    },
    {
      id: 5,
      image: blog2Image,
      title: "Why Choose MBBS in Uzbekistan?",
      description:
        "Learn about the advantages of studying medicine in Uzbekistan, including low tuition fees and high-quality education.",
      author: "John Smith",
      authorImage:
        "https://media.istockphoto.com/id/1472635214/photo/portrait-of-a-beautiful-mixed-race-senior-woman-in-her-home.jpg?s=612x612&w=0&k=20&c=4empJynZ0Yk7a-s4X33IWnQ5-r0SkkH6jU51yGEjAOI=",

      date: "Jan 10, 2025",
    },
    {
      id: 6,
      image: blog3Image,
      title: "Top Medical Universities in Russia",
      description:
        "Explore the best medical universities in Russia that offer world-class education for aspiring doctors.",
      authorImage:
        "https://media.istockphoto.com/id/1472635214/photo/portrait-of-a-beautiful-mixed-race-senior-woman-in-her-home.jpg?s=612x612&w=0&k=20&c=4empJynZ0Yk7a-s4X33IWnQ5-r0SkkH6jU51yGEjAOI=",

      author: "Emily Johnson",
      date: "Feb 5, 2025",
    },
  ];

  return (
    <div className="py-10 bg-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          Our Latest <span className="text-teal-500">Blogs</span>
        </h2>
        <p className="text-gray-500">
          Empowering Future Doctors with Valuable Information!
        </p>
      </div>

      <div className="mt-8 mx-auto max-w-6xl px-4">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, 
          }}
          className="pb-10"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="border border-colors-primary p-5 rounded-lg overflow-hidden shadow-md bg-white flex flex-col h-full mb-16">
\                <div className="relative w-full h-56">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    placeholder="blur"
                  />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg">{blog.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 flex-grow">
                    {blog.description}
                  </p>

                  <div className="flex items-center mt-4 text-gray-500 text-xs">
                    <img
                      src={blog.authorImage}
                      alt={blog.author}
                      className="w-8 h-8 rounded-full mr-2 border border-gray-300"
                    />
                    <span className="mr-2 font-medium">{blog.author}</span>
                    <span>📅 {blog.date}</span>
                  </div>

\                  <button className="w-full mx-auto flex items-center justify-center mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
                    Read more
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSlider;
