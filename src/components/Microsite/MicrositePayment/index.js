import React from "react";
import {  Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import PaymentImage from "./PaymentImage";
import PaymentContent from "./PaymentContent";
import  Style  from "./Payments.module.scss";

function MicrositePayments() {
  return (
    <div className={Style.main} >
      <Container>
        <Row className={Style.payment_wrp}>
         <PaymentImage />
         <PaymentContent />
        </Row>
      </Container>
    </div>
  );
}

export default MicrositePayments;
