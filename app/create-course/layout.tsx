import React, { ReactNode } from "react";
import Header from "../dashboard/_components/Header";

interface CreateCourseLayoutProps {
  children: ReactNode;
}

const CreateCourseLayout: React.FC<CreateCourseLayoutProps> = ({
  children,
}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default CreateCourseLayout;
