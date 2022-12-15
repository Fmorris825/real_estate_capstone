import React, { useState } from "react";
import { Form, FormGroup, FormLabel, Modal } from "react-bootstrap";
import axios from "axios";

const DeletePhotoModal = ({
  handleCloseDelPhoto,
  showDelPhoto,
  selectedPhoto,
  getPhotosForProperties,
}) => {
  const [validationInput, setValidationInput] = useState("");

  async function deletePhoto() {
    let response = await axios.delete(
      `http://127.0.0.1:8000/api/photos/delete/${selectedPhoto.id}/`
    );
    if (response.status === 204) {
      await getPhotosForProperties();
    }
  }

  const handleModal = () => {
    handleCloseDelPhoto();
  };

  const handleSubmit = (event) => {
    setValidationInput(event);
    if (event === "yes") {
      deletePhoto();
      handleModal();
    } else if (event === "no") {
      handleModal();
    }
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showDelPhoto}
      onHide={handleCloseDelPhoto}
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete Photo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <FormLabel>Are you sure you want to delete this Photo?</FormLabel>
          <div className="d=flex justify-content-around">
            <button
              className="m-2"
              value={"yes"}
              onClick={(event) => handleSubmit(event.target.value)}
            >
              Yes
            </button>

            <button
              className="m-2"
              value={"no"}
              onClick={(event) => handleSubmit(event.target.value)}
            >
              No
            </button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={handleCloseDelPhoto}>Save Changes</button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePhotoModal;
