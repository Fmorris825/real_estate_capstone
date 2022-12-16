import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import "./EditPropertyForm.css";

import {
  FormControl,
  FormGroup,
  Form,
  FormLabel,
  Image,
} from "react-bootstrap";

const EditPropertyForm = ({ selectedProperty, getProperties }) => {
  const [photo_url, setPhoto_Url] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [listing_price, setListing_Price] = useState(0);
  const [user, token] = useAuth();

  async function editProperty() {
    let editProperty = {
      address: address,
      description: description,
      listing_price: listing_price,
      photo_url: photo_url,
      user_id: user.id,
    };

    try {
      let response = await axios.put(
        `http://127.0.0.1:8000/api/properties/${selectedProperty.id}/`,
        editProperty,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 202) {
        await getProperties();
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    editProperty();
    setPhoto_Url("");
    setAddress("");
    setDescription("");
    setListing_Price(0);
  };
  return (
    <Form className="m-3" onSubmit={handleSubmit}>
      <Form.Label className="form-title">Add Property Form</Form.Label>

      <FormGroup>
        <FormLabel>Current Address: {selectedProperty.address}</FormLabel>
        <FormControl
          placeholder="Property Address Here..."
          className="shadow rounded input-box"
          type="text"
          onChange={(event) => setAddress(event.target.value)}
          value={address}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>
          Current Property Description: {selectedProperty.description}
        </FormLabel>
        <FormControl
          placeholder="Property Description Here..."
          className="shadow rounded input-box"
          type="text"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>
          Current Listing Price: {selectedProperty.listing_price}
        </FormLabel>
        <FormControl
          className="shadow rounded input-box"
          type="number"
          onChange={(event) => setListing_Price(event.target.value)}
          value={listing_price}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>
          Current Photo Url:{" "}
          <p className="photoEditUrl">{selectedProperty.photo_url}</p>
        </FormLabel>
        <FormLabel>Current Photo:</FormLabel>
        <Image
          className="thumbnails"
          thumbnail={true}
          src={selectedProperty.photo_url}
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
      <button className="savebutton m-2" type="submit">
        Save Changes
      </button>
    </Form>
  );
};

export default EditPropertyForm;
