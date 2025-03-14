"use client";

import React, { ReactNode } from "react";
import Header from "../dashboard/_components/Header";
import { UserInputContext } from "../_context/UserInputContext";

interface CreateCourseLayoutProps {
  children: ReactNode;
}

const CreateCourseLayout: React.FC<CreateCourseLayoutProps> = ({
  children,
}) => {
  const [userCourseInput, setUserCourseInput] = React.useState([]);
  return (
    <div>
      <UserInputContext.Provider
        value={{ userCourseInput, setUserCourseInput }}
      >
        <>
          <Header />
          {children}
        </>
      </UserInputContext.Provider>
    </div>
  );
};

export default CreateCourseLayout;
