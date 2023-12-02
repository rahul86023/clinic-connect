import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from './registerSlice';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(null);

  const { isFetching, isSuccess, isError, errorMessage } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await dispatch(registerUser({ username, name, password }));

      if (isSuccess) {
        navigate('./login');
      }
    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/img/clinic-connect.png" alt="Clinic Connect" style={{ height: '100px', borderRadius: '0px', marginTop: '0px' }} />

      <form className="w-full max-w-md mx-auto mt-8" onSubmit={handleRegister}>
        <h2 className="text-3xl font-extralight text-center mb-4">Sign Up!</h2>
        <fieldset className="bg-white rounded p-4 shadow-md">
          <legend className="mb-4 text-xl font-semibold">Create Account</legend>
          <ul>
            <li className="mb-4">
              <label htmlFor="username" className="block mb-2">Username:</label>
              <input type="text" id="username" required className="w-full border rounded py-2 px-3" value={username} onChange={(e) => setUsername(e.target.value)} />
            </li>
            <li className="mb-4">
              <label htmlFor="name" className="block mb-2">Name:</label>
              <input type="text" id="name" required className="w-full border rounded py-2 px-3" value={name} onChange={(e) => setName(e.target.value)} />
            </li>
            <li className="mb-4">
              <label htmlFor="password" className="block mb-2">Password:</label>
              <input type="password" id="password" required className="w-full border rounded py-2 px-3" value={password} onChange={(e) => setPassword(e.target.value)} />
            </li>
          </ul>
        </fieldset>
        <button type="submit" className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          {isFetching ? 'Submitting...' : 'Submit'}
        </button>
        {isError && <p className="text-red-500">{errorMessage}</p>}
        {formError && <p className="text-red-500">{formError}</p>}
      </form>

      <div className="mt-4 flex items-center">
        <i />
        <Link to="./login" className="text-blue-500 hover:text-blue-600 ml-2">Already have an Account?</Link>
      </div>
    </div>
  );
};

export default Register;


// /* The code is a React component called "Register" that represents a registration form. It imports
// necessary dependencies from React, React Redux, and React Router. */
// import React, { useState,useEffect} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {  registerUser } from './registerSlice';
// import { Link,useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [formError, setFormError] = useState(null);

//   const { isFetching, isSuccess, isError, errorMessage } = useSelector((state) => state.register);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     try {
//       await dispatch(registerUser({ username, name, password }));

//       if (isSuccess) {
//         navigate('./login');
//       }
//     } catch (error) {
//       setFormError(error.message);
//     }
//   };

//   // useEffect(() => {
//   //   return () => {
//   //     dispatch(clearState());
//   //   };
//   // }, [dispatch]);

//   return (
//     <form className="w-full max-w-md mx-auto" onSubmit={handleRegister}>
//       <h2 className="text-3xl font-extralight text-center mb-4">Sign Up!</h2>
//       <fieldset className="bg-white rounded p-4 shadow-md">
//         <legend className="mb-4 text-xl font-semibold">Create Account</legend>
//         <ul>
//           <li className="mb-4">
//             <label htmlFor="username" className="block mb-2">Username:</label>
//             <input type="text" id="username" required className="w-full border rounded py-2 px-3" value={username} onChange={(e) => setUsername(e.target.value)} />
//           </li>
//           <li className="mb-4">
//             <label htmlFor="name" className="block mb-2">Name:</label>
//             <input type="text" id="name" required className="w-full border rounded py-2 px-3" value={name} onChange={(e) => setName(e.target.value)} />
//           </li>
//           <li className="mb-4">
//             <label htmlFor="password" className="block mb-2">Password:</label>
//             <input type="password" id="password" required className="w-full border rounded py-2 px-3" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </li>
//           <li className="mb-4 flex items-center">
//                 <i />
//                 <Link to="./login" className="text-blue-500 hover:text-blue-600 ml-2">Already have an Account?</Link>
//               </li>
//         </ul>
//       </fieldset>
//       <button type="submit" className="w-full mt-4 bg-blue-500 hover.bg-blue-600 text-white font-semibold py-2 px-4 rounded">
//         {isFetching ? 'Submitting...' : 'Submit'}
//       </button>
//       {isError && <p>Error: {errorMessage}</p>}
//       {formError && <p>Error: {formError}</p>}
//     </form>
//   );
// };

// export default Register;
