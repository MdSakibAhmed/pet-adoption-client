"use client";
import React, { useState } from "react";
import {
  HomeIcon,
  UserIcon,
  CogIcon,
  LogoutIcon,
} from "@heroicons/react/outline"; // Make sure to install @heroicons/react
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { logOut, selectToken } from "@/redux/features/auth/authSlice";
import { decodeToken } from "@/helpers/decodeToken";

const SideBar = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  let decoded;
  if (token) {
    decoded = decodeToken(token);
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  console.log(decoded);
  return (
    <div className="flex">
      <div
        className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button className="md:hidden" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <nav>
          <Link
            href="/"
            className="flex items-center p-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
          >
            <HomeIcon className="h-6 w-6 mr-3" />
            Home
          </Link>
          <Link
            href="/dashboard/myProfile"
            className="flex items-center p-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
          >
            <UserIcon className="h-6 w-6 mr-3" />
            Profile
          </Link>
          {decoded?.role == "USER" && (
            <>
              <Link
                href="/dashboard/myAdoptedPets"
                className="flex items-center p-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
              >
                <CogIcon className="h-6 w-6 mr-3" />
                My adopted pets
              </Link>
            </>
          )}
          {decoded?.role == "USER" && (
            <>
              <Link
                href="/dashboard/petManagement"
                className="flex items-center p-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
              >
                <LogoutIcon className="h-6 w-6 mr-3" />
                Pet management
              </Link>

              <Link
                href="/dashboard/adoptionRequest"
                className="flex items-center p-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
              >
                <LogoutIcon className="h-6 w-6 mr-3" />
                Pet adoption request
              </Link>

              <Link
                href="/dashboard/users"
                className="flex items-center p-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
              >
                <LogoutIcon className="h-6 w-6 mr-3" />
                User management
              </Link>
            </>
          )}
          <Link
            href="/dashboard/changePassword"
            className="flex items-center p-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
          >
            <UserIcon className="h-6 w-6 mr-3" />
            change password
          </Link>
          <button
            onClick={() => dispatch(logOut())}
            className="flex items-center p-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
          >
            <LogoutIcon className="h-6 w-6 mr-3" />
            Logout
          </button>
        </nav>
      </div>
      <div className="flex-1   p-6">
        {/* Main content goes here */}
        <button className="md:hidden mb-4" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-bold">Main Content</h1>
        {children}
      </div>
   
    </div>
  );
};

export default SideBar;
