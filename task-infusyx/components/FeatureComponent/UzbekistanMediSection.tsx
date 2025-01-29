import React from "react";
import Image from "next/image";
import {
  Book,
  FileText,
  DollarSign,
  UserCheck,
  GraduationCap,
} from "lucide-react";

const UzbekistanMediSection = () => {
  return (
    <section className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-white">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Why <span className="text-teal-500 underline">Uzbekistan Medi?</span>
        </h2>

        <div className="space-y-4">
          <div className="flex items-start">
            <GraduationCap className="text-teal-500 w-12 h-12" />
            <div className="ml-4">
              <h3 className="font-semibold text-gray-800">
                Guaranteed Admission with Low Fees
              </h3>
              <p className="text-gray-600">
                Admission to top MBBS universities in Uzbekistan with affordable
                fees for Indian students.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FileText className="text-teal-500 w-12 h-12" />
            <div className="ml-4">
              <h3 className="font-semibold text-gray-800">
                Complete Support for Documentation
              </h3>
              <p className="text-gray-600">
                We provide end-to-end support for the necessary documentation
                required for MBBS admissions.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <DollarSign className="text-teal-500 w-12 h-12" />
            <div className="ml-4">
              <h3 className="font-semibold text-gray-800">Affordable Fees</h3>
              <p className="text-gray-600">
                Studying abroad becomes easy with low tuition fees and
                reasonable living costs.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <UserCheck className="text-teal-500 w-12 h-12" />
            <div className="ml-4">
              <h3 className="font-semibold text-gray-800">
                Free Counseling & Career Guidance
              </h3>
              <p className="text-gray-600">
                We offer personalized counseling and guidance to help students
                build a successful medical career.
              </p>
            </div>
          </div>
        </div>

        <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition">
          Read more
        </button>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex flex-col md:flex-row items-start justify-center relative gap-4 mt-8 md:mt-0">
        <div className="flex sm:flex-col flex-row gap-4 justify-start ml-4">
          <Image
            src="/assets/image 89.png"
            alt="Small 1"
            width={150}
            height={120}
            className="object-cover rounded-lg shadow-md"
          />
          <Image
            src="/assets/image 90.png"
            alt="Small 2"
            width={150}
            height={120}
            className="object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="relative mx-3">
          <Image
            src="/assets/image 88.png"
            alt="Main"
            width={320}
            height={320}
            className="object-contain rounded-lg shadow-md"
          />
        </div>
        <div className="absolute bottom-12 left-[130px]  text-white px-4 py-1 rounded-md text-sm">
          <Image
            src="/assets/TrustStudent.png"
            alt="Main"
            width={100}
            height={220}
            className="object-cover rounded-lg shadow-md"
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default UzbekistanMediSection;
