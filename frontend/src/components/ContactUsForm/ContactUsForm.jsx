import React, { useState } from "react";

import {
  Button,
  Form,
  FormControl,
  FormLabel,
  FormGroup,
  Container,
} from "react-bootstrap";

import axios from "axios";
import CommentAlert from "../CommentAlert/CommentAlert";

const ContactUsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");

  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    addClient_Inquiry();
    setFirstName("");
    setLastName("");
    setEmail("");
    setInquiry("");
  };

  async function addClient_Inquiry() {
    let newInquiry = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      inquiry: inquiry,
    };
    let response = await axios.post(
      "http://127.0.0.1:8000/api/client_comments/",
      newInquiry
    );
    if (response.status === 201) {
      setShow(true);
      // await getAllInquiry();
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormGroup>
            <FormLabel>First Name:</FormLabel>

            <FormControl
              className="shadow-sm p-1 mb-1 bg-body rounded"
              type="text"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Last Name:</FormLabel>

            <FormControl
              className="shadow-sm p-1 mb-1 bg-body rounded"
              type="text"
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email:</FormLabel>

            <FormControl
              className="shadow-sm p-1 mb-1 bg-body rounded"
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <Form.Text className="text-muted">
              We will not use this email for unwanted promotions and contact,
              only to repsond to your inquiry.
            </Form.Text>
          </FormGroup>
          <FormGroup>
            <FormLabel>Inquiry:</FormLabel>

            <FormControl
              className="shadow-sm p-1 mb-1 bg-body rounded"
              type="text"
              onChange={(event) => setInquiry(event.target.value)}
              value={inquiry}
            />
          </FormGroup>
        </FormGroup>
        <Container>
          <Button id="button" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
      <CommentAlert show={show} setShow={setShow} />
    </div>
  );
};

export default ContactUsForm;
