import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import EditPropertyForm from "../EditPropertyForm/EditPropertyForm";

const EditRender = ({ selectedProperty, getProperties }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button variant="primary" onClick={handleShow}>
        Edit Property
      </button>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Property Editor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditPropertyForm
            selectedProperty={selectedProperty}
            getProperties={getProperties}
          />
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditRender;
