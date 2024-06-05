"use client";
import { selectToken } from "@/redux/features/auth/authSlice";
import { TChildren } from "@/types/Tpet";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const PetDetailsLayout = ({ children }:TChildren) => {
  const token = useSelector(selectToken);
  const router = useRouter();
  if (!token) {
    return router.push("/login");
  }
  return <div>{children}</div>;
};

export default PetDetailsLayout;
