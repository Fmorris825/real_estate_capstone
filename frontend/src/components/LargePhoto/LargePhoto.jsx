import React from "react";
import { Image } from "react-bootstrap";
import "./LargePhoto.css";

const LargePhoto = ({ selectedPhoto, show }) => {
  return show ? (
    <div>
      <Image className="largePhoto" src={selectedPhoto.photo_url} />
    </div>
  ) : null;
};

export default LargePhoto;
