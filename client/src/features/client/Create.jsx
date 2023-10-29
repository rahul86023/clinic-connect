import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { createClientThunk } from "./createSlice";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

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
    email: Yup.string().required("This field is required"),
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
  };

  return (
    <div className="col-md-12 login-form">
      <div className="card card-container bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">New Client Details</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleCreatingAdmin}
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
                htmlFor="last"
                className="block text-sm font-medium text-gray-700"
              >
                Date Of Birth
              </label>
              <Field
                name="dob"
                type="text"
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
};
export default Create;