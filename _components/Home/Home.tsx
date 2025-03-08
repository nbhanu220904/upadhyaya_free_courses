"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
// import WhyChoose from "./WhyChoose/WhyChoose";
// import AnalyticsFeature from "./AnalyticsFeature/AnalyticsFeature";
// import Feature from "./Feature/Feature";
// import Price from "./Price/Price";
// import Offer from "./Offer/Offer";
import AOS from "aos";
import "aos/dist/aos.css";
import ResponsiveNav from "./NavBar/ResponsiveNav";
// import Footer from "./Footer/Footer";
// import Review from "./Review/Review";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  });

  return (
    <div className="overflow-hidden ">
      <ResponsiveNav />
      <Hero />
      {/* <WhyChoose /> */}
      {/* <AnalyticsFeature /> */}
      {/* <Feature /> */}
      {/* <Review /> */}
      {/* <Price /> */}
      {/* <Offer /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
