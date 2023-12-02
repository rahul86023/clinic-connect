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
    <div className="col-md-12 login-form">
      <div className="card card-container bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">New Clinician Details</h2>
        <Formik
         initialValues={initialValues}
                   validationSchema={validationSchema}
                  onSubmit={handleCreatingClinician}
        >
          <Form>
            <div className="form-group">
              <label
                htmlFor="Name"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              
              <Field
                name="firstName"
                type="text"
                className="block w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="last"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <Field
                name="lastName"
                type="text"
                className="block w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="block w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="last"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <Field
                name="gender"
                type="text"
                className="block w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="last"
                className="block text-sm font-medium text-gray-700"
              >
                Primary Phone No.
              </label>
              <Field
                name="primaryPhoneNumber"
                type="text"
                className="block w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="last"
                className="block text-sm font-medium text-gray-700"
              >
                Address1
              </label>
           
              <Field
                name="address.address1"
                type="text"
                className="block w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="last"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              
              <Field
                name="address.city"
                type="text"
                className="block w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="last"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <Field
                name="address.state"
                type="text"
                className="block w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="last"
                className="block text-sm font-medium text-gray-700"
              >
                ZipCode
              </label>
              <Field
                name="address.zipCode"
                type="text"
                className="block w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="bioLink"
                className="block text-sm font-medium text-gray-700"
              >
               Bio Link
              </label>
           
 
              <Field
                name="bioLink"
                type="text"
                className="block w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
               Email
              </label>
          

 
              <Field
                name="person.email"
                type="email"
                className="block w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-gray-700"
              >
               Password
              </label>
             
 
              <Field
                name="person.secret"
                type="password"
                className="block w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="passowrd"
                className="block text-sm font-medium text-gray-700"
              >
               Confirm Password
              </label>
           
             
              <Field
                name="passowrd"
                type="passowrd"
                className="block w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="w-full mt-4 p-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-700"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
  // return (
  //   <Container maxWidth="lg">
  //     <Box
  //       sx={{
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         minHeight: "100vh",
  //       }}
  //     >
  //       <div className="card card-container bg-white p-6 rounded-md shadow-md">
  //         <Typography
  //           variant="h4"
  //           component="h2"
  //           align="center"
  //           gutterBottom
  //           sx={{ textDecoration: "underline" }}
  //         >
  //           New Clinician Details
  //         </Typography>
  //         <Formik
  //           initialValues={initialValues}
  //           validationSchema={validationSchema}
  //           onSubmit={handleCreatingClinician}
  //         >
  //           <Form>
  //             <Grid container spacing={2}>
  //               <Grid item xs={12}>
  //                 <TextField
  //                   label="First Name"
  //                   name="firstName"
  //                   type="text"
  //                   variant="outlined"
  //                   margin="normal"
  //                   fullWidth
  //                 />
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <TextField
  //                   label="Last Name"
  //                   name="lastName"
  //                   type="text"
  //                   variant="outlined"
  //                   margin="normal"
  //                   fullWidth
  //                 />
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <TextField
  //                   label="Primary Phone No."
  //                   name="primaryPhoneNumber"
  //                   type="text"
  //                   variant="outlined"
  //                   margin="normal"
  //                   fullWidth
  //                 />
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <TextField
  //                   label="Address1"
  //                   name="address.address1"
  //                   type="text"
  //                   variant="outlined"
  //                   margin="normal"
  //                   fullWidth
  //                 />
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <TextField
  //                   label="City"
  //                   name="address.city"
  //                   type="text"
  //                   variant="outlined"
  //                   margin="normal"
  //                   fullWidth
  //                 />
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <TextField
  //                   label="State"
  //                   name="address.state"
  //                   type="text"
  //                   variant="outlined"
  //                   margin="normal"
  //                   fullWidth
  //                 />
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <TextField
  //                   label="ZipCode"
  //                   name="address.zipCode"
  //                   type="text"
  //                   variant="outlined"
  //                   margin="normal"
  //                   fullWidth
  //                 />
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <TextField
  //                   label="Bio Link"
  //                   name="bioLink"
  //                   type="text"
  //                   variant="outlined"
  //                   margin="normal"
  //                   fullWidth
  //                 />
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <TextField
  //                   label="Email"
  //                   name="person.email"
  //                   type="email"
  //                   variant="outlined"
  //                   margin="normal"
  //                   fullWidth
  //                 />
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <TextField
  //                   label="Password"
  //                   name="person.secret"
  //                   type="password"
  //                   variant="outlined"
  //                   margin="normal"
  //                   fullWidth
  //                 />
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <TextField
  //                   label="Confirm Password"
  //                   name="passowrd"
  //                   type="password"
  //                   variant="outlined"
  //                   margin="normal"
  //                   fullWidth
  //                 />
  //               </Grid>
  //               <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
  //                 <Button
  //                   type="submit"
  //                   variant="contained"
  //                   color="primary"
  //                   size="small"
  //                 >
  //                   Submit
  //                 </Button>
  //               </Grid>
  //             </Grid>
  //           </Form>
  //         </Formik>
  //       </div>
  //     </Box>
  //     <ToastContainer
  //       position="top-right"
  //       autoClose={3000}
  //       hideProgressBar={false}
  //       newestOnTop={false}
  //       closeOnClick
  //       rtl={false}
  //       pauseOnFocusLoss
  //       draggable
  //       pauseOnHover
  //     />
  //   </Container>
  // );
};
