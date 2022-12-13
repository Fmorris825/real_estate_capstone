import React from "react";
import { Row } from "react-bootstrap";
import PropertyCard from "../PropertyCard/PropertyCard";

const PropertyList = ({
  properties,
  setSelectedProperty,
  setSelectedPhoto,
}) => {
  return (
    <Row className="d-flex justify-content-center">
      {/* <div className="d-flex gap-4 m-3 p-3"> */}
      {properties.map((property, index) => {
        return (
          <PropertyCard
            property={property}
            setSelectedProperty={setSelectedProperty}
            setSelectedPhoto={setSelectedPhoto}
          />
        );
      })}
      {/* </div> */}
    </Row>
  );
};

export default PropertyList;
