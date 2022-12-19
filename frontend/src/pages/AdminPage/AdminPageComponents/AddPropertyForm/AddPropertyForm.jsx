import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../../hooks/useAuth";

import {
  FormControl,
  FormGroup,
  Form,
  Image,
  FormLabel,
} from "react-bootstrap";

const AddPropertyForm = () => {
  const [photo_url, setPhoto_Url] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [listing_price, setListing_Price] = useState(0);
  const [user, token] = useAuth();

  async function addProperty() {
    let newProperty = {
      address: address,
      description: description,
      listing_price: listing_price,
      photo_url: photo_url,
      user_id: user.id,
    };

    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/properties/post/",
        newProperty,
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
    addProperty();
    setPhoto_Url("");
    setAddress("");
    setDescription("");
    setListing_Price(0);
  };
  return (
    <div className="d-flex">
      <Form className="m-3" onSubmit={handleSubmit}>
        <Form.Label className="form-title">
          <h5>Add Property Form</h5>
        </Form.Label>

        <FormGroup>
          <FormLabel>Enter New Property Address</FormLabel>
          <FormControl
            placeholder="Property Address Here..."
            className="shadow rounded input-box"
            type="text"
            onChange={(event) => setAddress(event.target.value)}
            value={address}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Enter New Property Description</FormLabel>
          <FormControl
            placeholder="Property Description Here..."
            className="shadow rounded input-box"
            type="text"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Enter New Property Listing Price</FormLabel>
          <FormControl
            className="shadow rounded input-box"
            type="number"
            onChange={(event) => setListing_Price(event.target.value)}
            value={listing_price}
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

export default AddPropertyForm;