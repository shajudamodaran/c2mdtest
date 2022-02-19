import React from "react";
import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Style from "./Image.module.scss";
import Assets from "../../../Layout/Assets";

function PaymentImage() {
  return (
    <Fragment>
      <Col lg={6}>
        <div className={Style.main}>
          <div className={Style.mob_paymentTitle}>
            <hr></hr>
            <h2 className={Style.Title}> How do I make the payment?</h2>
          </div>
          <img src={Assets.card1} alt="Image1" />
          {/* <Row>
            <Col sm="auto"></Col>
            <Col sm="auto">
              <img src={Assets.card1} alt="Image1" />
            </Col>
            <Col sm="auto">
              <img src={Assets.card2} alt="Image2" className={Style.image2} />
            </Col>
          </Row> */}
        
          {/* <Row>
            <Col sm="auto"></Col>
            <Col sm="auto"></Col>
            <Col sm="auto"></Col>
            <Col sm="auto"></Col>
            <Col sm="auto">
              <img src={Assets.card3} alt="Image3" className={Style.image3} />
            </Col>
            <Col sm="auto">
              <img src={Assets.card4} alt="Image4" className={Style.image4} />
            </Col>
          </Row> */}
            {/* <div className={Style.fig_holder}>
              <div className={Style.imgsec1}>
                <div className={Style.img1}>
                    <img src={Assets.card1} alt="Image1" />
                  </div>
                  <div className={Style.img3}>
                    <img src={Assets.card3} alt="Image3" />
                  </div>
              </div>
              <div className={Style.imgsec2}>
                <div className={Style.img2}>
                    <img src={Assets.card2} alt="Image2" />
                  </div>
                  <div className={Style.img4}>
                    <img src={Assets.card4} alt="Image4" />
                  </div>
              </div>
            </div> */}
        </div>
      </Col>
    </Fragment>
  );
}

export default PaymentImage;
