import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

import {
  FormLabel,
  FormControl,
  FormGroup,
  Form,
  Button,
} from "react-bootstrap";

const AddPhotoForm = () => {
  const [photo_url, setPhoto_Url] = useState("");
  const [property_id, setProperty_id] = useState(0);
  const [user, token] = useAuth();

  async function addPhoto() {
    let newPhoto = {
      property_id: property_id,
      photo_url: photo_url,
      user_id: user.id,
    };

    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/photos/${property_id}/`,
        newPhoto,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      //   if (response.status === 201)
      //    {
      //     await getAllComments();
      //   }
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
    <div>
      {" "}
      <Form className="m-3" onSubmit={handleSubmit}>
        <Form.Label className="form-title">Add Photo Form</Form.Label>

        <FormGroup>
          <FormControl
            className="shadow rounded input-box"
            type="text"
            onChange={(event) => setProperty_id(event.target.value)}
            value={property_id}
          />
        </FormGroup>
        <FormGroup>
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
    </div>
  );
};

export default AddPhotoForm;
