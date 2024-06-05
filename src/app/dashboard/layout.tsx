"use client"
import SideBar from "@/components/SideBar/SideBar";
import { selectToken } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const token = useSelector(selectToken);
  const router = useRouter()

  if (!token) {
    return  router.push("/login");
  }
  return (
    <div>
      <SideBar> {children}</SideBar>
    </div>
  );
};

export default DashboardLayout;
