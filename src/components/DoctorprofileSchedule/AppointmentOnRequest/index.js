import React from "react";
import Style from "./AppointmentOnRequest.module.scss";
import { Button, Row, Col } from "react-bootstrap";
function AppointmentOnRequest({ bookingApp }) {
  return (
    <div className={Style.AppointmentOnRequest}>
      <Row className={Style.wrapper}>
        <Col sm={12} md={7} lg={7}>
          <div className={Style.leftSection}>
            <h6 className={Style.heading}>
              Appointment available only on request
            </h6>
            <p className={Style.content}>
              To request an appointment, click the Request Now button
            </p>
          </div>
        </Col>
        <Col sm={12} md={5} lg={5}>
          <div className={Style.rightSection}>
            <Button
              variant="outline-primary"
              className={Style.reqst_btn}
              onClick={() => {
                bookingApp();
              }}
            >
              Request Now
            </Button>
            <p className={Style.rqst_text}>
              Payment once appointment is confirmed
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AppointmentOnRequest;
