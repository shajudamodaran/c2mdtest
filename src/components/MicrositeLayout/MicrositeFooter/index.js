import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Assets from "../../Layout/Assets";
import Style from "./Footer.module.scss";
function MicrositeFooter() {
  return (
    <div className={Style.Footer}>
      <Container>
        <Row>
          <Col md={3}>
            <p className={Style.leftText2}>Powered by </p>
            <img
              src={Assets.Footer}
              alt="footerIcon"
              className={Style.footer_img}
            />
          </Col>

          <Col md={9}>
            <p className={Style.Top_text}>Connect2MyDoctor cannot be used in case of emergency</p>
            <p className={Style.Top_text_1}>Connect2MyDoctor does not provide medical advice, diagnosis, or treatment</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MicrositeFooter;
