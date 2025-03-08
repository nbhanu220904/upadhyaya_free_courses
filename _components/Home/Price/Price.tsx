import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-50">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Find Your Ideal Plan
      </h1>
      <div className="w-[90%] md:w-[80%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          // data-aos-delay="100"
        >
          <PriceCard
            price={0}
            plan="Free"
            features={[
              "Access to Selected Courses",
              "Hands-on Practice Modules",
              "Community Support",
              "Limited Learning Analytics",
              "Basic Quizzes & Assessments",
              "Regular Platform Updates",
            ]}
            highlight={false}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <PriceCard
            price={45}
            plan="Premium"
            features={[
              "Unlimited Course Access",
              "Advanced Hands-on Practice",
              "AI-Powered Learning Insights",
              "Personalized Learning Paths",
              "Premium Instructor Support",
              "Exclusive Webinars & Workshops",
              "Certification on Course Completion",
              "Lifetime Platform Updates",
            ]}
            highlight={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
