"use client";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import React, { SyntheticEvent, useState } from "react";
import Swal from "sweetalert2";

const ChangePassword = () => {
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [changePassword] = useChangePasswordMutation();
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(currentPass);

    if (newPass !== confirmPass) {
      // setError("Password does not match");
      return;
    }
    const res = await changePassword({
      currentPassword: currentPass,
      newPassword: newPass,
    }).unwrap();

    if (res.statusCode === 200) {
      Swal.fire("Password changed successfully", "", "success");
      setCurrentPass("");
      setNewPass("");
      setConfirmPass("");
    } else {
    }
    console.log(res);
  };
  return (
    <div className="w-1/3 ">
      <h2 className="text-center">Change password</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4 mt-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="username"
          >
            Current password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={currentPass}
            onChange={(e) => setCurrentPass(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            New password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
