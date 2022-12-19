import React from "react";

const PropertyCard = ({ property, setSelectedProperty, setSelectedPhoto }) => {
  function handleSelection() {
    setSelectedProperty(property);
    setSelectedPhoto(false);
  }

  return (
    <div className="d-flex m-3 propertycards" onClick={handleSelection}>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between img-info">
          <img
            className="cardimg"
            src={property.photo_url}
            alt={property.address}
          />
          <div className="cardinfo d-flex flex-column">
            <h3 className="cardaddress">{property.address}</h3>
            <h3>${property.listing_price}</h3>
            <h3 className="cardaddress">{property.city}</h3>
            <p className="carddesc">{property.description}</p>
          </div>
        </div>
        <div className="card-bottom-liner">
          <b>Ref #:</b> {property.id} <strong>|</strong>
          <b>Type:</b> {property.type} <strong>|</strong> <b>Beds:</b>{" "}
          {property.beds} <strong>|</strong> <b>Baths:</b>
          {property.baths}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
