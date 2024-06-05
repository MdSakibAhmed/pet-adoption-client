"use client";
import UserInfoRow from "@/components/UserInfoRow/UserInfoRow";
import { useGetAllUsersQuery } from "@/redux/api/authApi";
import { TResponse } from "@/types/Tpet";
import React from "react";

const AllUsers = () => {
  const { data, isLoading } = useGetAllUsersQuery({});
  return (
    <div>
      <h1>All Users</h1>
      {!isLoading &&
        data.data.map((user: TResponse) => (
          <UserInfoRow key={user.id as string} user={user} />
        ))}
    </div>
  );
};

export default AllUsers;
