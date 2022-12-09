import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import picture from "./WomenProfessionals.jpg";

const RealtorCardSophia = () => {
  return (
    <div>
      <Row className="p-3 m-3">
        <Col
          xs={3}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={picture} alt="Women Realtors" />
        </Col>
        <Col>
          <h4>Sophia Vernon</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default RealtorCardSophia;
