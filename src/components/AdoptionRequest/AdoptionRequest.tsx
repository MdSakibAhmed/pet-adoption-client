"use client";
import { useGetAdoptionRequestQuery } from "@/redux/api/petAdoptionRequest";
import React from "react";
import AdoptionRequestRow from "../AdoptionRequestRow/AdoptionRequestRow";
import { TResponse } from "@/types/Tpet";

const AdoptionRequest = () => {
  const { data, isLoading } = useGetAdoptionRequestQuery({});
  return (
    <div>
      {!isLoading &&
        data.data.map((request:TResponse) => (
          <AdoptionRequestRow key={request.id} request={request} />
        ))}
    </div>
  );
};

export default AdoptionRequest;
