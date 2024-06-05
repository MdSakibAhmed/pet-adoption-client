import React, { ChangeEvent, useState } from "react";
import { PencilAltIcon, CheckIcon, XIcon } from "@heroicons/react/outline";
import { useUpdateProfileMutation } from "@/redux/api/authApi";
import Swal from "sweetalert2";
import { TResponse } from "@/types/Tpet";

const UserInfoRow = ({ user }:TResponse) => {
  const { username, email, isActive, role,id } = user || {};
  const [userRole, setUserRole] = useState(role);
  const [active, setActive] = useState(isActive);
  const [updateUser] = useUpdateProfileMutation();

  const handleRoleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const updateRole = e.target.value;
    console.log(e.target.value);
    Swal.fire({
      title: `Do you want to make ${
        role == "USER" ? " the user admin" : " the admin a user"
      }?`,
      showDenyButton: true,
      confirmButtonText: `${role == "USER" ? "Make admin" : "Make user"}`,
      denyButtonText: `Cancle`,
    }).then(async (result) => {
      console.log(e.target.value, updateRole);

      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const res = await updateUser({
          id,
          role: updateRole,
        }).unwrap();
        if (res.statusCode == 200) {
          Swal.fire("Updated", "", "success");
          setUserRole(updateRole);
        } else {
          Swal.fire("Failed to update", "", "error");
        }
      } else if (result.isDenied) {
        Swal.close();
      }
    });
  };

  const toggleActive = async () => {
    Swal.fire({
      title: `Do you want to ${
        active ? "deactive the user" : "active the user"
      }?`,
      showDenyButton: true,
      confirmButtonText: `${active ? "Deactive" : "Active"}`,
      denyButtonText: `Cancle`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log(id);
        const res = await updateUser({
          id,
          isActive: !active,
        }).unwrap();
        if (res.statusCode == 200) {
          Swal.fire("Updated", "", "success");
          setActive(!active);
        } else {
          Swal.fire("Failed to update", "", "error");
        }
      } else if (result.isDenied) {
        Swal.close();
      }
    });
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <div className="flex-1">
        <div className="text-gray-900 font-medium">{username}</div>
        <div className="text-gray-600">{email}</div>
      </div>
      <div className="flex-1">
        <select
          value={userRole}
          onChange={handleRoleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>
      </div>
      <div className="flex-1">
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <PencilAltIcon className="h-5 w-5 mr-2" />
          Edit Role
        </button>
      </div>
      <div className="flex-1">
        <button
          onClick={toggleActive}
          className={`flex items-center px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            active
              ? "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"
              : "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
          }`}
        >
          {active ? (
            <>
              <CheckIcon className="h-5 w-5 mr-2" />
              Active
            </>
          ) : (
            <>
              <XIcon className="h-5 w-5 mr-2" />
              Inactive
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default UserInfoRow;
