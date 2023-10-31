import React from "react";
import { NavLink,useNavigate} from "react-router-dom";
import { Navbar as RSNavbar, Nav, NavItem, NavLink as RSNavLink, NavbarText } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
  const { userData, status, loading } = useSelector(
    (store) => store?.user
  );
  console.log(userData, "userdata is printing");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleSignOut = () => {
    // Remove the token from local
    localStorage.removeItem("token");
    navigate('../login');
    
    // You may also want to dispatch an action to clear user data in the Redux store
    // dispatch(clearUserData()); // Replace with the actual action

    // Redirect the user to the sign-in page or any other desired location
    // history.push("/signin"); // If using React Router for navigation
  };

  return (
    <RSNavbar color="light" light expand="md">
      <div className="container mx-auto">
        <h5 className="navbar-brand">Clinic Connect</h5>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              to="/private/client"
              className="nav-link"
              activeClassName="active"
            >
              Client
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/private/clinician"
              className="nav-link"
              activeClassName="active"
            >
              Clinician
            </NavLink>
          </NavItem>
          <NavItem>
            {userData?.name}
          </NavItem>
          <NavItem>
            <button className="btn btn-link" onClick={handleSignOut}>Sign Out</button>
          </NavItem>
        </Nav>
      </div>
    </RSNavbar>
  );
};

export default Navbar;
