import React, { useState, useEffect } from "react";
import axios from "axios";

import "./PropertyViewer.css";
import ImageCardViewer from "../ImageCardViewer/ImageCardViewer";
import LargePhoto from "../LargePhoto/LargePhoto";
import { Col, Container } from "react-bootstrap";
import EditRender from "../../../../components/CRUDCompoents/EditRender/EditRender";
import Database from "../../../../Database";

const PropertyViewer = ({
  selectedProperty,
  selectedPhoto,
  setSelectedPhoto,
  getProperties,
}) => {
  const [photos, setPhotos] = useState(false);

  useEffect(() => {
    getPhotosForProperties();
  }, [selectedProperty]);

  // useEffect(() => {
  //   setPhotos(Database.photos);
  // }, []);

  async function getPhotosForProperties() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/properties/${selectedProperty.id}/photos/`
    );
    setPhotos(response.data);
  }

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
        <div className="d-flex">
          <h4>{selectedProperty.address}</h4>
        </div>
        <div className="d-flex">
          <h5>${selectedProperty.listing_price}</h5>
        </div>
        <div className="d-flex">
          <h4> {selectedProperty.city}</h4>
        </div>
        <p>{selectedProperty.description}</p>
        <div className="card-bottom-liner">
          <b>Ref #:</b> {selectedProperty.id} <strong>|</strong>
          <b>Type:</b> {selectedProperty.type} <strong>|</strong> <b>Beds:</b>{" "}
          {selectedProperty.beds} <strong>|</strong> <b>Baths:</b>
          {selectedProperty.baths}
        </div>

        <EditRender
          selectedProperty={selectedProperty}
          getProperties={getProperties}
          selectedPhoto={selectedPhoto}
          // getPhotosForProperties={getPhotosForProperties}
        />
      </div>
    </div>
  ) : null;
};

export default PropertyViewer;
