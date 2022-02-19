import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Assets from "../../../Layout/Assets";
import Style from "./Cards.module.scss";
import Container from "react-bootstrap/Container";

function Cards() {
  return (
    <>
       <Container>
        <Row>
        <Col sm={4} >
            <Card className={Style.cards_col}>
              <Row xs="auto" className={Style.card}>
                <Col>  <img src={Assets.blue_hrt} alt="computer" className={Style.card_img}/></Col>
                <Col xs={6}> 
                  <h7 className={Style.card_head}>Class hospitalization</h7>
                  <p className={Style.card_content}>Converting your health matter including top class hospitalization</p>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col sm={4} >
            <Card className={Style.cards_col}>
              <Row xs="auto" className={Style.card}>
                <Col>  <img src={Assets.green_hrt} alt="computer" /></Col>
                <Col xs={6}> 
                  <h7 className={Style.card_head}>Class hospitalization</h7>
                  <p className={Style.card_content}>Converting your health matter including top class hospitalization</p>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col sm={4} >
          <Card className={Style.cards_col}>
              <Row xs="auto" className={Style.card}>
                <Col>  <img src={Assets.red_hrt} alt="computer" /></Col>
                <Col xs={6}> 
                  <h7 className={Style.card_head}>Class hospitalization</h7>
                  <p className={Style.card_content}>Converting your health matter including top class hospitalization</p>
                </Col>
              </Row>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default Cards;
