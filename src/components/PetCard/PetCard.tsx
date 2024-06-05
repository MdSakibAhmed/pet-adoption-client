import { TPet } from '@/types/Tpet';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PetCard = ({pet}:{pet:TPet}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white hover:shadow-xl transition-shadow duration-300">
  
      <div className="px-6 py-4">
    
        <p className=" font-bold text-2xl mb-2 text-gray-800 ">
         {pet.name}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="block text-gray-700 text-sm">Description: {pet.description}</span>
        <span className="block text-gray-700 text-sm">Breed: {pet.breed}</span>
        <span className="block text-gray-700 text-sm">Age:{pet.age}</span>

        <span className="block text-gray-700 text-sm">Location: {pet.location}</span>
      </div>
      <div className="px-6 py-4 flex justify-center">
        <Link
         href={`/pet/${pet.id}`}
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          View Full Details
        </Link>
      </div>
    </div>
  );
};

export default PetCard;
