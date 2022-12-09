import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavLink from "react-bootstrap/esm/NavLink";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";

import "./NavBar.css";
import ContactUsButton from "../ContactUsButton/ContactUsButton";

const NavBar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Navbar
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
          <NavLink href="#features">Realtor's</NavLink>
          <NavLink href="#pricing">Properties</NavLink>
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
