"use client";
import { useGetAdoptionRequestQuery } from "@/redux/api/petAdoptionRequest";
import { TResponse } from "@/types/Tpet";
import React from "react";

const AdoptedPets = () => {
  const { data, isLoading } = useGetAdoptionRequestQuery({});
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Pet name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Adopted date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Age
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {!isLoading &&
            data.data.map((request: TResponse) => (
              <tr key={request.id as string}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {request.pet.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {request.pet.photoURL}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {request.pet.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(request.pet.createdAt).toDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {request.pet.age}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdoptedPets;
