import React from "react";
import { Image } from "react-bootstrap";
import "./LargePhoto.css";

const LargePhoto = ({ selectedPhoto, show }) => {
  return show ? (
    <div>
      <Image className="largePhoto" src={selectedPhoto.photo_url} />
    </div>
  ) : (
    <div className="largePlaceHolderText">
      <h3>Select Photo from the left the see more of this great property.</h3>{" "}
    </div>
  );
};

export default LargePhoto;
