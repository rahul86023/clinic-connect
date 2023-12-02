import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from '@mui/material';

export const PrivateLayout = () => {
  if (!localStorage.getItem("token")) {
    console.log("inside protected");
    return <Navigate to="/public/login" />;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ flex: '1' }}>
        <Navbar />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

// import { Navigate, Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// export const PrivateLayout = () => {
//   if (!localStorage.getItem("token")) {
//     console.log("inside protected");
//     return <Navigate to="/public/login" />;
//   }

//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer/>
//     </>
//   );
// };
