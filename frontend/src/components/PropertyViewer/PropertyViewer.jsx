import React, { useState, useEffect } from "react";
import axios from "axios";

import "./PropertyViewer.css";
import ImageCardViewer from "../ImageCardViewer/ImageCardViewer";
import LargePhoto from "../LargePhoto/LargePhoto";
import { Col, Container } from "react-bootstrap";

const PropertyViewer = ({
  selectedProperty,
  selectedPhoto,
  setSelectedPhoto,
}) => {
  const [photos, setPhotos] = useState(false);

  useEffect(() => {
    getPhotosForProperties();
  }, [selectedProperty]);

  async function getPhotosForProperties() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/properties/${selectedProperty.id}/photos/`
    );
    setPhotos(response.data);
  }

  console.log(photos);

  return photos ? (
    <div className="d-flex align-items-center propertyViewer">
      <div className="d-flex flex-column m-1 thumbnailContainer">
        {photos.map((photo, index) => {
          return (
            <ImageCardViewer
              photo={photo}
              setSelectedPhoto={setSelectedPhoto}
            />
          );
        })}
      </div>
      <LargePhoto selectedPhoto={selectedPhoto} show={selectedPhoto} />
      <div className="propertyCardInfo">
        <h1>{selectedProperty.address}</h1>
        <h3>${selectedProperty.listing_price}</h3>
        <p>{selectedProperty.description}</p>
      </div>
    </div>
  ) : null;
};

export default PropertyViewer;
