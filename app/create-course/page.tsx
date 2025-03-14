"use client";

import { Button } from "@/components/ui/button";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import {
  HiClipboardDocumentCheck,
  HiLightBulb,
  HiMiniSquares2X2,
} from "react-icons/hi2";
import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOption from "./_components/SelectOption";
import { UserInputContext } from "../_context/UserInputContext";

// Define Stepper Option Type
interface StepperOption {
  id: number;
  name: string;
  icon: ReactElement;
}

// Define User Input Context Type
interface UserCourseInputType {
  category?: string;
  topic?: string;
  description?: string;
  level?: string;
  duration?: number;
  display?: string;
  noOfChapters?: number;
}

interface UserInputContextType {
  userCourseInput: UserCourseInputType;
  setUserCourseInput: React.Dispatch<React.SetStateAction<UserCourseInputType>>;
}

const CreateCourse: React.FC = () => {
  const StepperOptions: StepperOption[] = [
    {
      id: 1,
      name: "Category",
      icon: <HiMiniSquares2X2 />,
    },
    {
      id: 2,
      name: "Topic & Desc",
      icon: <HiLightBulb />,
    },
    {
      id: 3,
      name: "Options",
      icon: <HiClipboardDocumentCheck />,
    },
  ];

  const { userCourseInput, setUserCourseInput } =
    useContext<UserInputContextType>(UserInputContext);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    console.log("====================================");
    console.log(userCourseInput);
    console.log("====================================");
  }, [userCourseInput]);

  /**
   * Checks if the Next button should be enabled or disabled
   */
  const checkStatus = (): boolean => {
    if (!userCourseInput) return true;

    if (
      activeIndex === 0 &&
      (!userCourseInput.category || userCourseInput.category.length === 0)
    ) {
      return true;
    }

    if (activeIndex === 1 && !userCourseInput.topic) {
      return true;
    }

    if (
      activeIndex === 2 &&
      (userCourseInput.level === undefined ||
        userCourseInput.duration === undefined ||
        userCourseInput.display === undefined ||
        userCourseInput.noOfChapters === undefined)
    ) {
      return true;
    }

    return false;
  };

  return (
    <div>
      {/* Stepper Navigation */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-blue-700 font-medium">Create Course</h2>
        <div className="flex mt-10">
          {StepperOptions.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                <div
                  className={`bg-blue-100 p-3 rounded-full text-white ${
                    activeIndex >= index && "bg-blue-600"
                  }`}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:block md:text-sm">{item.name}</h2>
              </div>
              {index !== StepperOptions.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-blue-100 ${
                    activeIndex - 1 >= index &&
                    "bg-blue-600 transition-all duration-400"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Component Rendering */}
      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {activeIndex === 0 ? (
          <SelectCategory />
        ) : activeIndex === 1 ? (
          <TopicDescription />
        ) : (
          <SelectOption />
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10 px-10">
          <Button
            disabled={activeIndex === 0}
            className="bg-transparent text-blue-600 border-3 border-blue-600 hover:bg-gray-50 transition-all duration-300 cursor-pointer rounded-sm px-12 py-3"
            onClick={() => setActiveIndex((prev) => prev - 1)}
          >
            Previous
          </Button>
          {activeIndex < 2 && (
            <Button
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 cursor-pointer rounded-sm px-15 py-3"
              disabled={checkStatus()}
              onClick={() => setActiveIndex((prev) => prev + 1)}
            >
              Next
            </Button>
          )}
          {activeIndex === 2 && (
            <Button
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 cursor-pointer rounded-sm px-8 py-3"
              disabled={checkStatus()}
              onClick={() => setActiveIndex((prev) => prev + 1)}
            >
              Generate Course
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
