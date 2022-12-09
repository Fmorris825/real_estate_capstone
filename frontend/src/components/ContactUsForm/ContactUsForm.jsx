import React, { useState } from "react";

import {
  Button,
  Form,
  FormControl,
  FormLabel,
  FormGroup,
  Container,
} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

import axios from "axios";

const ContactUsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [show, setShow] = useState(true);

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
      if (show) {
        return (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Thank you</Alert.Heading>
            <p>
              Your inquiry has been successfully submitted. We look forward to
              answering your inquiry and will respond at our next availabel
              moment. -Thank you !
            </p>
          </Alert>
        );
      }
      return <Button onClick={() => setShow(true)}>Show Alert</Button>;
    }
    // await getAllInquiry();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormGroup>
          <div>
            <FormLabel>First Name:</FormLabel>
          </div>

          <div>
            <FormControl
              className="shadow-sm p-1 mb-1 bg-body rounded"
              type="text"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div>
            <FormLabel>Last Name:</FormLabel>
          </div>
          <div>
            <FormControl
              className="shadow-sm p-1 mb-1 bg-body rounded"
              type="text"
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div>
            <FormLabel>Email:</FormLabel>
          </div>
          <div>
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
          </div>
        </FormGroup>
        <FormGroup>
          <div>
            <FormLabel>Inquiry:</FormLabel>
          </div>
          <div>
            <FormControl
              className="shadow-sm p-1 mb-1 bg-body rounded"
              type="text"
              onChange={(event) => setInquiry(event.target.value)}
              value={inquiry}
            />
          </div>
        </FormGroup>
      </FormGroup>
      <Container>
        <Button id="button" type="submit">
          Submit
        </Button>
      </Container>
    </Form>
  );
};

export default ContactUsForm;
