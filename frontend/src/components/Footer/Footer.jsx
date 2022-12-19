import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./Footer.css";

const Footer = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <Navbar bg="dark" variant="dark" expand="lg" className="navBar">
        <Navbar.Brand href="/">Morris Dealta Realty</Navbar.Brand>
        <Nav className="">
          <Nav.Link>
            <Link className="link" to="realtors">
              Realtors
            </Link>
          </Nav.Link>
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
        <Nav>
          {user ? (
            <div className="d-flex">
              <button className="navbutton" onClick={logoutUser}>
                Logout
              </button>
              <button className="navbutton" onClick={() => navigate("/admin")}>
                Admin
              </button>
            </div>
          ) : (
            <div>
              <button className="navbutton" onClick={() => navigate("/login")}>
                Login
              </button>
            </div>
          )}
        </Nav>
      </Navbar>
    </footer>
  );
};

export default Footer;
