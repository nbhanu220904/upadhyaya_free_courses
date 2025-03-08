import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Why you choose this application
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <WhyChooseCard
            image="/i1.png"
            title="Create Free Account"
            description="Gain instant access to a wealth of learning resources, including free and premium courses, without any upfront cost."
            linkText="Get Started"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <WhyChooseCard
            image="/i2.png"
            title="Monitor Learning Progress"
            description="Track your growth with personalized dashboards, progress reports, and course completion insights to stay on top of your learning journey."
            linkText="Sign Up for Free"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <WhyChooseCard
            image="/i3.png"
            title="Safe & Trusted"
            description="Learn with confidence on a secure, reliable platform designed to protect your data and ensure a seamless experience."
            linkText="Get The App"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/i4.png"
            title="24/7 Customer Support"
            description="Get expert assistance anytime, anywhere with our dedicated support team, ready to help you overcome any learning challenges."
            linkText="Learn More"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
