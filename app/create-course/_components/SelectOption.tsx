import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const SelectOption = () => {
  return (
    <div className="flex items-center justify-center px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <label className="text-sm px-2 py-1">🎓Difficulty Level</label>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm px-2 py-1">🕒Course Duration</label>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hour">1 Hour</SelectItem>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="3 Hours">More than 3 Hours</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm px-2 py-1">▶️Display Video</label>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
              {/* <SelectItem value="3 Hours">More than 3 Hours</SelectItem> */}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label>📖No of Chapters</label>
          <Input type="number" />
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
