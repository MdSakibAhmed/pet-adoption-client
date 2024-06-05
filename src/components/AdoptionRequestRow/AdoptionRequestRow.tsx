import React, { ChangeEvent, useState } from "react";
import { PencilAltIcon, CheckIcon, XIcon } from "@heroicons/react/outline";
import Swal from "sweetalert2";
import { useUpdateAdoptionRequestMutation } from "@/redux/api/petAdoptionRequest";
import { TResponse } from "@/types/Tpet";

const AdoptionRequestRow = ({ request }:TResponse) => {
  
  const [reqeustStatus, setRequestStatus] = useState(request?.status);

 const [updateRequest] = useUpdateAdoptionRequestMutation()

  const handleRoleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const updateStatus = e.target.value;
    console.log(e.target.value);
    Swal.fire({
      title: `Do you want to  ${
        updateStatus == "APPROVED" ? " approve request" : " reject the request"
      }?`,
      showDenyButton: true,
      confirmButtonText: `${updateStatus == "APPROVED" ? "Approve" : "Reject"}`,
      denyButtonText: `Cancle`,
    }).then(async (result) => {

      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const res = await updateRequest({
            requestId:request.id,
          status: updateStatus,
        }).unwrap();
        if (res.statusCode == 200) {
          Swal.fire("Updated", "", "success");
          setRequestStatus(updateStatus);
        } else {
          Swal.fire("Failed to update", "", "error");
        }
      } else if (result.isDenied) {
        Swal.close();
      }
    });
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <div className="flex-1">
        <div className="text-gray-900 font-medium">
          adoptor email:{request?.user.email}
        </div>
        <div className="text-gray-600">pet name: {request?.pet.name}</div>
        <div className="text-gray-600">
          pet ownershipExprieance: {request?.petOwnershipExperience}
        </div>
      </div>
      <div className="flex-1">
        <select
          value={reqeustStatus}
          onChange={handleRoleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="PENDING">Pending</option>

          <option value="APPROVED">Approved</option>
          <option value="REJECTED">Rejected</option>
        </select>
      </div>
      <div className="flex-1">
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <PencilAltIcon className="h-5 w-5 mr-2" />
          Edit Status
        </button>
      </div>
    </div>
  );
};

export default AdoptionRequestRow;
