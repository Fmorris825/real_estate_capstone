import React from "react";

const PropertyCard = ({ property, setSelectedProperty }) => {
  function handleSelection() {
    setSelectedProperty(property);
  }

  return (
    <div className="d-flex propertycards" onClick={handleSelection}>
      <img
        className="cardimg"
        src={property.photo_url}
        alt={property.address}
      />
      <div className="cardinfo d-flex flex-column">
        <h3 className="cardaddress">{property.address}</h3>
        <h5>${property.listing_price}</h5>
        <p className="carddesc">{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
