import React from "react";
import { FaCheck, FaCrown } from "react-icons/fa";

type Props = {
  price: number;
  plan: string;
  features: string[];
  highlight: boolean;
};

const PriceCard = ({ price, plan, features, highlight }: Props) => {
  return (
    <div
      className={`p-12 rounded-lg shadow-lg border flex flex-col justify-between h-full ${
        highlight ? "bg-white border-yellow-500" : "bg-white border-gray-300"
      }`}
    >
      <div>
        {highlight && (
          <div className="flex justify-center mb-4">
            <FaCrown className="text-yellow-600 text-3xl" />
          </div>
        )}
        <p
          className={`mt-4 text-xl font-semibold text-center ${
            highlight ? "text-yellow-700" : "text-blue-600"
          }`}
        >
          {plan}
        </p>
        <div className="font-medium text-3xl mt-4 text-center">
          ${price === 0 ? "0" : price}
          {price !== 0 && <span className="text-xl">/mo</span>}
        </div>
        <p className="mt-2 text-gray-600 text-center">Per user</p>
        <div className="mt-8 space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center">
                <FaCheck className="text-green-600" />
              </div>
              <p
                className={`text-sm font-semibold ${
                  highlight ? "text-gray-700" : "text-gray-700"
                }`}
              >
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Button Aligned at Bottom */}
      <div className="mt-8 text-center">
        <button
          className={`px-6 py-3 rounded-lg text-white font-semibold w-full ${
            highlight
              ? "bg-yellow-600 hover:bg-yellow-700 transition-all duration-200"
              : "bg-blue-600 hover:bg-blue-700 transition-all duration-200"
          }`}
        >
          {highlight ? "Upgrade Now" : "Get Started"}
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
