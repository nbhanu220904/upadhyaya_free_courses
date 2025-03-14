"use client";

import React, { useContext } from "react";
import categoryList from "@/app/_shared/CategoryList";
import Image from "next/image";
import { UserInputContext } from "@/app/_context/UserInputContext";

// Define Type for Category Item
interface CategoryItem {
  id: number;
  name: string;
  icon: string;
}

// Define Context Type
interface UserCourseInputType {
  userCourseInput: { category?: string };
  setUserCourseInput: React.Dispatch<
    React.SetStateAction<{ category?: string }>
  >;
}

const SelectCategory: React.FC = () => {
  const { userCourseInput, setUserCourseInput } =
    useContext<UserCourseInputType>(UserInputContext);

  const handleCategoryChange = (category: string) => {
    setUserCourseInput((prevState) => ({
      ...prevState,
      category: category,
    }));
  };

  return (
    <div className="px-15 md:px-20 lg:px-20">
      <h2 className="my-5 mb-5 text-xl text-blue-700 font-semibold">
        Select the Course Category
      </h2>
      <div className="grid grid-cols-3 gap-10">
        {categoryList.map((item: CategoryItem) => (
          <div
            key={item.id}
            className={`flex flex-col items-center gap-3 p-5 border rounded-xl hover:bg-blue-50 transition-all duration-200 cursor-pointer ${
              userCourseInput?.category === item.name &&
              "bg-blue-100 text-black"
            }`}
            onClick={() => handleCategoryChange(item.name)}
          >
            <Image src={item.icon} alt={item.name} width={50} height={50} />
            <h2 className="text-lg font-medium">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
