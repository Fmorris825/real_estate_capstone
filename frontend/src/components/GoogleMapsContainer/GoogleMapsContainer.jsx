import React, { useState, useEffect } from "react";

import axios from "axios";
import API_KEY from "../../API_KEY";
import FormGroup from "react-bootstrap/esm/FormGroup";
import MapsSearchForm from "../MapsSearchForm/MapsSearchForm";
import MapIFrame from "../MapIFrame/MapIFrame";

const GoogleMapsContainer = () => {
  const [query, setQuery] = useState("1681 Jasmine Dr SChertz Texas");
  const [searchResults, setSearchResults] = useState("");

  //   useEffect(() => {
  //     getQuery();
  //   }, [query]);

  //   async function getQuery() {
  //     let response = await axios.get(
  //       `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=AIzaSyDVQhEP2okcXMH9fvHlVpWAzbowx5-ZWZs/`
  //     );
  //     setSearchResults(response.data);
  //   }

  return (
    <div className="d-flex justify-content-center">
      <MapsSearchForm setQuery={setQuery} />
      <MapIFrame />
    </div>
  );
};

export default GoogleMapsContainer;
