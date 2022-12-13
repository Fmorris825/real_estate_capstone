import React, { useState, useEffect, useSyncExternalStore } from "react";
import PropertyCarousel from "../PropertyCarousel/PropertyCarousel";
import axios from "axios";
import "./PropertiesPage.css";
import { Row } from "react-bootstrap";
import PropertyList from "../PropertyList/PropertyList";

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(false);

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
    <div>
      <PropertyList
        properties={properties}
        setSelectedProperty={setSelectedProperty}
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
