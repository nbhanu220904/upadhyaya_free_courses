import { Button } from "@/components/ui/button";
import React, { ReactElement } from "react";
import {
  HiClipboardDocumentCheck,
  HiLightBulb,
  HiMiniSquares2X2,
} from "react-icons/hi2";

const CreateCourse = () => {
  const StepperOptions: { id: number; name: string; icon: ReactElement }[] = [
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

  return (
    <div>
      {/* Steppers */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-blue-700 font-medium">Create Course</h2>
        <div className="flex mt-10">
          {StepperOptions.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                <div className="bg-blue-600 p-3 rounded-full text-white">
                  {item.icon}
                </div>
                <h2 className="hidden md:block md:text-sm">{item.name}</h2>
              </div>
              {index != StepperOptions?.length - 1 && (
                <div className="h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-blue-600"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Component */}

      {/* Next and Previous Button */}
      <Button className="bg-blue-600 hover:bg-blue-700 rounded-sm px-10 py-3">
        Next
      </Button>
    </div>
  );
};

export default CreateCourse;
