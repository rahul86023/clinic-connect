


import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar as RSNavbar, Nav, NavItem, NavLink as RSNavLink, NavbarText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
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
        </Nav>
      </div>
    </RSNavbar>
  );
};

export default Navbar;
