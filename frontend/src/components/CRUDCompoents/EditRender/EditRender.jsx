import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import EditPropertyForm from "../EditPropertyForm/EditPropertyForm";
import useAuth from "../../../hooks/useAuth";
import AddPhotoBtn from "../AddPhotoBtn/AddPhotoBtn";
import "./EditRender.css";
import AddPhotoModal from "../AddPhotoModal/AddPhotoModal";
import EditPropertyModal from "../EditPropertyModal/EditPropertyModal";
import DeletePhotoModal from "../DeletePhotoModal/DeletePhotoModal";
import DeletePropertyModal from "../DeletePropertyModal/DeleteProperty";

const EditRender = ({
  selectedProperty,
  getProperties,
  selectedPhoto,
  getPhotosForProperties,
}) => {
  const [user, token] = useAuth();

  // Edit Property Button State Var
  const [showProp, setShowProp] = useState(false);
  const handleCloseProp = () => setShowProp(false);
  const handleShowProp = () => setShowProp(true);

  // Add Photo Button State Var
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Delete Photo Button State Var
  const [showDelPhoto, setShowDelPhoto] = useState(false);
  const handleCloseDelPhoto = () => setShowDelPhoto(false);
  const handleShowDelPhoto = () => setShowDelPhoto(true);

  // Delete PRoperty Button State Var
  const [showDelProp, setShowDelProp] = useState(false);
  const handleCloseDelProp = () => setShowDelProp(false);
  const handleShowDelProp = () => setShowDelProp(true);

  return user ? (
    <div className="editBtns">
      <div className="d-flex justify-content-center ">
        <button className="adminBtn" onClick={handleShowProp}>
          Edit Property
        </button>

        <button className="adminBtn" onClick={handleShowDelProp}>
          Delete Property
        </button>

        <button className="adminBtn" onClick={handleShow}>
          Add Photo
        </button>

        <button className="adminBtn" onClick={handleShowDelPhoto}>
          Delete Photo
        </button>
      </div>

      <EditPropertyModal
        getProperties={getProperties}
        selectedProperty={selectedProperty}
        showProp={showProp}
        handleCloseProp={handleCloseProp}
      />

      <AddPhotoModal
        show={show}
        handleClose={handleClose}
        selectedProperty={selectedProperty}
        selectedPhoto={selectedPhoto}
        getPhotosForProperties={getPhotosForProperties}
      />

      <DeletePhotoModal
        showDelPhoto={showDelPhoto}
        handleCloseDelPhoto={handleCloseDelPhoto}
        selectedPhoto={selectedPhoto}
        getPhotosForProperties={getPhotosForProperties}
      />

      <DeletePropertyModal
        showDelProp={showDelProp}
        handleCloseDelProp={handleCloseDelProp}
        selectedProperty={selectedProperty}
        getProperties={getProperties}
      />
    </div>
  ) : null;
};

export default EditRender;
