import React from "react";
// import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white py-10">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div>
            {/* Logo */}
            <h1 className="text-xl md:text-2xl font-bold">
              {/* <Image
            src="/logo2.png"
            alt="logo"
            width={200}
            height={200}
            priority
            /> */}
              <span className="text-3xl md:text-4xl text-blue-600">U</span>
              padhyaya
            </h1>
            {/* Description */}
            <p className="mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600">
              {/* Stay ahead in tech with our free and premium courses, designed to
              equip you with in-demand skills, enhance problem-solving, and
              accelerate career growth. */}
              A platform offering expertly curated free and premium courses to
              stay ahead in the tech landscape.
            </p>
          </div>
          {/* About Us Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">About Us</h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Our Mission</li>
              <li>How It Works</li>
              <li>Success Stories</li>
              <li>Careers</li>
              {/* <li>Popular Campaign</li> */}
            </ul>
          </div>
          {/* Learning & Support Links  */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Learning & Support
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Course Catalog</li>
              <li>FAQs</li>
              <li>Instructor Support</li>
              <li>Community Forum</li>
            </ul>
          </div>
          {/* Policies & Legal Links  */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Policies & Legal
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          {/* Contact Info  */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>📍 Location: Bhimavaram</li>
              <li>📞 Phone: +91 7671935390</li>
              <li>📧 Email: upadhyaya@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
