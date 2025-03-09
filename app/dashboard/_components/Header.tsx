import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-md bg-white px-7 py-2">
      <Image src="/logo2.png" alt="logo" width={50} height={50} />
      <UserButton />
    </div>
  );
};

export default Header;
