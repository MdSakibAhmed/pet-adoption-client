"use client";
import FilterItem from "@/components/FilterItem/FilterItem";
import PetCard from "@/components/PetCard/PetCard";
import { useGetPetListQuery } from "@/redux/api/petApi";
import SearchInput from "@/shared/SearchInput";
import { TPet } from "@/types/Tpet";
import { skipToken } from "@reduxjs/toolkit/query";
import React, { ChangeEvent, SyntheticEvent, useState } from "react";

const Pets = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterBike, setFilterBike] = useState({});
  const [filters, setFilters] = useState({
    breed: "",
    age: "",
    specialNeeds: "",
  });
const {data,isLoading,refetch} = useGetPetListQuery({searchTerm:searchValue,...filterBike})

console.log(searchValue);
  console.log(data);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
    setFilterBike(filters)

  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const finalObj = Object.fromEntries(
      Object.entries(filters).filter(([, value]) => value)
    );
    console.log(finalObj);
    setFilterBike(finalObj);
  };
  const handleReset = () => {};
  return (
    <>
    <div className="container flex justify-between items-center bg-gray-100 mt-6 p-3">
      <FilterItem
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        filters={filters}
        handleReset={handleReset}
      />

      <SearchInput setSearchValue={setSearchValue} />


    </div>
<div className="grid grid-cols-4 container bg-slate-300 justify-center justify-items-center">
{ !isLoading && data.data.map((pet:TPet) => <PetCard key={pet.id} pet={pet}></PetCard>)}

</div>
    </>
  );
};

export default Pets;
