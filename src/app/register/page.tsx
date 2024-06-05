// src/components/Register.js
"use client";
import { useRegisterMutation } from "@/redux/api/authApi";
import { useAppDispatch } from "@/redux/app/hooks";
import { setToken, setUser } from "@/redux/features/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [register] = useRegisterMutation();
  const router = useRouter();
  const dispacth = useAppDispatch();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    // Add form submission logic here
    if (formData.password !== formData.confirmPassword) {
      setError("Password does not match");
      return;
    }
    console.log(formData);
    const userInfo = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    const res = await register(userInfo).unwrap();
    if (res.statusCode == 201) {
      Swal.fire("Successfully registerd ", "", "success");
      dispacth(
        setUser({ email: res.data.email, userId: res.data.id })
      );
      dispacth(setToken(res.data.token));

      router.push("/");
    } else {
      Swal.fire("Failed to register", "", "error");
    }
    console.log(res.data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Register
        </h2>
        <h2 className="text-red-600 mb-6 text-center">{error && error}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Register
            </button>
          </div>

          <div className="mt-6 flex gap-2 justify-between">
            <p className="font-bold text-blue-800">
              <Link href={`/`}>
                <span className="text-xl">&#8592;</span> Back to home{" "}
              </Link>{" "}
            </p>
            <p className="">
              Already have account ?
              <Link href={`/login`}>
                {" "}
                <button className="text-blue-600">Login</button>
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
