import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { editClientThunk } from "./editSlice";
import { detailsOfClientsThunk } from "./detailsSlice";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isSuccess, isError, errorMessage } = useSelector((store) => store.editClient);
  const { client, loading } = useSelector((store) => store.detailsOfClient);

 /* The `useEffect` hook is used to perform side effects in a functional component. In this case, it is
 dispatching the `detailsOfClientsThunk` action to fetch the details of a client with the given `id`
 when the component mounts. The empty dependency array `[]` as the second argument ensures that the
 effect is only run once, similar to the `componentDidMount` lifecycle method in class components. */
  // useEffect(() => {
  //   dispatch(detailsOfClientsThunk(id));
  // }, []);
  useEffect(() => {
    dispatch(detailsOfClientsThunk(id));

  }, []);

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
    console.log(formValue);
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
    <div className="col-md-12 login-form">
      <div className="card card-container bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Edit Client Details</h2>
        <Formik
          initialValues={client}
          enableReinitialize  // Allow the form to reinitialize when initialValues change
          validationSchema={validationSchema}
          onSubmit={handleEditingClient}
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

export default Edit;