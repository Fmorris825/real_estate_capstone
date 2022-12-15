import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

import {
  FormLabel,
  FormControl,
  FormGroup,
  Form,
  Image,
} from "react-bootstrap";

const AddPhotoBtn = ({
  selectedPhoto,
  getPhotosForProperties,
  selectedProperty,
}) => {
  const [photo_url, setPhoto_Url] = useState("");
  const [property_id, setProperty_id] = useState(0);
  const [user, token] = useAuth();

  async function addPhoto() {
    let newPhoto = {
      property_id: selectedProperty.id,
      photo_url: photo_url,
      user_id: user.id,
    };

    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/photos/${selectedProperty.id}/`,
        newPhoto,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 200) {
        await getPhotosForProperties();
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addPhoto();
    setPhoto_Url("");
    setProperty_id(0);
  };
  return (
    <Form className="m-3" onSubmit={handleSubmit}>
      <Form.Label className="form-title">Add Photo Form</Form.Label>
      <FormGroup>
        <FormLabel>
          Current Photo Url:{" "}
          <p className="photoEditUrl">{selectedPhoto.photo_url}</p>
        </FormLabel>
        <FormLabel>Current Photo:</FormLabel>
        <Image
          className="thumbnails"
          thumbnail={true}
          src={selectedPhoto.photo_url}
          alt="Property Photo"
        />
        <FormControl
          placeholder="Paste Photo Url Here..."
          className="shadow rounded input-box"
          type="text"
          onChange={(event) => setPhoto_Url(event.target.value)}
          value={photo_url}
        />
      </FormGroup>
      <button className="button" type="submit">
        Add
      </button>
    </Form>
  );
};

export default AddPhotoBtn;
