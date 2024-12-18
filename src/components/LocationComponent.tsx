import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
// Add the following imports after running 'npm install react-bootstrap@latest bootstrap@latest react-router-dom@latest @fortawesome/fontawesome-free':
interface Props {
  reverse: boolean;
  location: string;
  office: string;
  adress: string;
  src: string;
}
const LocationComponent = ({
  reverse,
  location,
  office,
  adress,
  src,
}: Props) => {
  return (
    <Row
      className={`locationComponent align-items-center   ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <Col
        className={`info d-flex flex-column justify-content-center px-5  ${
          reverse ? "ms-lg-4" : "me-lg-4"
        }`}
      >
        <h2 className="px-5 pb-4 text-center text-md-start">{location}</h2>
        <div className="d-flex px-5 flex-column flex-md-row text-center text-md-start">
          <div className="pe-md-5 ">
            <p className="fw-bold">{office}</p>
            <p className="w-md-75">{adress}</p>
          </div>
          <div>
            <p className="fw-bold">Contact</p>
            <p className="mb-1">P: +124-485-7866</p>
            <p>M: contact@designo.co</p>
          </div>
        </div>
      </Col>
      <Col lg={4} className="map px-lg-2 px-0">
        <iframe
          src={src}
          width="100%"
          height="326"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ borderRadius: "15px" }}
        ></iframe>
      </Col>
    </Row>
  );
};
export default LocationComponent;
