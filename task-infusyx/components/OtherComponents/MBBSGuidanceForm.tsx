import React from "react";
const formImage = require("@/public/assets/form.png");
const MBBSGuidanceForm = () => {
  return (
    <div className="bg-cyan-100 py-10 px-6">
      <div className="max-w-[1200px] container mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Image Section */}
        <div className="mb-6 md:mb-0">
          <img
            src="/assets/form.png"
            alt="Guidance"
            className="w-[400px] h-auto"
          />
        </div>

        {/* Form Section */}
        <div className="w-full ">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Get Personalized Guidance for Your MBBS Journey
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded-md"
            />
            <div className="flex">
              <select className="p-3 border rounded-l-md">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                type="text"
                placeholder="Your Mobile No."
                className="p-3 border rounded-r-md flex-1"
              />
            </div>
            <input
              type="text"
              placeholder="Current City"
              className="p-3 border rounded-md"
            />
            <button className="w-[300px] col-span-2 bg-teal-600 text-white p-3 rounded-md hover:bg-teal-700">
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MBBSGuidanceForm;
