import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsOfClientsThunk } from "./detailsSlice";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { client, status, loading } = useSelector((store) => store.detailsOfClient);

  useEffect(() => {
    dispatch(detailsOfClientsThunk(id));

  }, []);
  console.log(client,"client setails ");

  return (
    <Container maxWidth="sm" className="text-center">
      <div className="max-w-screen-sm mx-auto my-4 p-4 bg-white shadow-lg rounded-lg text-left">
      <Typography variant="h4" component="h2" align="center" gutterBottom style={{ textDecoration: 'underline' }}>
  Details Of Client
</Typography>


        <div className="text-left">
          <p className="mb-2">
            <strong>Name:</strong> {client?.firstName} {client?.lastName}
          </p>
          <p className="mb-2">
            <strong>Email:</strong> {client?.email} 
          </p>
          
          <p className="mb-2">
            <strong>Gender:</strong> {client?.gender}
          </p> 
          <p className="mb-2">
            <strong>Primary phone No.:</strong> {client?.primaryPhoneNumber}
          </p>
          <p className="mb-2">
            <strong>Address:</strong> {client?.address?.address1}
          </p>
          <p className="mb-2">
            <strong>City:</strong> {client?.address?.city}
          </p>
          <p className="mb-2">
            <strong>State:</strong> {client?.address?.state}
          </p>
          <p className="mb-2">
            <strong>Zip Code:</strong> {client?.address?.zipCode}
          </p>
          <p className="mb-2">
            <strong>Date Of Birth:</strong> {client?.dob}
          </p>
     
        
        </div>
      </div>
    </Container>
  );
};
