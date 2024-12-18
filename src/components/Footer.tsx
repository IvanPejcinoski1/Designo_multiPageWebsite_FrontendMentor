import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router"; // Import useRouter from next/router
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import NavbarComponent from "./NavbarComponent";

const Footer = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Container
      className="footer"
      fluid
      style={{ marginTop: pathname === "/Contact" ? "-30px" : "" }}
    >
      <Row>
        <Container className="innerContainer ">
          <Row className="mainRow">
            <Col
              className={`${
                pathname === "/Contact" ? "d-none " : ""
              } mx-auto talkAbout text-white d-flex justify-content-md-around align-items-center flex-md-row flex-column justify-content-evenly`}
            >
              <div>
                <h1 className="pb-4 pt-2 pb-md-0 pt-md-0 px-md-5 px-lg-0">
                  {" "}
                  Let’s talk about your project
                </h1>
                <p>
                  Ready to take it to the next level? Contact us today and find
                  out how our expertise can help your business grow.
                </p>
              </div>
              <button className="btn " onClick={() => router.push("/Contact")}>
                GET IN TOUCH
              </button>
            </Col>
          </Row>
          <NavbarComponent footer={true} />
          <hr className="pb-4 " />
          <Row className="footerInfo text-center text-md-start">
            <Col lg={4} className="pb-4 pb-md-0">
              <p>
                Designo Central Office <br />
                <span>
                  3886 Wellington Street <br /> Toronto, Ontario M9C 3J5
                </span>
              </p>
            </Col>
            <Col lg={4} className="pb-4 pb-md-0">
              <p>
                Contact Us (Central Office) <br /> P : +1 253-863-8967 <br /> M
                : contact@designo.co
              </p>
            </Col>
            <Col lg={1}></Col>
            <Col
              lg={3}
              className="d-flex justify-content-md-around justify-content-evenly social-icons"
            >
              <FaFacebookSquare size={40} />
              <FaYoutube size={40} />
              <FaTwitterSquare size={40} />
              <FaPinterestSquare size={40} />
              <FaInstagramSquare size={40} />
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default Footer;
