import React, { useEffect } from "react";
import Style from "./Treatment.module.scss";
import Container from "react-bootstrap/Container";
import { useSelector, useDispatch } from "react-redux";
import { fetchSpeciality } from "../../actions/SpecialityListingAction";
const Speciality = React.lazy(() => import("../Speciality"));

function TreatmentListing() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchSpeciality());
  }, []);

  const speciality = useSelector(
    (state) => state.specialityList.specialityList
  );

  return (
    <div>
      <Container>
        <div className={Style.trtmnt_wrp}>
          <div className={Style.Heading}>
            <hr />
            <div className={Style.Title}>Treatments & Departments Covered</div>
            <div className={Style.SubTitle}> We have doctors from the following specialities</div>
          </div>
          <div className={Style.TreatmentListing}>
            <div className={Style.Treatment_wrapper}>
                {speciality &&
                speciality.legth !== 0 &&
                speciality.map((item) => {
                  return <Speciality Item={item} key={item.specialityId} />;
                })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TreatmentListing;
