import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export const PrivateLayout = () => {
  if (!localStorage.getItem("token")) {
    console.log("inside protected");
    return <Navigate to="/public/login" />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};
