import React from "react";
import { Col } from "react-bootstrap";
import { useRouter } from "next/router";

interface Props {
  image: string;
  state?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  index: number;
}

const BasicSection = ({
  image,
  state,
  title,
  description,
  buttonText,
  index,
}: Props) => {
  const router = useRouter();

  return (
    <Col lg={4}>
      <div
        className={`smallContainer ${
          description && `smallContainer${index + 1}`
        } d-md-flex d-lg-block flex-md-column align-items-center py-5 py-lg-0`}
      >
        <img src={image} alt="" className="ilustrations " />
        <div className=" text-lg-center  ps-lg-0">
          <h4>{state || title}</h4>
          <p className="px-md-5 px-lg-0">{description}</p>
          {buttonText && (
            <button className="btn" onClick={() => router.push("/Locations")}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </Col>
  );
};

export default BasicSection;
