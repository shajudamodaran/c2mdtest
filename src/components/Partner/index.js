import React from "react";
import Style from "./Partner.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Assets from "../Layout/Assets";
function Partner() {
  let Item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className={Style.partner_with_us}>
      <div className={Style.top_section}>
        <Container>
          <div className={Style.top_content_wrapper}>
            <h2>Partner Hospital/Speciality Clinic</h2>
            <p>
              It s long established fact that the reader will be distracted by a
              readable content of a page when looking at this layout.The point of using Lorem Ipsum
            </p>
          </div>
        </Container>
      </div>
      <div className={Style.bottom_section}>
        <Container>
          <div className={Style.select_wrapper}>
            <select className={Style.select_main}>
              <option value="All Countries">All Countries</option>
              <option value="All Countries">All Countries</option>
              <option selected value="All Countries">
                All Countries
              </option>
              <option value="All Countries">All Countries</option>
            </select>
          </div>
          <div className={Style.content_wrapper}>
            <Row>
              {Item.map((item, index) => {
                return (
                  <Col lg={3} md={4} xs={6}>
                    <div className={Style.content_main} key={index}>
                      <div className={Style.content_Top}>
                        <img className={Style.img_logo}  src={Assets.bhm} alt="" />
                        <img src={Assets.INDIA} alt="" />
                      </div>
                      <div className={Style.content_Bottom}>
                        <p>Baby Memorial Hospital</p>
                        <img className={Style.img_arrow} src={Assets.arrowIcon} alt="" />
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Partner;
