import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./NavBar.css";
import ContactUsButton from "../ContactUsButton/ContactUsButton";

const NavBar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-3"
    >
      <NavbarBrand href="/">Morris Delta Realty</NavbarBrand>
      <NavbarToggle aria-controls="responsive-navbar-nav" />
      <NavbarCollapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Realtors"
            menuVariant="dark"
          >
            <Link to="realtors/sophiamorris">Sophia Morris</Link>
            <Link href="realtors/davidvernon">David Vernon</Link>
          </NavDropdown>
          <Link className="p-1" to="realtors">
            Realtor's
          </Link>
          <Link className="p-1" to="properties">
            Properties
          </Link>
        </Nav>
        <ContactUsButton />
        <Nav>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavBar;
