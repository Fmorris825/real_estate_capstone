import React from "react";
import CarouselItem from "react-bootstrap/esm/CarouselItem";

const PropertySlide = ({ property }) => {
  return (
    <CarouselItem>
      <img className="" src={property.photo.photo_url} alt={property.address} />
      <div>
        <h3>{property.address}</h3>
        <p>{property.description}</p>
      </div>
    </CarouselItem>
  );
};

export default PropertySlide;
