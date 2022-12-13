import React, { useState, useEffect, useSyncExternalStore } from "react";
import PropertyCarousel from "../PropertyCarousel/PropertyCarousel";
import axios from "axios";
import "./PropertiesPage.css";
import PropertyList from "../PropertyList/PropertyList";
import PropertyViewer from "../PropertyViewer/PropertyViewer";
import { Container } from "react-bootstrap";

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(false);

  useEffect(() => {
    getProperties();
  }, []);

  async function getProperties() {
    const response = await axios.get("http://127.0.0.1:8000/api/properties/");
    setProperties(response.data);
  }

  console.log(properties);
  console.log(selectedProperty);

  return selectedProperty ? (
    <div className="d-flex flex-column align-items-center">
      <PropertyViewer
        selectedProperty={selectedProperty}
        setSelectedPhoto={setSelectedPhoto}
        selectedPhoto={selectedPhoto}
      />
      <PropertyList
        properties={properties}
        setSelectedProperty={setSelectedProperty}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  ) : (
    <div>
      <PropertyCarousel />
      <PropertyList
        properties={properties}
        setSelectedProperty={setSelectedProperty}
      />
    </div>
  );
};

export default PropertiesPage;
