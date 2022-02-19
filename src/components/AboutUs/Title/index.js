import React from "react";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Assets from "../../Layout/Assets";
import Cards from "./Cards";
import Style from "./Title.module.scss";

function Title() {
  return (
    <div className={Style.about_bg}>
      <Container>
        <Row className={Style.about_main}>
          <Col sm={6} className={Style.img_col}>
            <Row xs="auto">
              <Col>
                <img src={Assets.upper_grid} alt="Upper Grid" />
              </Col>
              <Col>
                <img
                  src={Assets.doc}
                  alt="Doctor"
                  className={Style.doc_image}
                />
              </Col>
              <Col>
                <img
                  src={Assets.lower_grid}
                  alt="Upper Grid"
                  className={Style.lower_grid}
                />
              </Col>
            </Row>
          </Col>

          <Col sm={6} className={Style.title_col}>
            <div className={Style.about_card}>
              <Card.Body>
                <h7>About Us</h7>
                <Card.Title className={Style.about_title}>
                  We want to enable you to Manage Your Health Better.
                </Card.Title>

                <Card.Text className={Style.about_content}>
                  Healthcare costs are rising all over the world. The present
                  consumer demands innovative and new techniques of healthcare
                  services as per their lifestyle. To utilise these healthcare
                  services, the system demands the patient to be physically
                  available at the doctor’s location.
                </Card.Text>
              </Card.Body>
            </div>
          </Col>
        </Row>
        <Cards />
      </Container>
    </div>
  );
}

export default Title;
