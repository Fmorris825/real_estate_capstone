import React from "react";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import PropertySlide from "../PropertySlide/PropertySlide";
import "./PropertyCarousel.css";

const PropertyCarousel = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties();
  }, []);

  async function getProperties() {
    const response = await axios.get("http://127.0.0.1:8000/api/properties/");
    setProperties(response.data);
  }

  if (!properties) return null;
  return (
    <div className="d-flex justify-content-center">
      <Carousel fade className="carousel">
        {properties.map((property, index) => {
          return (
            <CarouselItem>
              <img
                className="carouselitem d-block w-100"
                src={property.photo_url}
                alt={property.address}
              />
              <Carousel.Caption>
                <h3>{property.address}</h3>
                <p>{property.description}</p>
              </Carousel.Caption>
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
};

export default PropertyCarousel;