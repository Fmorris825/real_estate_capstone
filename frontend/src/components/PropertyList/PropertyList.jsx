import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

const PropertyList = ({ properties, setSelectedProperty }) => {
  return (
    <div className="d-flex gap-4 m-3 p-3">
      {properties.map((property, index) => {
        return (
          <PropertyCard
            property={property}
            setSelectedProperty={setSelectedProperty}
          />
        );
      })}
    </div>
  );
};

export default PropertyList;
