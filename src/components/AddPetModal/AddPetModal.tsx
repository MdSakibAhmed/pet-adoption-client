"use client";
import { useAddPetMutation } from "@/redux/api/petApi";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import Modal from "react-modal";

import Swal from "sweetalert2";

const AddPetModal = () => {
  const [saleQuantity, setSaleQuantity] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [saleDate, setSaleDate] = useState("");
  const [addPet] = useAddPetMutation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    gender: "",
    specialNeeds: "",
    size: "",
    location: "",
    // photoURL: "",
    description: "",
    temperament: "",
    medicalHistory: "",
    healthStatus: "",
    adoptionRequirements: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //   const handlePhotoChange = (e) => {
  //     const file = e.target.files[0];
  //     setFormData({
  //       ...formData,
  //       photoURL: file,
  //     });
  //   };
  console.log(formData);
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(formData);
    const res = await addPet(formData).unwrap();
    console.log(res);

    closeModal();
    if (res.statusCode == 201) {
      Swal.fire("Sucessfully added", "", "success");
    } else {
      Swal.fire("Failed to sell", "", "error");
    }
  };
  return (
    <div>
      <button onClick={openModal} className=" bg-blue-600 p-6 mb-6">
        Add pet{" "}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Sale Modal"
        style={{
          content: {
            width: "70%",
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
          <div className="bg-white p-8 rounded-lg shadow-lg w-full ">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Sale Product
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="flex gap-6 ">
                <div className="flex-1">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="type"
                    >
                      Type
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="type"
                      type="text"
                      placeholder="Type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="breed"
                    >
                      Breed
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="breed"
                      type="text"
                      placeholder="Breed"
                      name="breed"
                      value={formData.breed}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="age"
                    >
                      Age
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="age"
                      type="number"
                      placeholder="Age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="gender"
                    >
                      Gender
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="photoURL"
                    >
                      Photo
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="photoURL"
                      type="file"
                      accept="image/*"
                      //   onChange={handlePhotoChange}
                    />
                  </div>

                  {/* <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="gender"
                    >
                      Gender
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="gender"
                      type="text"
                      placeholder="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    />
                  </div> */}

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="specialNeeds"
                    >
                      specialNeeds
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="specialNeeds"
                      type="text"
                      placeholder="specialNeeds"
                      name="specialNeeds"
                      value={formData.specialNeeds}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="size"
                    >
                      Size
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="size"
                      name="size"
                      value={formData.breed}
                      onChange={handleChange}
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="location"
                    >
                      Location
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="location"
                      type="text"
                      placeholder="Location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="description"
                      type="text"
                      placeholder="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="medicalHistory"
                    >
                      medicalHistory
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="medicalHistory"
                      type="text"
                      placeholder="medicalHistory"
                      name="medicalHistory"
                      value={formData.medicalHistory}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="description"
                    >
                      Temperament
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="temperament"
                      type="text"
                      placeholder="temperament"
                      name="temperament"
                      value={formData.temperament}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="adoptionRequirements"
                    >
                      AdoptionRequirements
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="adoptionRequirements"
                      type="text"
                      placeholder="adoptionRequirements"
                      name="adoptionRequirements"
                      value={formData.adoptionRequirements}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="size"
                    >
                      Health status
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="healthStatus"
                      name="healthStatus"
                      value={formData.healthStatus}
                      onChange={handleChange}
                    >
                      <option value="vaccinated">Vaccinated</option>
                      <option value="spayed">Spayed</option>
                      <option value="neutered">Neutered</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Repeat the above div for each field */}

              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
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

export default AddPetModal;
