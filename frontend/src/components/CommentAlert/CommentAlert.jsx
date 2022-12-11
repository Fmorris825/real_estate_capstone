import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import { Button } from "bootstrap";
import { ModalFooter } from "react-bootstrap";

const CommentAlert = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return show ? (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Inquiry Successfully Sent</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Your inquiry has been successfully submitted. We look forward to
          answering your inquiry and will respond at our next availabe moment.
        </p>
      </Modal.Body>
      <ModalFooter>- Thank You !</ModalFooter>
      <button variant="secondary" onClick={handleClose}>
        Close
      </button>
    </Modal>
  ) : null;
};

export default CommentAlert;
