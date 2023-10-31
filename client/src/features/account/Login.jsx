import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from './loginSlice'; // Import the actual path to your login slice
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (values, { setSubmitting, resetForm }) => {
    try {
      const action = await dispatch(loginUser({ username: values.username, password: values.password }));

      if (loginUser.fulfilled.match(action)) {
        resetForm();
        navigate('/private/client');
      }
    } catch (error) {
      // Handle login error, e.g., display an error message
    }
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {() => (
        <Form className="w-full max-w-md mx-auto">
          <h2 className="text-3xl font-extralight text-center mb-4">Welcome Back!</h2>
          <fieldset className="bg-white rounded p-4 shadow-md">
            <legend className="mb-4 text-xl font-semibold">Log In</legend>
            <ul>
              <li className="mb-4">
                <label htmlFor="username" className="block mb-2">Username:</label>
                <Field type="text" id="username" name="username" required className="w-full border rounded py-2 px-3" />
                <ErrorMessage name="username" component="div" className="text-red-600" />
              </li>
              <li className="mb-4">
                <label htmlFor="password" className="block mb-2">Password:</label>
                <Field type="password" id="password" name="password" required className="w-full border rounded py-2 px-3" />
                <ErrorMessage name="password" component="div" className="text-red-600" />
              </li>
              <li className="mb-4 flex items-center">
                <i />
                <a href="#" className="text-blue-500 hover:text-blue-600 ml-2">Forgot Password?</a>
              </li>
            </ul>
          </fieldset>
          <button type="submit" className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
