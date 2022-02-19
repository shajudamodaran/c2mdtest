import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Style from "./Consultation.module.scss";
import Container from "react-bootstrap/Container";
import Assets from "../../Layout/Assets";

function MicroConsultation() {
  return (
    <div className={Style.main}>
    <Container>
      <h5 className={Style.title}>What is required for the <span> consultation?</span></h5><br/>
    
        <Row>
        <Col lg={6} className={Style.col}>
            <Card >
              <Row className={Style.card}>
                <Col  md={2}>  
                <div className={Style.card_title_img}>
                <img src={Assets.computer} alt="computer" />
                    <div className={Style.mob_card_title}>
                    <h2 className={Style.head}>Computer</h2>
                    </div>
                  </div>
                </Col>
                <Col  md={10}> 
                  <div className={Style.main_card_title}>
                    <h2 className={Style.head}>Computer</h2>
                  </div>
                  <ul className={Style.list}>
                    <li>Internet Connection with a minimum speed of 1Mbps</li>
                    <li>Built-in or stand alone camera, microphone and speaker</li>
                    <li>Google Chrome browser</li>
                  </ul>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col lg={6} className={Style.col}>
            <Card >
              <Row className={Style.card}>
                <Col md={2}>  
                  <div className={Style.card_title_img}>
                    <img src={Assets.mobile} alt="computer" /> 
                    <div className={Style.mob_card_title}>
                      <h2 className={Style.head}>Mobile</h2>
                    </div>
                  </div>
               
                </Col>
                <Col md={10}> 
                    <div className={Style.main_card_title}>
                      <h2 className={Style.head}>Mobile</h2>
                    </div>
                  <ul className={Style.list}>
                    <li>Android or iPhone application downloaded from the app store</li>
                    <li>3G or WiFi internet connection</li>
                    <li>Front access camera,microphone and speaker</li>
                    <li>Download the app &nbsp; <img src={Assets.andriod} alt="andriod" /> &nbsp;<img src={Assets.apple} alt="andriod" /></li>
                  </ul>
                </Col>
              </Row>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default MicroConsultation;
