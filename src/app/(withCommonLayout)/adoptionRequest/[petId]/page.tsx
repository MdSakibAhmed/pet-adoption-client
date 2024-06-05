"use client";
import { useAddAdoptionRequestMutation } from "@/redux/api/petAdoptionRequest";
import { useAppSelector } from "@/redux/app/hooks";
import { selectUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useState } from "react";
import Swal from "sweetalert2";

const AdoptionRequest = ({ params }: { params: { petId: string } }) => {
  const [petOwnershipExperience, setPetOwnershipExperience] = useState("");
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [adoptionRequest] = useAddAdoptionRequestMutation();
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      Swal.fire(
        "You must accept the terms and conditions to proceed",
        "",
        "warning"
      );
      return;
    }

    const requestInfo = {
      userId: user?.userId,
      petId: params.petId,
      petOwnershipExperience,
    };

    const res = await adoptionRequest(requestInfo).unwrap();
    console.log(res);
    if (res.statusCode == 201) {
      Swal.fire("Successfully submitted", "", "success");
      router.push("/");
    } else {
      Swal.fire("Failed...", "", "error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Request adoption</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user?.email}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="experience"
          >
            Describe your pet ownership experience
          </label>
          <textarea
            id="experience"
            name="experience"
            value={petOwnershipExperience}
            onChange={(e) => setPetOwnershipExperience(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <span className="ml-2 text-gray-700">
              I accept the terms and conditions
            </span>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdoptionRequest;
