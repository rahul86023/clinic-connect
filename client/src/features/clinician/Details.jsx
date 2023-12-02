import React from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { detailsOfCliniciansThunk } from "./detailsSlice";
export const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { clinician, status, loading } = useSelector(
    (store) => store.detailsOfClinician
  );
  useEffect(() => {
    dispatch(detailsOfCliniciansThunk(id));
  }, []);
  return (
    <Container maxWidth="sm" className="text-center">
      <div className="max-w-screen-sm mx-auto my-4 p-4 bg-white shadow-lg rounded-lg text-left">
      <Typography variant="h4" component="h2" align="center" gutterBottom style={{ textDecoration: 'underline' }}>
  Details Of Clinician
</Typography>


        <div className="text-left">
          <p className="mb-2">
            <strong>Name:</strong> {clinician?.firstName} {clinician?.lastName}
          </p>
          <p className="mb-2">
            <strong>Email:</strong> {clinician?.person?.email} 
          </p>
          
         
          <p className="mb-2">
            <strong>Primary phone No.:</strong> {clinician?.primaryPhoneNumber}
          </p>
          <p className="mb-2">
            <strong>Address:</strong> {clinician?.address?.address1}
          </p>
          <p className="mb-2">
            <strong>City:</strong> {clinician?.address?.city}
          </p>
          <p className="mb-2">
            <strong>State:</strong> {clinician?.address?.state}
          </p>
          <p className="mb-2">
            <strong>Zip Code:</strong> {clinician?.address?.zipCode}
          </p>
          
          <p className="mb-2">
            <strong>Bio Link:</strong> {clinician?.bioLink}
          </p>
         
          
     
        
        </div>
      </div>
    </Container>
  );
  
};
