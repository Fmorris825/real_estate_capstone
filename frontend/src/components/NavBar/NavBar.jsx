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
      className="navBar"
    >
      <NavbarBrand href="/">
        <div className="brandnav">Morris Delta Realty</div>
      </NavbarBrand>
      <NavbarToggle aria-controls="responsive-navbar-nav" />
      <NavbarCollapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown
            className="link"
            id="nav-dropdown-dark-example"
            title="Realtors"
            menuVariant="dark"
          >
            <NavDropdown.Item>
              <Link className="link" to="realtors">
                All Realtors
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link className="link" to="realtors/sophiamorris">
                Sophia Morris
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link className="link" to="realtors/davidvernon">
                David Vernon
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <Link className="p-1 link" to="properties">
              Properties
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="p-1 link" to="mapsandneighborhoods">
              Maps & Neighborhoods
            </Link>
          </Nav.Link>
        </Nav>
        <ContactUsButton />
        <Nav>
          {user ? (
            <div>
              <button className="navbutton" onClick={logoutUser}>
                Logout
              </button>
              <button className="navbutton" onClick={() => navigate("/admin")}>
                Admin
              </button>
            </div>
          ) : null
          // <button className="navbutton" onClick={() => navigate("/login")}>
          //   Login
          // </button>
          }
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavBar;
