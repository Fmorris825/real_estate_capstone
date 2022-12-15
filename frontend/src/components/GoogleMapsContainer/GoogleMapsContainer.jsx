import React, { useState, useEffect } from "react";

import axios from "axios";
import API_KEY from "../../API_KEY";
import FormGroup from "react-bootstrap/esm/FormGroup";
import MapsSearchForm from "../MapsSearchForm/MapsSearchForm";
import MapIFrameCopy from "../MapIFrame/MapIFrame_copy";

const GoogleMapsContainer = () => {
  const [searchResults, setSearchResults] = useState("");

  console.log(searchResults);

  return (
    <div className="d-flex justify-content-center">
      <MapIFrameCopy />
    </div>
  );
};

export default GoogleMapsContainer;
