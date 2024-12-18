import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import ImageTextComponent from "../components/ImageTextCompontent";
import ourCompanyPageData from "../../pageData/ourCompanyPageData";
import { GetStaticProps } from "next";
import { OurCompanyPageData } from "src/types";
import BasicSection from "src/components/BasicSection";

interface Props {
  data: OurCompanyPageData;
}
const OurCompany = ({ data }: Props) => {
  const { aboutUs, sectionTwo, locationSection, sectionFour } = data;
  return (
    <Container fluid className="ourCompanyContainer">
      <Row>
        <Container className="innerContainer">
          <ImageTextComponent
            header={aboutUs.title}
            text={aboutUs.description}
            image={aboutUs.image}
            reverse={false}
            height="480px"
            firstSection={true}
          />
          <ImageTextComponent
            header={sectionTwo.title}
            text={sectionTwo.description}
            image={sectionTwo.image}
            reverse={true}
            height="680px"
            secondSection={true}
          />
          <Row className="ourLocations justify-content-center text-center">
            {data.locationSection.map((section, index) => (
              <BasicSection
                key={index}
                image={section.image}
                state={section.state}
                buttonText={section.buttonText}
                index={index}
              />
            ))}
          </Row>
          <ImageTextComponent
            header={sectionFour.title}
            text={sectionFour.description}
            image={sectionFour.image}
            reverse={false}
            height="680px"
            secondSection={true}
          />
        </Container>
      </Row>
    </Container>
  );
};
export default OurCompany;

export const getStaticProps: GetStaticProps = async () => {
  const data: OurCompanyPageData = ourCompanyPageData;
  return {
    props: {
      data,
    },
  };
};
