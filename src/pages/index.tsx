import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { TextEffect } from "../components/Animations/TextEffect";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { GetStaticProps } from "next";
import homePageData from "../../pageData/indexPageData.js";
import { PageData } from "src/types";
import BasicSection from "src/components/BasicSection";

const Home = ({ data }: { data: PageData }) => {
  return (
    <Container className="homeContainer" fluid>
      <Row>
        <Container className="innerContainer">
          <Row>
            <Col className="banner d-flex flex-lg-column justify-content-center pe-0">
              <div className="text-white   text-center text-lg-start awardText ">
                <TextEffect as="h1" className="py-3">
                  {data.banner.title}
                </TextEffect>
                <p className="mb-md-5 mb-lg-0 pb-4">
                  {data.banner.description}
                </p>
                <button className="btn">{data.banner.buttonText}</button>
              </div>
            </Col>
          </Row>
          <Row className="designs text-white text-center mt-5 pt-5">
            <Col lg={6} className="ps-lg-0 pe-lg-3 p-3 px-md-0 px-3">
              <Link
                href={"design/webDesign"}
                className="text-white text-decoration-none"
              >
                <div className="webDesign  d-flex flex-column justify-content-center">
                  <h4>WEB DESIGN</h4>
                  <h6>VIEW PROJECTS</h6>
                </div>
              </Link>
            </Col>
            <Col lg={6} className="px-md-0 px-3">
              <Row>
                <Link
                  className="text-white text-decoration-none pe-0 ps-0 ps-lg-3"
                  href={"/design/appDesign"}
                >
                  <Col lg={12} className="pe-lg-0 ps-lg-3 pb-lg-3  ms-0 p-3">
                    <div className="appDesign d-flex flex-column justify-content-center">
                      <h4>APP DESIGN</h4>
                      <h6>VIEW PROJECTS</h6>
                    </div>
                  </Col>
                </Link>
                <Link
                  className="text-white text-decoration-none pe-0 ps-0 ps-lg-3"
                  href={"/design/graphicDesign"}
                >
                  <Col
                    lg={12}
                    className="pe-lg-0 ps-lg-3 pt-lg-3 p-3 px-lg-0 px-3"
                  >
                    <div className="graphicDesign d-flex flex-column justify-content-center">
                      <h4>GRAPHIC DESIGN</h4>
                      <h6>VIEW PROJECTS</h6>
                    </div>
                  </Col>
                </Link>
              </Row>
            </Col>
          </Row>
          <Row className="basicDesription justify-content-center mt-5 pt-5 mb-5 mb-md-0">
            {data.sections.map((section, index) => (
              <BasicSection
                key={index}
                image={section.image}
                state={section.title}
                description={section.description}
                index={index}
              />
            ))}
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data: PageData = homePageData;
  return {
    props: {
      data,
    },
  };
};
