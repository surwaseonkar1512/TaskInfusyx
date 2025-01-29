"use client";

import Image from "next/image";

// Define the type for a single testimonial
interface Testimonial {
  name: string;
  degree: string;
  image: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    degree: "MBBS",
    image:
      "https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M=",
    review:
      "Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam.......",
  },
  {
    name: "Smitha Doe",
    degree: "MBBS",
    image:
      "https://media.istockphoto.com/id/1472635214/photo/portrait-of-a-beautiful-mixed-race-senior-woman-in-her-home.jpg?s=612x612&w=0&k=20&c=4empJynZ0Yk7a-s4X33IWnQ5-r0SkkH6jU51yGEjAOI=",
    review:
      "Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam.......",
  },
  {
    name: "Jaquline Doe",
    degree: "MBBS",
    image:
      "https://media.istockphoto.com/id/1472635214/photo/portrait-of-a-beautiful-mixed-race-senior-woman-in-her-home.jpg?s=612x612&w=0&k=20&c=4empJynZ0Yk7a-s4X33IWnQ5-r0SkkH6jU51yGEjAOI=",
    review:
      "Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam.......",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-900">
        Our Happy <span className="text-teal-600 underline">Students</span>
      </h2>
      <p className="text-gray-600 mt-2">Hear What Our Students Have to Say</p>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-2xl rounded-3xl p-6 max-w-sm w-full text-center flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white -mt-12 shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500">{testimonial.degree}</p>
            <p className="text-gray-600 mt-3 text-sm">{testimonial.review}</p>
            <div className="flex mt-4 text-colors-primary">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
