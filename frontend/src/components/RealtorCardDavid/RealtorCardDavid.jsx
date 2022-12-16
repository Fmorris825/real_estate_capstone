import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import picture from "./MalePortrait.jpg";

const RealtorCardDavid = () => {
  return (
    <div>
      <Row className="p-3 m-3">
        <Col>
          <div>
            <h4>David Vernon</h4>
            <p className="subheader">Expertise: Commercial Specilist </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="d-flex justify-content-around">
            <div>
              {" "}
              <div className="d-flex">
                <h5>Certifications:</h5>
              </div>
              <ul className="d-flex flex-column">
                <li>Texas Real Estate License</li>
                <li>Real Estate Investment Modeling Certificate</li>
                <li>Commercial Real Estate Certifcate</li>
              </ul>
            </div>
            <div>
              <div className="d-flex">
                <h5>Contact:</h5>
              </div>
              <div>
                <b>Email:</b>{" "}
                <span className="contactInfo">DavidV@MorrisDeltaRealy.com</span>
              </div>
              <div>
                {" "}
                <b>#:</b> <span className="contactInfo">(469) 858-8989</span>{" "}
                <b>| Fax:</b>{" "}
                <span className="contactInfo">(469) 787-7878</span>
              </div>
            </div>
          </div>
        </Col>
        <Col
          xs={3}
          className="d-flex justify-content-center align-items-center"
        >
          <img className="portrait" src={picture} alt="Realtor Male" />
        </Col>
      </Row>
    </div>
  );
};

export default RealtorCardDavid;
