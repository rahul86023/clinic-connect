import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { createClientThunk } from "./createSlice";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  Box,
  Container,
  Grid,
} from "@mui/material";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    (store) => store.createClient
  );

  useEffect(() => {
    // if (isSuccess) {
    //   navigate("/admin");
    // }
  }, []);

  const initialValues = {
    firstName: "",
    lastName: "",
    clientFlag: true,
    gender: "",
    email: "",
    emailOptingIn: true,
    primaryPhoneNumber: "",
    secondaryPhoneNumber: "",
    guardian: "",
    emergencyContactNumber: "",
    dob: "",
    note: "",
    billingNote: "",
    insurance: {
      id: 44,
      name: "Anthem-Ohio",
      eapFlag: true,
      teletherapyModifier: "123",
    },
    insurancePolicyNumber: "some value",
    insuranceGroupNumber: "some value",
    insuredRelationship: "some value",
    insuredFirstName: "some value",
    insuredLastName: "some value",
    insuredDob: "some value",
    emergencyContactName: "some value",
    activeFlag: true,
    address: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    clinicians: [],
    location: {
      id: 4,
      name: "Anderson",
      code: "AD",
      address: {
        id: 746,
        address1: "",
        address2: "",
        state: "IL",
        city: "",
        zipCode: "",
      },
    },
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    email: Yup.string().email("Invalid email").required("This field is required"),
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

  const handleCreatingAdmin = (formValue) => {
    console.log(formValue);
    dispatch(createClientThunk(formValue));
    navigate("../");
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
            New Client Details
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleCreatingAdmin}
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
                    label="Email"
                    name="email"
                    type="email"
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
                    label="Address"
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
    </Container>
  );
};

export default Create;

// import React, { useEffect } from "react";
// import { Formik, Field, Form } from "formik";
// import { useSelector, useDispatch } from "react-redux";
// import { createClientThunk } from "./createSlice";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import {
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Container,
// } from "@mui/material";

// const Create = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isFetching, isSuccess, isError, errorMessage } = useSelector(
//     (store) => store.createClient
//   );

//   useEffect(() => {
//     // if (isSuccess) {
//     //   navigate("/admin");
//     // }
//   }, []);

//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     clientFlag: true,
//     gender: "",
//     email: "",
//     emailOptingIn: true,
//     primaryPhoneNumber: "",
//     secondaryPhoneNumber: "",
//     guardian: "",
//     emergencyContactNumber: "",
//     dob: "",
//     note: "",
//     billingNote: "",
//     insurance: {
//       id: 44,
//       name: "Anthem-Ohio",
//       eapFlag: true,
//       teletherapyModifier: "123",
//     },
//     insurancePolicyNumber: "some value",
//     insuranceGroupNumber: "some value",
//     insuredRelationship: "some value",
//     insuredFirstName: "some value",
//     insuredLastName: "some value",
//     insuredDob: "some value",
//     emergencyContactName: "some value",
//     activeFlag: true,
//     address: {
//       address1: "",
//       address2: "",
//       city: "",
//       state: "",
//       zipCode: "",
//     },
//     clinicians: [],
//     location: {
//       id: 4,
//       name: "Anderson",
//       code: "AD",
//       address: {
//         id: 746,
//         address1: "",
//         address2: "",
//         state: "IL",
//         city: "",
//         zipCode: "",
//       },
//     },
//   };

//   const validationSchema = Yup.object().shape({
//     firstName: Yup.string().required("This field is required"),
//     lastName: Yup.string().required("This field is required"),
//     email: Yup.string().email("Invalid email").required("This field is required"),
//     gender: Yup.string().required("This field is required"),
//     primaryPhoneNumber: Yup.string().required("This field is required"),
//     location: Yup.object().shape({
//       name: Yup.string().required("This field is required"),
//     }),
//     address: Yup.object().shape({
//       address1: Yup.string().required("This field is required"),
//       city: Yup.string().required("This field is required"),
//       state: Yup.string().required("This field is required"),
//       zipCode: Yup.string().required("This field is required"),
//     }),
//     dob: Yup.string().required("This field is required"),
//   });

//   const handleCreatingAdmin = (formValue) => {
//     console.log(formValue);
//     dispatch(createClientThunk(formValue));
//     navigate("../");
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           height: "100vh",
//         }}
//       >
//         <div className="card card-container bg-white p-6 rounded-md shadow-md">
//           <Typography
//             variant="h4"
//             component="h2"
//             align="center"
//             gutterBottom
//             sx={{ textDecoration: "underline" }}
//           >
//             New Client Details
//           </Typography>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleCreatingAdmin}
//           >
//             <Form>
//               <div className="form-group">
//                 <TextField
//                   label="First Name"
//                   name="firstName"
//                   type="text"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                 />
//               </div>
//               <div className="form-group">
//                 <TextField
//                   label="Last Name"
//                   name="lastName"
//                   type="text"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                 />
//               </div>
//               <div className="form-group">
//                 <TextField
//                   label="Email"
//                   name="email"
//                   type="email"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                 />
//               </div>
//               <div className="form-group">
//                 <TextField
//                   label="Gender"
//                   name="gender"
//                   type="text"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                 />
//               </div>
//               <div className="form-group">
//                 <TextField
//                   label="Primary Phone No."
//                   name="primaryPhoneNumber"
//                   type="text"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                 />
//               </div>
//               <div className="form-group">
//                 <TextField
//                   label="Address"
//                   name="address.address1"
//                   type="text"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                 />
//               </div>
//               <div className="form-group">
//                 <TextField
//                   label="City"
//                   name="address.city"
//                   type="text"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                 />
//               </div>
//               <div className="form-group">
//                 <TextField
//                   label="State"
//                   name="address.state"
//                   type="text"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                 />
//               </div>
//               <div className="form-group">
//                 <TextField
//                   label="ZipCode"
//                   name="address.zipCode"
//                   type="text"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                 />
//               </div>
//               <div className="form-group">
//                 <TextField
//                   label="Date Of Birth"
//                   name="dob"
//                   type="text"
//                   variant="outlined"
//                   margin="normal"
//                   fullWidth
//                 />
//               </div>

//               <div className="form-group">
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   size="small"
//                   fullWidth
//                 >
//                   Submit
//                 </Button>
//               </div>
//             </Form>
//           </Formik>
//         </div>
//       </Box>
//     </Container>
//   );
// };

// export default Create;
