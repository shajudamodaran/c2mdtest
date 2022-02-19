import React from "react";
import Style from "./ForDoctor.module.scss";
import { Row, Col, Button } from "react-bootstrap";
function ForDoctor() {
  return (
    <div className={Style.forDoctor}>
      <div className={Style.topSection}>
        <Row>
          <Col lg={6}>
            <div className={Style.topleft}></div>
          </Col>
          <Col lg={6}>
            <div className={Style.topRight}>
              <h2>
                Simplify healthcare <br /> delivery to everyone,
                <br /> everywhere.
              </h2>
              <p>
                Virtual care enables better health management
                <br />
                experience for patients, but it also makes life simpler and
                <br /> better for you, the practitioner.
              </p>
              <Button variant="secondary" className={Style.joinusBtn}>
                Join Us
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ForDoctor;
