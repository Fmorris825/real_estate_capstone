import React, { useState, useEffect, useSyncExternalStore } from "react";
import PropertyCarousel from "./PropertiesPageComponents/PropertyCarousel/PropertyCarousel";
import axios from "axios";
import "./PropertiesPage.css";
import PropertyList from "./PropertiesPageComponents/PropertyList/PropertyList";
import PropertyViewer from "./PropertiesPageComponents/PropertyViewer/PropertyViewer";
import { Container } from "react-bootstrap";
import PropertiesIFrame from "../../components/PropertiesIFrame/PropertiesIFrame";
import MorrisDeltaHeader from "../../components/MorrisDeltaHeader/MorrisDeltaHeader";

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

  return selectedProperty ? (
    <div>
      <MorrisDeltaHeader />
      <div className="d-flex flex-column align-items-center">
        <PropertyViewer
          selectedProperty={selectedProperty}
          setSelectedPhoto={setSelectedPhoto}
          selectedPhoto={selectedPhoto}
          getProperties={getProperties}
        />

        <PropertyList
          properties={properties}
          setSelectedProperty={setSelectedProperty}
          setSelectedPhoto={setSelectedPhoto}
        />
      </div>
    </div>
  ) : (
    <div>
      <MorrisDeltaHeader />
      <PropertyCarousel />
      <PropertyList
        properties={properties}
        setSelectedProperty={setSelectedProperty}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default PropertiesPage;
