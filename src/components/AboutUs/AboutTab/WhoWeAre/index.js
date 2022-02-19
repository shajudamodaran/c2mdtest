import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Style from "./Who.module.scss";
import Assets from "../../../Layout/Assets";
function WhoWeAre() {
  return (
    <div className={Style.who_main}>
      <hr />
      <Container>
        <Row className={Style.who_row}>
          <Col sm={6}>
            <img src={Assets.qts} alt="Image" className={Style.main_image} />
            <p className={Style.p1}>
              We believe that it takes great people to deliver a great product.
            </p>
            <p className={Style.p2}>Dr . John Deo</p>
          </Col>

          <Col sm={6} className={Style.title_col}>
            <div className={Style.about_card}>
              <Card.Body>
                <Card.Title className={Style.who_title}>
                  Who We <span>Are</span>
                </Card.Title>

                <Card.Text className={Style.who_content}>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose Many desktop
                  publishing
                </Card.Text>
                <Card.Text className={Style.who_content}>
                  Web page editors now use Lorem Ipsum as their default model
                  text, and a search for 'lorem ipsum' will uncover many web
                  sites still in their infancy. Various versions have evolved
                  over the years, sometimes by accident, sometimes on purpose
                </Card.Text>
              </Card.Body>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhoWeAre;
