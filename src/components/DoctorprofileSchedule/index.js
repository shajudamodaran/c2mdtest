import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Style from "./DoctorProfileSchedule.module.scss";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import {
  fetch_DoctorDetail,
  removeDoctorDetails,
} from "../../actions/DoctorDetailsAction";
import DoctorProfilemain from "./DoctorProfileMain";
import { useParams } from "react-router-dom";
import MobileDoctorProfile from "../DoctorProfileMobileScreen";
import { useDimensions } from "../../logic/Dimensions";
import { fetch_clientDetails } from "../../actions/MicrositeAction";
const DoctorProfileSidebar = React.lazy(() => import("./DoctorProfileSidebar"));

function DoctorProfileSchedule() {
  const { width } = useDimensions();
  let { doctorid } = useParams();
  const dispatch = useDispatch();
  
  const doctorDetail = useSelector(
    (state) => state.doctorDetail.doctor_Details
  );
  const clientDetails = useSelector((state) => state.clientDetails);

  useEffect(() => {
    dispatch(fetch_DoctorDetail(doctorid));

    return () => {
      dispatch(removeDoctorDetails());
    };
  }, []);

  useEffect(() => {
    if (doctorDetail.thirdPartysiteurl && !clientDetails.id) {
      dispatch(fetch_clientDetails(doctorDetail.thirdPartysiteurl));
    }
  }, [doctorDetail]);

  return (
    <div className={Style.DoctorProfileSchedule}>
      <Container>
        {doctorDetail.doctorName ? (
          <Row>
            <Col sm={12} lg={3}>
              <DoctorProfileSidebar doctorDetail={doctorDetail} />
            </Col>
            <Col sm={12} lg={9}>
              {width < 992 ? (
                <MobileDoctorProfile doctorDetail={doctorDetail} />
              ) : null}
              <DoctorProfilemain
                doctorDetail={doctorDetail}
                doctorid={doctorid}
              />
            </Col>
          </Row>
        ) : (
          <div className={Style.loader}>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </Container>
    </div>
  );
}

export default DoctorProfileSchedule;
