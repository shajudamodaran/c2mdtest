import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Style from "./Advisor.module.scss";
import Assets from "../../../Layout/Assets";

function MeetOurAdvisor() {
  return (
    <div className={Style.who_main}>
      <hr />
      <Container>
        <div className={Style.meet_title}>
          <div>
            Meet Our <span>Advisors</span>
          </div>
          <div className={Style.meet_content}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </div>
        </div>

        <Row className={Style.meet_row}>
          <Col sm>
            <Card className={Style.meet_card}>
              <Card.Img variant="top" src={Assets.man1} alt="man1" />
              <Card.Body>
                <Card.Title className={Style.meet_card_title}>
                  {" "}
                  John Smit
                </Card.Title>
                <Card.Text className={Style.meet_card_text}>
                  Co Founder & CEO
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className={Style.meet_card}>
              <Card.Img variant="top" src={Assets.man2} alt="man2" />
              <Card.Body>
                <Card.Title className={Style.meet_card_title}>
                  {" "}
                  Arun Charndran
                </Card.Title>
                <Card.Text className={Style.meet_card_text}>
                  Co Founder
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className={Style.meet_card}>
              <Card.Img variant="top" src={Assets.man3} alt="man3" />
              <Card.Body>
                <Card.Title className={Style.meet_card_title}>
                  {" "}
                  Mathew John
                </Card.Title>
                <Card.Text className={Style.meet_card_text}>
                  Director of Strategy
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className={Style.meet_card}>
              <Card.Img variant="top" src={Assets.man4} alt="man4" />
              <Card.Body>
                <Card.Title className={Style.meet_card_title}>
                  {" "}
                  Mathew John
                </Card.Title>
                <Card.Text className={Style.meet_card_text}>
                  Director of Strategy
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className={Style.meet_row2}>
          <Col sm>
            <Card className={Style.meet_card}>
              <Card.Img variant="top" src={Assets.man4} alt="man4" />
              <Card.Body>
                <Card.Title className={Style.meet_card_title}>
                  {" "}
                  John Smit
                </Card.Title>
                <Card.Text className={Style.meet_card_text}>
                  Co Founder & CEO
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className={Style.meet_card}>
              <Card.Img variant="top" src={Assets.man3} alt="man3" />
              <Card.Body>
                <Card.Title className={Style.meet_card_title}>
                  {" "}
                  Arun Charndran
                </Card.Title>
                <Card.Text className={Style.meet_card_text}>
                  Co Founder
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className={Style.meet_card}>
              <Card.Img variant="top" src={Assets.man2} alt="man2" />
              <Card.Body>
                <Card.Title className={Style.meet_card_title}>
                  {" "}
                  Mathew John
                </Card.Title>
                <Card.Text className={Style.meet_card_text}>
                  Director of Strategy
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className={Style.meet_card}>
              <Card.Img variant="top" src={Assets.man1} alt="man1" />
              <Card.Body>
                <Card.Title className={Style.meet_card_title}>
                  {" "}
                  Mathew John
                </Card.Title>
                <Card.Text className={Style.meet_card_text}>
                  Director of Strategy
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MeetOurAdvisor;
