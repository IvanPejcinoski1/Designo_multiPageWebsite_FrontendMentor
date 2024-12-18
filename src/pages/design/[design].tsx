import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import designData from "../../../pageData/designPageData.js";
import { DesignCard, DesignCategory } from "src/types.js";

const Design = ({ data }: { data: DesignCategory }) => {
  const { banner, cards, sharedOtherDesigns } = data;

  const router = useRouter();
  const [expanedCard, setExpanedCard] = useState<DesignCard>();
  const [opacity, setOpacity] = useState(0);

  const handleDivClick = () => {
    setTimeout(() => {
      setOpacity(0);
      setTimeout(() => {
        setExpanedCard(undefined);
      }, 300);
    }, 100);
  };

  const handleCardClick = (card: DesignCard) => {
    setExpanedCard(card);
    setOpacity(0);
    setTimeout(() => setOpacity(1), 100);
  };

  const handleNavigate = (link: string) => {
    router.push(`/${link}`);
  };
  return (
    <Container className="design" fluid>
      <Row>
        <Container className="innerContainer">
          <Row>
            <Col className="banner text-center d-flex flex-column justify-content-center text-center ">
              <h1>{banner.title}</h1>
              <p className="mx-auto">{banner.text}</p>
            </Col>
          </Row>
          <Row className="cardContainer">
            {cards.map((card, index) => (
              <Col
                key={index}
                lg={4}
                className="px-0"
                onClick={() => handleCardClick(card)}
              >
                <div className="px-3 pb-3">
                  <Card style={{ borderRadius: "30px", cursor: "pointer" }}>
                    <Card.Img
                      variant="top"
                      src={`${card.img}`}
                      style={{ borderRadius: "30px 30px 0 0" }}
                    />
                    <Card.Body
                      className="text-center  px-5 py-4"
                      style={{
                        backgroundColor: "#FDF3F0",
                        borderRadius: "0 0px 30px 30px",
                      }}
                    >
                      <Card.Title
                        style={{
                          color: "#e7806b",
                          fontSize: "36px",
                          fontWeight: "semibold",
                        }}
                      >
                        {card.title}
                      </Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="text-center text-white designRow">
            <Col lg={6} sm={12} className="ps-md-0 pe-md-3 mb-5 mb-md-0">
              <div
                onClick={() => handleNavigate(sharedOtherDesigns[0].link)}
                className="d-flex flex-column justify-content-center additionalLinks "
                style={{
                  backgroundImage: `url(${sharedOtherDesigns[0].img})`,
                }}
              >
                <h1>{sharedOtherDesigns[0].title}</h1>
                <p>{sharedOtherDesigns[0].text}</p>
              </div>
            </Col>
            <Col lg={6} sm={12} className="pe-md-0 ps-md-3 mb-5 mb-md-0">
              <div
                onClick={() => handleNavigate(sharedOtherDesigns[1].link)}
                className="d-flex flex-column justify-content-center  additionalLinks"
                style={{
                  backgroundImage: `url(${sharedOtherDesigns[1].img})`,
                }}
              >
                <h1>{sharedOtherDesigns[1].title}</h1>
                <p>{sharedOtherDesigns[1].text}</p>
              </div>
            </Col>
          </Row>

          {expanedCard && (
            <div
              className="fullDiv"
              onClick={() => handleDivClick()}
              style={{
                opacity: opacity,
                transition: "opacity 1s ease",
              }}
            >
              {" "}
              <Card className="expandedCard">
                <Card.Img variant="top" src={`${expanedCard.img}`} />
                <Card.Body className="text-center p-5">
                  <Card.Title>{expanedCard.title}</Card.Title>
                  <Card.Text>{expanedCard.hiddenText}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          )}
        </Container>
      </Row>
    </Container>
  );
};
export default Design;

export const getStaticPaths: GetStaticPaths = async () => {
  const designCategories = Object.keys(designData);

  const paths = designCategories.map((category) => ({
    params: { design: category },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let data: DesignCategory | null = null;

  if (params?.design) {
    const categoryData = designData[params.design as keyof typeof designData];
    if (categoryData) {
      data = {
        banner: categoryData.banner,
        cards: categoryData.cards,
        sharedOtherDesigns: categoryData.sharedOtherDesigns,
      };
    }
  }
  console.log(data);

  return {
    props: {
      data,
    },
  };
};
