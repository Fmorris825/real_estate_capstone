import React, { useState } from "react";
import EmailKey from "../../../EmailKey";

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
import MapsKey from "../../../MapsKey";
import EmailValidatorStatement from "../../EmailValidatorStatement/EmailValidatorStatement";
import "./ContactUsForm.css";

const ContactUsForm = ({ handleCloseForm }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [emailData, setEmailData] = useState({});
  const [emailValidator, setEmailValidator] = useState(false);

  const [show, setShow] = useState(false);

  async function validateEmail() {
    const response = await axios.get(
      `https://emailvalidation.abstractapi.com/v1/?api_key=${EmailKey.Key}&email=${email}`
    );
    setEmailData(response.data);
    console.log(response);
    if (response.data.deliverability === "DELIVERABLE") {
      addClient_Inquiry();
      setEmailValidator(false);
      clearForm();
    } else {
      setEmailValidator(true);
    }
  }
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

  function clearForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setInquiry("");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail();
  };

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
            <EmailValidatorStatement emailValidator={emailValidator} />
            <Form.Text className="text-muted">
              We will not use this email for unwanted promotions and contact,
              only to repsond to your inquiry.
            </Form.Text>
          </FormGroup>
          <FormGroup>
            <FormLabel>Inquiry:</FormLabel>
            <br />
            <Form.Text className="text-muted">
              Please Include Property Ref #:
              <br />
              Found at bottom of Property Viewer on Properties Page.
            </Form.Text>
            <FormControl
              className="shadow-sm p-1 mb-1 bg-body rounded inquiryinput"
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
      <CommentAlert
        show={show}
        setShow={setShow}
        handleCloseForm={handleCloseForm}
      />
    </div>
  );
};

export default ContactUsForm;
