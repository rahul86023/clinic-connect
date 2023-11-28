import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { createClinicianThunk } from "./createSlice";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
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

export const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    (store) => store.createClinician
  );

  useEffect(() => {
    // if (isSuccess) {
    //   navigate("/admin");
    // }
  }, []);

  const initialValues = {
    firstName: "",
    lastName: "",
    primaryPhoneNumber: "",
    address: {
      address1: "",
      city: "",
      state: "",
      zipCode: "",
    },
    bioLink: "",
    person: {
      email: "",
      secret: "",
    },
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    bioLink: Yup.string().required("This field is required"),
    primaryPhoneNumber: Yup.string().required("This field is required"),
    address: Yup.object().shape({
      address1: Yup.string().required("This field is required"),
      city: Yup.string().required("This field is required"),
      state: Yup.string().required("This field is required"),
      zipCode: Yup.string().required("This field is required"),
    }),
    person: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("This field is required"),
      secret: Yup.string().required("This field is required"),
    }),
  });

  const handleCreatingClinician = async (formValue) => {
    try {
      await dispatch(createClinicianThunk(formValue));
      toast.success("Clinician added Successfully");
      navigate("/private/clinician");
    } catch (error) {
      toast.error("An error occurred while adding Clinician: " + error.message);
    }
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
            New Clinician Details
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleCreatingClinician}
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
                    label="Bio Link"
                    name="bioLink"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    name="person.email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    name="person.secret"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Confirm Password"
                    name="passowrd"
                    type="password"
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
