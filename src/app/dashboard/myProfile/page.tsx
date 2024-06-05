"use client";
import { useGetProfileQuery, useUpdateProfileMutation } from "@/redux/api/authApi";
import { PencilAltIcon } from "@heroicons/react/outline";
import React, { SyntheticEvent, useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { data, isLoading } = useGetProfileQuery({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updateProfile] = useUpdateProfileMutation()
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const [username, setUsername] = useState(data?.data.username);
  const [email, setEmail] = useState(data?.data.email);
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    closeModal()
    console.log(email,username);
    const  res = await updateProfile({email,username}).unwrap()
    if(res.statusCode == 200){
        Swal.fire("Profile updated successfully","","success")
    }
    else {
        Swal.fire("Failed to update","","error")

    }
    console.log(res);

  };


  return (
    <div className="w-1/3 ">
      <button
        onClick={openModal}
        className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4"
      >
        <PencilAltIcon className="h-5 w-5 mr-2" />
        Edit Profile
      </button>
      <div className="mb-4 mt-4">
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
          value={data?.data.username}
          readOnly
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter your username"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={data?.data.email}
          readOnly
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter your email"
          required
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Sale Modal"
        style={{
          content: {
            width: "50%",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <div className="flex items-center justify-center  w-full bg-gray-100 p-6">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Send Request
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username:
                  <input
                    type="text"
                    value={username}
                     defaultValue={data?.data.username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                    min={1}
                  />
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username:
                  <input
                    type="text"
                    value={email}
                    defaultValue={data?.data.email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                    min={1}
                  />
                </label>
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
        </div>
      </Modal>
    </div>
  );
};

export default MyProfile;
