import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import EditPropertyForm from "../EditPropertyForm/EditPropertyForm";

const EditPropertyModal = ({
  selectedProperty,
  getProperties,
  handleCloseProp,
  showProp,
}) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showProp}
      onHide={handleCloseProp}
    >
      <Modal.Header closeButton>
        <Modal.Title>Property Editor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditPropertyForm
          selectedProperty={selectedProperty}
          getProperties={getProperties}
          handleCloseProp={handleCloseProp}
        />
      </Modal.Body>
      <Modal.Footer>
        <button onClick={handleCloseProp}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPropertyModal;
