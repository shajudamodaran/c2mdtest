import React from "react";
import Style from "./Contact.module.scss";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Assets from "../Layout/Assets";
function ConatctUs({clientDetails}) {
  return (
    <Container className={Style.container}>
     
      <Row className={Style.row}>
        <Col md={6}>
        <hr />
          <Card className={Style.card}>
            <Card.Body>
              <Card.Title className={Style.title}>Contact us </Card.Title>

              <Row xs="auto" className={Style.title1}>
                <Col >
                  <img src={Assets.location} alt="location" />
                </Col>
                <Col xs={9}>
                  <h5 className={Style.head}>Address</h5>
                  <div className={Style.address}>
                    {clientDetails.address}
                  </div>
                </Col>
              </Row>


              <Row xs="auto" className={Style.title1}>
                <Col>
                  <img src={Assets.email} alt="email" />
                </Col>
                <Col xs={9}>
                  <h5 className={Style.head}>Email</h5>
                  <div className={Style.address}>
                    <a href="mailto:onlineconsult@shalby.in">onlineconsult@shalby.in</a>
                 
                  </div>
                  <div className={Style.address}>
                  <a href="tel:+91 9624977794"> +91 9624977794</a></div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <img
            src={Assets.location_pic}
            alt="location"
            className={Style.location_pic}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ConatctUs;
