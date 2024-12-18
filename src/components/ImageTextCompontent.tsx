import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

interface Props {
  header: string;
  text: string;
  image: string;
  reverse: boolean;
  height: string;
  firstSection?: boolean;
  secondSection?: boolean;
}
const ImageTextComponent = ({
  header,
  text,
  image,
  reverse,
  height,
  firstSection,
  secondSection,
}: Props) => {
  return (
    <Row
      className={`imageTextComponent ${reverse ? "flex-row-reverse" : ""} ${
        firstSection ? "imageTextComponentOne" : ""
      } ${secondSection ? "imageTextComponentTwo" : ""}`}
    >
      <Col
        lg={7}
        style={{
          height: height,
          borderRadius: reverse ? "0 15px 15px 0" : "15px 0 0 15px ",
        }}
        className={`textPart d-flex flex-column text-white justify-content-center px-5  text-center text-md-start `}
      >
        <h1 className="px-md-5 pb-4">{header}</h1>
        <p className="px-md-5">{text}</p>
      </Col>
      <Col
        lg={5}
        className="imagePart"
        style={{
          backgroundImage: image,
          height: height,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: reverse ? "15px 0 0 15px " : "0 15px 15px 0",
          backgroundPosition: "bottom",
        }}
      ></Col>
    </Row>
  );
};
export default ImageTextComponent;
