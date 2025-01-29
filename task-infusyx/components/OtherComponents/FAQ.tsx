"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is an MBBS degree from Georgia recognized globally?",
    answer:
      "Yes, an MBBS degree from Georgia is recognized by various medical councils around the world, including the World Health Organization (WHO), Medical Council of India (MCI), and other international medical boards.",
  },
  {
    question: "What is the duration of an MBBS program in Georgia?",
    answer:
      "The MBBS program in Georgia typically lasts for 6 years, including both theoretical studies and clinical practice in hospitals.",
  },
  {
    question:
      "Do I need to pass an entrance exam for admission to MBBS in Georgia?",
    answer:
      "Most universities in Georgia do not require an entrance exam for MBBS admission, but you must meet the eligibility criteria, which includes a high school diploma with a focus on science subjects.",
  },
  {
    question: "Is the medium of instruction for MBBS in Georgia English?",
    answer:
      "Yes, the medium of instruction for MBBS programs in Georgia is primarily English, making it easier for international students to understand and communicate.",
  },
];

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-2">
        <span className="text-teal-600">Frequently</span> Asked{" "}
        <span className="text-teal-600">Questions</span>
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Celebrating Achievements, One Click at a Time!
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-md overflow-hidden shadow-xl"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left font-bold"
              onClick={() => toggleFAQ(index)}
            >
              Q. {faq.question}
              {openIndex === index ? <ChevronDown /> : <ChevronRight />}
            </button>
            {openIndex === index && (
              <div className="p-4 border-t text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
