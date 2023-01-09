import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import picture from "./FemalePortrait.jpg";

const RealtorCardSophia = () => {
  return (
    <div>
      <Row className="p-3">
        <Col
          xs={3}
          className="d-flex justify-content-center align-items-center"
        >
          <img className="portrait" src={picture} alt="Women Realtors" />
        </Col>
        <Col>
          <div>
            <h4>Sophia Morris</h4>
            <p className="subheader">Expertise: Residential Specialist </p>
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
                <li>Real Estate Property Management Certificate</li>
                <li>Real Estate Investment Modeling Certifcate</li>
                <li>Real Estate Devlopment Certificate</li>
              </ul>
            </div>
            <div>
              <div className="d-flex">
                <h5>Contact:</h5>
              </div>
              <div>
                <b>Email:</b>{" "}
                <span className="contactInfo">
                  <a href="mailto:SophiaM@MorrisDeltaRealy.com?subject=Hello from Morris Delta Realty!&body=What Property will you ne inquiring about today? or What questions can we help you find soluions for? Please Enter the Property Reference Number above if you are inquiring about a specfic listing on our site.">
                    SophiaM@MorrisDeltaRealy.com
                  </a>
                </span>
              </div>
              <div>
                {" "}
                <b>#:</b> <span className="contactInfo">(469) 457-7897</span>{" "}
                <b>| Fax:</b>{" "}
                <span className="contactInfo">(469) 366-4578</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RealtorCardSophia;
