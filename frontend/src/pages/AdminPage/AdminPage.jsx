import React, { useState, useEffect } from "react";
import AddPhotoForm from "./AdminPageComponents/AddPhotoForm/AddPhotoForm";
import AddPropertyForm from "./AdminPageComponents/AddPropertyForm/AddPropertyForm";
import "./AdminPage.css";
import { Container } from "react-bootstrap";

const AdminPage = () => {
  return (
    <div className="d-flex justify-content-around">
      <AddPropertyForm />
      <AddPhotoForm />
    </div>
  );
};

export default AdminPage;
