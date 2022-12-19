import React, { useState } from "react";
import axios from "axios";
import { Form, Image, FormLabel, Modal } from "react-bootstrap";
import "./DeleteProperty.css";
import useAuth from "../../../hooks/useAuth";

const DeletePropertyModal = ({
  showDelProp,
  handleCloseDelProp,
  selectedProperty,
  getProperties,
}) => {
  const [validationInput, setValidationInput] = useState("");
  const [user, token] = useAuth();

  async function deleteProperty() {
    let response = await axios.delete(
      `http://127.0.0.1:8000/api/properties/${selectedProperty.id}/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 204) {
      await getProperties();
    }
  }

  const handleModal = () => {
    handleCloseDelProp();
  };

  const handleSubmit = (event) => {
    setValidationInput(event);
    if (event === "yes") {
      deleteProperty();
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
      show={showDelProp}
      onHide={handleCloseDelProp}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h4>Delete Property</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <FormLabel>
            <h5>Are you sure you want to delete this Property?</h5>
          </FormLabel>
          <div className="d-flex flex-column">
            <div>
              <b>{selectedProperty.address}</b>
            </div>
            <div>{selectedProperty.listing_price}</div>
            <p>{selectedProperty.description}</p>
            <Image
              className="deletePropPhoto"
              thumbnail={true}
              src={selectedProperty.photo_url}
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
        <button onClick={handleCloseDelProp}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePropertyModal;
