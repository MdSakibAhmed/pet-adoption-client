import React from "react";
import AddPetModal from "@/components/AddPetModal/AddPetModal";
import PetList from "@/components/PetList/PetList";

const PetManagement = () => {
  return (
    <div>
      <AddPetModal />
      <PetList />
    </div>
  );
};

export default PetManagement;
