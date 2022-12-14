import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import AddPhotoForm from "../AddPhotoForm/AddPhotoForm";
import AddPropertyForm from "../AddPropertyForm/AddPropertyForm";

const AdminPage = () => {
  return (
    <div>
      <AddPropertyForm />
      <AddPhotoForm />
    </div>
  );
};

export default AdminPage;
