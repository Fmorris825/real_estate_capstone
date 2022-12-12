import React, { useState, useEffect } from "react";
import PropertyCarousel from "../PropertyCarousel/PropertyCarousel";
import axios from "axios";
import "./PropertiesPage.css";
import { Row } from "react-bootstrap";

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties();
  }, []);

  async function getProperties() {
    const response = await axios.get("http://127.0.0.1:8000/api/properties/");
    setProperties(response.data);
  }

  console.log(properties);
  return (
    <div>
      <PropertyCarousel />
      <div className="d-flex gap-4 m-3 p-3">
        {properties.map((property, index) => {
          return (
            <div className="d-flex propertycards">
              <img
                className="cardimg"
                src={property.photo.photo_url}
                alt={property.address}
              />
              <div className="cardinfo d-flex flex-column">
                <h3 className="cardaddress">{property.address}</h3>
                <h5>${property.listing_price}</h5>
                <p className="carddesc">{property.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertiesPage;
