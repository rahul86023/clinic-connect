import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsOfClientsThunk } from "./detailsSlice";

export const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { client, status, loading } = useSelector(
    (store) => store.detailsOfClient
  );

  useEffect(() => {
    dispatch(detailsOfClientsThunk(id));
  }, []);

  return (
    <div className="max-w-screen-sm mx-auto my-4 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Details Of Client</h2>

      <div>
        <p className="mb-2">
          Name: {client?.firstName} {client?.lastName}
        </p>
        <p className="mb-2">Primary Phone Number: {client?.primaryPhoneNumber}</p>
        <p className="mb-2">Address: {client?.address?.address1}</p>
        <p className="mb-2">City: {client?.address?.city}</p>
        <p className="mb-2">State: {client?.address?.state}</p>
        <p className="mb-2">Zip Code: {client?.address?.zipCode}</p>
        <p className="mb-2">Date Of Birth: {client?.dob}</p>
        <p className="mb-2">Default Location: {client?.location?.name}</p>
      </div>
    </div>
  );
};
