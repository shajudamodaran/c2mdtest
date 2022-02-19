import React from "react";
import { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Style from "./Content.module.scss";
import { Col } from "react-bootstrap";

function PaymentContent() {
  return (
    <Fragment>
      <Col lg={6} className={Style.main}>
        <hr />
        <Card className={Style.card}>
          <Card.Body>
            <Card.Title className={Style.title}>
              How do I make the payment?
            </Card.Title>
            <Card.Title className={Style.title1}>International </Card.Title>

            <Card.Text className={Style.content}>
              Payments can be done in your local currency (we support over 93
              different currencies) using a valid credit or debit card
            </Card.Text>
            <Card.Title className={Style.title1}>India </Card.Title>

            <Card.Text className={Style.content}>
              Payments can be done using a valid credit/debit card, online
              banking, Wallets and UPI
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
}

export default PaymentContent;
