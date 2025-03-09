"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import {
  HiOutlineHome,
  HiOutlinePower,
  HiOutlineShieldCheck,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";
import { usePathname } from "next/navigation";
// import { HiLogout } from "react-icons/hi";

const SideBar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <HiOutlineHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineSquare3Stack3D />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <HiOutlineShieldCheck />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <HiOutlinePower />,
      path: "/dashboard/logout",
    },
  ];

  const path = usePathname();

  return (
    <div className="fixed h-full md:w-64 p-5 shadow-lg">
      <h1 className="text-xl md:text-3xl font-bold">
        {/* <Image src="/logo2.png" alt="logo" width={200} height={200} priority /> */}
        <span className="text-3xl md:text-4xl text-blue-600">U</span>padhyaya
      </h1>
      <hr className="my-5" />
      <ul>
        {Menu.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path}
              className={`flex items-center gap-4 text-gray-600 p-3 mt-2 cursor-pointer hover:bg-blue-50 hover:text-blue-800 rounded-lg ${
                item.path == path && "bg-blue-100 text-black"
              }`}
            >
              <div className="text-2xl">{item.icon}</div>
              <h2>{item.name}</h2>
            </Link>
          </li>
        ))}
      </ul>

      {/* Progress Component */}
      <div className="absolute bottom-10 w-[80%]">
        <Progress className="text-blue-700" value={33} />
        <h2 className="text-sm my-2">3 out of 5 Courses Created</h2>
        <h2 className="text-xs text-gray-500">
          Upgrade your plan to get Access for Advanced Portal
        </h2>
      </div>
    </div>
  );
};

export default SideBar;
