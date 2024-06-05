"use client";
import { useGetSinglePetQuery } from "@/redux/api/petApi";
import { TPet } from "@/types/Tpet";
import { skipToken } from "@reduxjs/toolkit/query";
import Link from "next/link";
import React from "react";

const PetDetails = ({ petId }: { petId: string }) => {
  const { data, isLoading } = useGetSinglePetQuery(petId ?? skipToken);
  console.log(data);
  const {
    name,
    description,
    age,
    temperament,
    specialNeeds,
    breed,
    medicalHistory,
    location,
    gender,
  } = (data?.data as TPet) || {};
  return (
    <div className="container p-6">
      <h1>Dtailes</h1>
      {!isLoading && (
        <div className=" rounded-lg overflow-hidden shadow-lg m-4 bg-white hover:shadow-xl transition-shadow duration-300">
          <div className="px-6 py-4">
            <p className=" font-bold text-2xl mb-2 text-gray-800 ">{name}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="block text-gray-700 text-sm">
              gender: {gender}
            </span>

            <span className="block text-gray-700 text-sm">
              Description: {description}
            </span>
            <span className="block text-gray-700 text-sm">
              temperament: {temperament}
            </span>
            <span className="block text-gray-700 text-sm">
              specialNeeds: {specialNeeds}
            </span>
            <span className="block text-gray-700 text-sm">
              medicalHistory: {medicalHistory}
            </span>

            <span className="block text-gray-700 text-sm">Breed: {breed}</span>
            <span className="block text-gray-700 text-sm">Age:{age}</span>

            <span className="block text-gray-700 text-sm">
              Location: {location}
            </span>
          </div>
          <div className="px-6 py-4 flex justify-center">
            <Link
              href={`/adoptionRequest/${petId}`}
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Request adoption
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetDetails;
