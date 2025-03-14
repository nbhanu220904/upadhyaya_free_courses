import React, { useContext } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UserInputContext } from "@/app/_context/UserInputContext";

const TopicDescription = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (field, value) => {
    setUserCourseInput((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-4 p-5 mx-20 mt-5 lg:mx-44">
      {/* Input Topic */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          💡Select a topic to generate your course...
        </label>
        <Input
          placeholder="Enter topic title"
          className="border mt-2 border-gray-300 focus:ring-2 focus:ring-blue-500 p-3 rounded-lg shadow-sm"
          defaultValue={userCourseInput?.topic}
          onChange={(event) => handleInputChange("topic", event.target.value)}
        />
      </div>

      {/* Text Area for Description */}
      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700">
          {/* 📝Tell us more about your course, what you want to include in the course
                  and what you want to achieve with this course... */}
          📝Share details about your course and what you&#39;d like to include.
          (Optional)
        </label>
        <Textarea
          placeholder="Enter topic description"
          className="border mt-2 border-gray-300 focus:ring-2 focus:ring-blue-500 p-3 rounded-lg shadow-sm resize-none h-32"
          defaultValue={userCourseInput?.description}
          onChange={(event) =>
            handleInputChange("description", event.target.value)
          }
        />
      </div>
    </div>
  );
};

export default TopicDescription;
