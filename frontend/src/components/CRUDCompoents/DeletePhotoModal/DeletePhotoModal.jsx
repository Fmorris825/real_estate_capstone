import React, { useState } from "react";
import { Form, Image, FormLabel, Modal } from "react-bootstrap";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const DeletePhotoModal = ({
  handleCloseDelPhoto,
  showDelPhoto,
  selectedPhoto,
  getPhotosForProperties,
}) => {
  const [validationInput, setValidationInput] = useState("");
  const [user, token] = useAuth();

  async function deletePhoto() {
    let response = await axios.delete(
      `http://127.0.0.1:8000/api/photos/delete/${selectedPhoto.id}/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
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
        <Modal.Title>
          <h4>Delete Photo</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <div className="d-flex flex-column">
            <FormLabel className="d-flex">
              <h5>Are you sure you want to delete this Photo?</h5>
            </FormLabel>
            <Image
              className="deletePropPhoto"
              thumbnail={true}
              src={selectedPhoto.photo_url}
              alt="Property Photo"
            />
          </div>
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
        <button onClick={handleCloseDelPhoto}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePhotoModal;
