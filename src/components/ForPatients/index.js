import React from "react";
import Style from "./Forpatient.module.scss";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import Assets from "../Layout/Assets";
import CustomAccordion from "../Layout/CustomAccordion";
import { Itemlist, accordionData, ConsultText } from "../Constants/ForPatients";
function ForPatient() {
  return (
    <div className={Style.ForPatient}>
      <div className={Style.topsection}>
        <div className={Style.section1}>
          <Container>
            <div className={Style.section1_content}>
              <h1 className={Style.section1_heading}>
                We are always help you to
                <br /> live a <span>healthy life</span>
              </h1>
              <div className={Style.section1_button_wrapper}>
                <Button variant="secondary" className={Style.section1_button}>
                  Book appointment
                </Button>
              </div>
            </div>
          </Container>
        </div>
        <div className={Style.section2}>
          <Container>
            <div className={Style.section2_Img}>
              <img src={Assets.patientImg1} alt="" />
            </div>
          </Container>
        </div>

        <Container>
          <div className={Style.content_wrapper}>
            <div className={Style.top_middile_wrapper}>
              <Row>
                <Col lg={6}>
                  <div className={Style.top_middile_left}>
                    <h2>
                      Exceptional <span>Virtualcare </span>
                      <br /> Designed For Real Life
                    </h2>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className={Style.top_middile_right}>
                    <p>
                      Connect2MyDoctor is a convenient and affordable way to
                      manage your health better. Connect2MyDoctor is NOT a
                      replacement for your regular visit to a doctor or a health
                      professional or incase of any medical emergency.
                      Connect2MyDoctor is a convenient and affordable way to
                      manage your health better.Connect2MyDoctor is NOT a
                      replacement
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <Row>
              {ConsultText?.map((item, index) => {
                return (
                  <Col md={6} lg={4} >
                    <div className={Style.Content_main}>
                      <h1>{item.title}</h1>
                      <h5>{item.content1}</h5>
                      <p>{item.content2}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </div>
      <div className={Style.middile_section}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={Style.imgSection}></div>
            </Col>
            <Col lg={6}>
              <div className={Style.ContentsSection}>
                <h1 className={Style.heading}>
                  When Not To Use Connect2mydoctor?
                </h1>
                <p className={Style.text}>
                  Connect2MyDoctor should NOT be used incase of any medical
                  problem that is life threatening or that may cause serious
                  health damage. Some of the examples of ailments for which you
                  should attend a doctor/emergency care are below.
                </p>

                <div className={Style.ItemList_wrapper}>
                  <ul>
                    {Itemlist?.slice(0, 4).map((item, index) => {
                      return (
                        <li key={index}>
                          <img src={Assets.EllipseTick} alt="" />
                          {item.title}
                        </li>
                      );
                    })}
                  </ul>
                  <ul>
                    {Itemlist?.slice(4, 8).map((item, index) => {
                      return (
                        <li key={index}>
                          <img src={Assets.EllipseTick} alt="" />
                          {item.title}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={Style.bottom_section}>
        <Container>
          <div className={Style.bottom_wrapper}>
            <h1 className={Style.heading}>
              Frequently Asked <span>Questions</span>
            </h1>
            {accordionData?.map((item, index) => {
              return (
                <CustomAccordion
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ForPatient;
