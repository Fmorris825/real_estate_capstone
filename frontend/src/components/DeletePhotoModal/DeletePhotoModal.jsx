import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const DeletePhotoModal = ({
  handleCloseDelPhoto,
  showDelPhoto,
  selectedPhoto,
}) => {
  async function deletePhoto() {
    let response = await axios.delete(
      `http://127.0.0.1:8000/api/collections/${activeCollection}/cards/${displayCard.id}/`
    );
    if (response.status === 204) {
      await getCardsforCollection();
    }
  }
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showDelPhoto}
      onHide={handleCloseDelPhoto}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <button onClick={handleCloseDelPhoto}>Save Changes</button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePhotoModal;
