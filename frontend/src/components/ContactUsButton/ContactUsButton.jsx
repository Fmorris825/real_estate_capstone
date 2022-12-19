import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ContactUsForm from "../CRUDCompoents/ContactUsForm/ContactUsForm";

import "./ContactUsButton.css";

const ContactUsButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="contact_btn" onClick={handleShow}>
        Contact Us
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Morris Delta Realty</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Header>
          <h6>Contact Us</h6>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ContactUsForm handleCloseForm={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ContactUsButton;
