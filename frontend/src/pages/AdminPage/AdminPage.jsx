import React, { useState, useEffect } from "react";
import AddPhotoForm from "./AdminPageComponents/AddPhotoForm/AddPhotoForm";
import AddPropertyForm from "./AdminPageComponents/AddPropertyForm/AddPropertyForm";
import "./AdminPage.css";
import { Container } from "react-bootstrap";

const AdminPage = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center flex-column">
      <AddPropertyForm />
      <AddPhotoForm />
    </Container>
  );
};

export default AdminPage;
