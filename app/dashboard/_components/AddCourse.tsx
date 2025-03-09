"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const AddCourse = () => {
  const { user } = useUser();

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl">
          Hello,{" "}
          <span className="font-bold text-blue-700">{user?.fullName}</span>
        </h1>
        <p className="text-sm text-gray-500">
          {/* Effortlessly create your course for free with AI-powered tools! */}
          Enjoy your free trial and generate courses effortlessly with AI!
        </p>
      </div>
      <Link href={"/create-course"}>
        <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 cursor-pointer px-8">
          + Create Course
        </Button>
      </Link>
    </div>
  );
};

export default AddCourse;
