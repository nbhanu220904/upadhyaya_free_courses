import React from "react";

const Offer = () => {
  return (
    <div className="flex items-center justify-center pt-24 pb-24 mb-20 bg-blue-100">
      <div className="text-center px-6">
        <h2 className="text-black text-2xl md:text-3xl font-semibold mb-4">
          Explore ultimate feature with premium
        </h2>
        <p className="text-gray-400 mb-8">
          Get access to exclusive features, priority support, and more
        </p>
        <button className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-medium mb-4 hover:bg-blue-700 transition-all duration-200">
          Upgrade Now
        </button>
      </div>
    </div>
  );
};

export default Offer;
