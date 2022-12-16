import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../../../hooks/useAuth";

import {
  FormLabel,
  FormControl,
  FormGroup,
  Form,
  Image,
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
    <div className="d-flex">
      {" "}
      <Form className="m-3" onSubmit={handleSubmit}>
        <Form.Label className="form-title">
          <h5>Add Photo Form</h5>
        </Form.Label>

        <FormGroup>
          <FormLabel>Enter Property Referce Number</FormLabel>
          <FormControl
            className="shadow rounded input-box"
            type="text"
            onChange={(event) => setProperty_id(event.target.value)}
            value={property_id}
          />
        </FormGroup>
        <FormGroup>
          {" "}
          <Image
            className="adminphotopreview"
            thumbnail={true}
            src={photo_url}
            alt="Photo Preview."
          />
        </FormGroup>
        <FormGroup>
          <FormLabel className="m-3">
            Enter New Property Display Image Url
          </FormLabel>
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
