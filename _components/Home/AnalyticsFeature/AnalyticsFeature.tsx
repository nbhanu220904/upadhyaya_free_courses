import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const AnalyticsFeature = () => {
  return (
    <div className="pt-10 pb-16">
      {/* Define Grid */}
      <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Content */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          // data-aos-delay="100"
        >
          <Image
            src="/analytics.jpg"
            alt="Analytics Image"
            width={550}
            height={550}
            className="object-contain"
          />
        </div>
        {/* Text Content */}
        <div className="p-6">
          <h1 className="text-base font-semibold text-indigo-700">
            Audience Tracking & Insights
          </h1>
          <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Empower Learning with Data-Driven Insights & Smart Analytics
          </h1>
          <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem]">
            Gain deep visibility into learner engagement with powerful analytics
            tools that put you in control. Track progress, measure performance,
            and customize insights to optimize the learning experience.
          </p>
          <ul className="mt-7 space-y-2 text-gray-800">
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Advanced Learning Analytics
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Smart Engagement Tracking
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Instructor & Admin Dashboards
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Hands-On Practice Session
            </li>
          </ul>
          <button className="mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-blue-600 transition-all duration-200 hover:text-white">
            Explore Now &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsFeature;
