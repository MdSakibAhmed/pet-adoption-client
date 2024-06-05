import PetDetails from '@/components/PetDetails/PetDetails';
import React from 'react';

const Pet = ({params}:{params:{petId:string}}) => {
    console.log(params.petId);

    return (
        <div className="bg-slate-300">
            <h1>pet </h1>
            <PetDetails petId={params.petId}/>
        </div>
    );
};

export default Pet;