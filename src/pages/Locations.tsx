import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import LocationComponent from "src/components/LocationComponent";

const Locations = () => {
  return (
    <Container fluid className="locationContainer">
      <Row>
        <Container className="innerContainer">
          <LocationComponent
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24022.378604486716!2d20.660175756501413!3d41.18258756389022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350e73de5f937d3%3A0x6aa0d08129c86a44!2z0KHRgtGA0YPQs9Cw!5e0!3m2!1smk!2smk!4v1724750932632!5m2!1smk!2smk"
            reverse={false}
            location={"Canada"}
            office={"Designo Central Office"}
            adress={"3886 Wellington Street Toronto, Ontario M9C 3J5"}
          />
          <LocationComponent
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48095.00234545898!2d20.750769856335438!3d41.11405282789938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350db6587ea6657%3A0xc46cfc65390bc9d3!2z0J7RhdGA0LjQtA!5e0!3m2!1smk!2smk!4v1724754618051!5m2!1smk!2smk"
            reverse={true}
            location={"Australia"}
            office={"Designo AU Office"}
            adress={"19 Balonne StreetNew South Wales 2443"}
          />
          <LocationComponent
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47440.84160140323!2d21.383690814948487!3d41.99914667090042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415a58c9aa2a5%3A0xb2ed88c260872020!2z0KHQutC-0L_RmNC1!5e0!3m2!1smk!2smk!4v1724754699202!5m2!1smk!2smk"
            reverse={false}
            location={"United Kingdom"}
            office={"Designo UK Office"}
            adress={"13  Colorado Way Rhyd-y-fro SA8 9GA"}
          />
        </Container>
      </Row>
    </Container>
  );
};
export default Locations;
