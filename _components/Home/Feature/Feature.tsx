import React from "react";
import { FaBookOpen, FaLayerGroup, FaDesktop } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { AiOutlineBulb } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { IoMdRefresh } from "react-icons/io";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiLock } from "react-icons/fi";

const Feature = () => {
  const features = [
    {
      icon: <FaBookOpen className="text-blue-700 text-3xl" />,
      title: "50+ Expert-Curated Learning Modules",
      //   description:
      //     "Gain access to structured courses designed by industry experts.",
    },
    {
      icon: <FaLayerGroup className="text-purple-600 text-3xl" />,
      title: "Diverse Course Categories",
      //   description: "Explore various domains, from coding to design and more.",
    },
    {
      icon: <MdPhoneIphone className="text-green-600 text-3xl" />,
      title: "Mobile-First Learning",
      //   description:
      //     "Learn anytime, anywhere with our seamless mobile experience.",
    },
    {
      icon: <FaDesktop className="text-orange-500 text-3xl" />,
      title: "Fully Responsive Platform",
      //   description: "Enjoy a smooth experience across all devices.",
    },
    {
      icon: <AiOutlineBulb className="text-yellow-500 text-3xl" />,
      title: "Personalized Learning Paths",
      //   description: "AI-powered recommendations tailored to your skill level.",
    },
    {
      icon: <BiSupport className="text-red-500 text-3xl" />,
      title: "24/7 Expert Support",
      //   description: "Get real-time help from mentors whenever needed.",
    },
    {
      icon: <IoMdRefresh className="text-indigo-500 text-3xl" />,
      title: "Lifetime Access & Updates",
      //   description: "Enjoy continuous enhancements and free updates for life.",
    },
    {
      icon: <HiOutlineDocumentText className="text-teal-600 text-3xl" />,
      title: "Comprehensive Documentation & Resources",
      //   description: "Access guides, assignments, and learning materials easily.",
    },
    {
      icon: <FiLock className="text-gray-700 text-3xl" />,
      title: "Advanced Security & Data Privacy",
      //   description: "Learn with confidence on a secure, encrypted platform.",
    },
  ];

  return (
    <div className="bg-blue-50 pt-20 pb-20">
      <div className="w-[80%] mx-auto text-center">
        <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
          Its Everything you will ever need
        </h1>
        <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${index * 100}`}
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md space-x-3"
            >
              <div className="text-3xl w-14 h-14 bg-gray-200 bg-opacity-10 flex items-center justify-center flex-col rounded-full">
                <span>{feature.icon}</span>
              </div>
              <span className="font-semibold">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
