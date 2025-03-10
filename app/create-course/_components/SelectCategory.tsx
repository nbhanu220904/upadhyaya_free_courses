"use client";

import React from "react";
import categoryList from "@/app/_shared/CategoryList"; // ✅ Fix: "from" instead of "form"
import Image from "next/image";

const SelectCategory = () => {
  return (
    <div className="px-15 md:px-20 lg:px-20 ">
      <h2 className="my-5 mb-5 text-md text-blue-700 font-semibold ">
        Select the Course Category
      </h2>
      <div className="grid grid-cols-3 gap-10">
        {categoryList.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-3 p-5 border rounded-xl hover:bg-blue-50 hover:border-blue-500 hover:border-1 transition-all duration-200 cursor-pointer"
          >
            <Image
              src={category.icon}
              alt={category.name}
              // className="w-10 h-10"
              width={50}
              height={50}
            />
            <h2 className="text-lg font-medium">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
