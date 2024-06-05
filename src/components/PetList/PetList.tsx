"use client";
import { useGetPetListQuery } from "@/redux/api/petApi";
import React from "react";
import PetListRow from "../PetListRow/PetListRow";
import { TResponse } from "@/types/Tpet";

const PetList = () => {
  const { data, isLoading } = useGetPetListQuery({});
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Age
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Health status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Update
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Delete
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {!isLoading &&
            data.data.map((pet:TResponse) => <PetListRow key={pet.id} pet={pet} />)}
        </tbody>
      </table>
    </div>
  );
};

export default PetList;
