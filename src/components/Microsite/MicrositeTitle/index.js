import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Style from "./Title.module.scss";
import Assets from "../../Layout/Assets";
import { useHistory } from "react-router";


function MicrositeTitle({clientDetails}) {
  const history = useHistory();

  return (
    <Container>
      <Row className={Style.Main}>
        <Col md={7}>
          <hr className={Style.border_line}/>
          <Card className={Style.card}>
            <Card.Body>
              <Card.Title className={Style.title}>
                Be prepared to aid your health with the best
              </Card.Title>

              <Card.Text className={Style.content}>
                Healthcare costs are rising all over the world. The present
                consumer demands innovative and new techniques of healthcare
                services as per their lifestyle. To utilise these healthcare
                services, the system demands the at the doctor’s location.
              </Card.Text>
              <Button variant="primary" className={Style.button} 
              onClick={() =>
                history.push({
                  pathname: '/'+clientDetails.clinicurl+"/ourdoctor",
                })
              }
              >
                Book Appointment
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <img
            src={Assets.man_doctor}
            alt="Image"
            className={Style.main_image}
          />
        </Col>
      </Row>

      <br />
      <div>
        <Card.Title className={Style.sub_title}>
          How does the video consultation work ?
        </Card.Title>
        <div className={Style.MainNumbers}>
          <div className={Style.coleach}>
            <div className={Style.number}>
              <img src={Assets.one} alt="Image" />
            </div>
            <div className={Style.sub_content_wrap}>
              <div className={Style.sub_content_left}>
                  <h3 className={Style.sub_title1}>Log in</h3>
                  <p className={Style.sub_content}>
                    Log on to the website or download the app from the app store
                  </p>
              </div>
              <div className={Style.sub_content_right}>
                <img
                  src={Assets.arrow}
                  alt="Image"
                  className={Style.sub_image}
                />
              </div>
            </div>
          </div>

          <div className={Style.coleach}>
            <div className={Style.number}>
              <img src={Assets.two} alt="Image" />
            </div>
            <div className={Style.sub_content_wrap}>
              <div className={Style.sub_content_left}>
                  <h3 className={Style.sub_title1}>Selection</h3>
                  <p className={Style.sub_content}> Log on the website up the bulk of the card's content.
                  </p>
              </div>
              <div className={Style.sub_content_right}>
                <img
                  src={Assets.arrow}
                  alt="Image"
                  className={Style.sub_image}
                />
              </div>
            </div>
          </div>
          <div className={Style.coleach}>
            <div className={Style.number}>
              <img src={Assets.three} alt="Image" />
            </div>
            <div className={Style.sub_content_wrap}>
              <div className={Style.sub_content_left}>
                  <h3 className={Style.sub_title1}>Booking</h3>
                  <p className={Style.sub_content}>   Booking an appointment at a convenient time by making your
                  payment
                  </p>
              </div>
              <div className={Style.sub_content_right}>
                <img
                  src={Assets.arrow}
                  alt="Image"
                  className={Style.sub_image}
                />
              </div>
            </div>
          </div>
          <div className={Style.coleach}>
            <div className={Style.number}>
              <img src={Assets.four} alt="Image" />
            </div>
            <div className={Style.sub_content_wrap}>
              <div className={Style.sub_content_left}>
                  <h3 className={Style.sub_title1}>Consultation</h3>
                  <p className={Style.sub_content}>    At the time of appointment, Click on the Join Now button from
                  the dashboard to start the video consultation
                  </p>
              </div>
              <div className={Style.sub_content_right}>
                <img
                  src={Assets.arrow}
                  alt="Image"
                  className={Style.sub_image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MicrositeTitle;
