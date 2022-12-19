import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import AddPhotoBtn from "../AddPhotoBtn/AddPhotoBtn";
const AddPhotoModal = ({
  show,
  selectedPhoto,
  selectedProperty,
  getProperties,
  getPhotosForProperties,
  handleClose,
}) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h4>Add Photo</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <AddPhotoBtn
          selectedProperty={selectedProperty}
          getProperties={getProperties}
          selectedPhoto={selectedPhoto}
          getPhotosForProperties={getPhotosForProperties}
        />{" "}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={handleClose}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPhotoModal;
