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
        <Modal.Title>Modal heading</Modal.Title>
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
        <button variant="secondary" onClick={handleClose}>
          Close
        </button>
        <button variant="primary" onClick={handleClose}>
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPhotoModal;
