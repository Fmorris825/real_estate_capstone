import React from "react";
import { Image } from "react-bootstrap";

const ImageCardViewer = ({ photo, setSelectedPhoto }) => {
  function handleSelection() {
    setSelectedPhoto(photo);
  }
  return (
    <Image
      className="thumbnails"
      thumbnail={true}
      src={photo.photo_url}
      alt="Property Photo"
      onClick={handleSelection}
    />
  );
};

export default ImageCardViewer;
