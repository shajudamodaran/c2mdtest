import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Style from "./Investors.module.scss";
import Assets from "../../../Layout/Assets";

function OurInvestors() {
  return (
    <div className={Style.who_main}>
      <hr />
      <Container>
        <div className={Style.meet_title}>
          <div>
            Our <span>Investors</span>
          </div>
          <div className={Style.meet_content}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </div>
        </div>

        <Row className={Style.meet_row}>
          <Col sm={2}>
            <Card className={Style.meet_card}>
              <Card.Img variant="top" src={Assets.medtech} alt="medtech" />
            </Card>
          </Col>
          <Col sm={2}>
            <Card className={Style.meet_card}>
              <Card.Img variant="top" src={Assets.artisan} alt="artisan" />
            </Card>
          </Col>
          <Col sm={2}>
            <Card className={Style.meet_card}>
              <Card.Img variant="top" src={Assets.educating} alt="educating" />
            </Card>
          </Col>
          <Col sm={2}>
            <Card className={Style.meet_card}>
              <Card.Img variant="top" src={Assets.medtech} alt="medtech" />
            </Card>
          </Col>
          <Col sm={2}>
            <Card className={Style.meet_card}>
              <Card.Img variant="top" src={Assets.artisan} alt="artisan" />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OurInvestors;
