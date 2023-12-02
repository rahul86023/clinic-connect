import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { editClinicianThunk } from "./editSlice";
import { detailsOfCliniciansThunk } from "./detailsSlice";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { clinician, loading } = useSelector((store) => store.detailsOfClinician);

  useEffect(() => {
    dispatch(detailsOfCliniciansThunk(id));
    console.log(clinician,"printing details of clinicians")
  }, [dispatch, id]);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    bioLink: Yup.string().required("This field is required"),
    primaryPhoneNumber: Yup.string().required("This field is required"),
    person: Yup.object().shape({
      email: Yup.string().required("This field is required"),
    }),
    address: Yup.object().shape({
      address1: Yup.string().required("This field is required"),
      state: Yup.string().required("This field is required"),
      city: Yup.string().required("This field is required"),
      zipCode: Yup.string().required("This field is required"),
    }),
  });

  const handleEditingClinician = (formValue) => {
    console.log(formValue);
    dispatch(editClinicianThunk({ id, formValue }))
      .then(() => {
        toast.success("Details Updated Successfully");
        navigate("/private/clinician");
      })
      .catch((error) => {
        toast.error("An error occurred while updating details: " + error.message);
      });
  };
  return (
    <div className="col-md-12 login-form">
      <div className="card card-container bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Edit Clinician Details</h2>
        <Formik
    initialValues={clinician}
             validationSchema={validationSchema}
           onSubmit={handleEditingClinician}
           enableReinitialize
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
                name="person.email"
                type="email"
                className="block w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            {/* <div className="form-group">
              <label
                htmlFor="last"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <Field
                name="person.gender"
                type="text"
                className="block w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div> */}

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
                name="person.secret"
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
  //   <div className="col-md-12 login-form">
  //     <div className="card card-container">
  //       <h2>Edit Clinician Details</h2>
  //       <Formik
  //         initialValues={clinician}
  //         validationSchema={validationSchema}
  //         onSubmit={handleEditingClinician}
  //         enableReinitialize={true}
  //       >
  //         <Form>
  //           <div className="form-group">
  //             <label htmlFor="firstName">First Name</label>
  //             <Field name="firstName" type="text" className="form-control" />
  //           </div>
  //           <div className="form-group">
  //             <label htmlFor="lastName">Last Name</label>
  //             <Field name="lastName" type="text" className="form-control" />
  //           </div>

  //           <div className="form-group">
  //             <label htmlFor="primaryPhoneNumber">Primary Phone No.</label>
  //             <Field name="primaryPhoneNumber" type="text" className="form-control" />
  //           </div>
  //           <div className="form-group">
  //             <label htmlFor="address.address1">Address1</label>
  //             <Field name="address.address1" type="text" className="form-control" />
  //           </div>
  //           <div className="form-group">
  //             <label htmlFor="address.city">City</label>
  //             <Field name="address.city" type="text" className="form-control" />
  //           </div>
  //           <div className="form-group">
  //             <label htmlFor="address.state">State</label>
  //             <Field name="address.state" type="text" className="form-control" />
  //           </div>

  //           <div className="form-group">
  //             <label htmlFor="address.zipCode">ZipCode</label>
  //             <Field name="address.zipCode" type="text" className="form-control" />
  //           </div>
  //           <div className="form-group">
  //             <label htmlFor="bioLink">Bio Link</label>
  //             <Field name="bioLink" type="text" className="form-control" />
  //           </div>
  //           <div className="form-group">
  //             <label htmlFor="person.email">Email</label>
  //             <Field name="person.email" type="email" className="form-control" />
  //           </div>

  //           <div className="form-group">
  //             <button type="submit" className="btn btn-primary btn-block">
  //               <span>Submit</span>
  //             </button>
  //           </div>
  //         </Form>
  //       </Formik>
  //     </div>

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
  //   </div>
  // );
};
