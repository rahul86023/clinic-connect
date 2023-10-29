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
      <div className="card card-container">
        <h2>Edit Client Details</h2>
        <Formik
          initialValues={client}
          validationSchema={validationSchema}
          onSubmit={handleEditingClient}
          enableReinitialize={true}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <Field name="gender" type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="primaryPhoneNumber">Primary Phone No.</label>
              <Field name="primaryPhoneNumber" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="address.address1">Address1</label>
              <Field name="address.address1" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="address.city">City</label>
              <Field name="address.city" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="address.state">State</label>
              <Field name="address.state" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="address.zipCode">ZipCode</label>
              <Field name="address.zipCode" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date Of Birth</label>
              <Field name="dob" type="text" className="form-control" />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                <span>Submit</span>
              </button>
            </div>
          </Form>
        </Formik>
      </div>

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
    </div>
  );
};

export default Edit;
