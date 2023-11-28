import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { editClientThunk } from "./editSlice";
import { detailsOfClientsThunk } from "./detailsSlice";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Typography,
  TextField,
  Button,
  Box,
  Container,
  Grid,
} from "@mui/material";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isSuccess, isError, errorMessage } = useSelector((store) => store.editClient);
  const { client, loading } = useSelector((store) => store.detailsOfClient);

  useEffect(() => {
    dispatch(detailsOfClientsThunk(id));
  }, [dispatch, id]);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    gender: Yup.string().required("This field is required"),
    primaryPhoneNumber: Yup.string().required("This field is required"),
    location: Yup.object().shape({
      name: Yup.string().required("This field is required"),
    }),
    address: Yup.object().shape({
      address1: Yup.string().required("This field is required"),
      city: Yup.string().required("This field is required"),
      state: Yup.string().required("This field is required"),
      zipCode: Yup.string().required("This field is required"),
    }),
    dob: Yup.string().required("This field is required"),
  });

  const handleEditingClient = (formValue) => {
    dispatch(editClientThunk({ id, formValue }))
      .then(() => {
        toast.success("Details Updated Successfully");
        navigate("/private/client");
      })
      .catch((error) => {
        toast.error("An error occurred while updating details: " + error.message);
      });
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div className="card card-container bg-white p-6 rounded-md shadow-md">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ textDecoration: "underline" }}
          >
            Edit Client Details
          </Typography>
          <Formik
            initialValues={client}
            validationSchema={validationSchema}
            onSubmit={handleEditingClient}
            enableReinitialize={true}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Gender"
                    name="gender"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Primary Phone No."
                    name="primaryPhoneNumber"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Address1"
                    name="address.address1"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="City"
                    name="address.city"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="State"
                    name="address.state"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="ZipCode"
                    name="address.zipCode"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Date Of Birth"
                    name="dob"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
      </Box>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};

export default Edit;
