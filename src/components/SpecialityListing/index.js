import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Style from "./SpecialityListing.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { fetchSpeciality } from "../../actions/SpecialityListingAction";
import CommonLoader from "../Shimmer";
import SpecialityListShimmer from "../Shimmer/SpecialityList";
const Speciality = React.lazy(() => import("../Speciality"));
const SpecialitySearch = React.lazy(() => import("./SpecialitySearch"));

function SpecialityListing() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSpeciality());
  }, []);
  const speciality = useSelector(
    (state) => state.specialityList.specialityList
  );

  const [searchQuery, setSearchQuery] = useState(null);
  const [limit, setLimit] = useState(9);
  const [viewAll, setView] = useState(true);
  const dataItem =
    speciality &&
    speciality.legth !== 0 &&
    speciality.filter((item) => {
      if (searchQuery === null) {
        return item;
      } else if (
        item.specialityName.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return item;
      }
    });
  const onsubmit = () => {
    setLimit(dataItem && dataItem.legth);
    setView(false);
  };
  return (
    <div className={Style.SpecialityListing}>
      <div className={Style.TopSection}>
        <div className="">
          <Container>
            <h1>
              Find Doctors By <span>Specialities</span>
            </h1>
            <p>
              Start your care now by choosing from over 4000 doctors and 55
              specialities
            </p>
          </Container>
        </div>
      </div>
      <div className={Style.Search}>
        <Container>
          <SpecialitySearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </Container>
      </div>

      <Container>
        <div className={Style.Speciality_wrapper}>
          {dataItem && speciality.length !== 0 ? (
            dataItem.slice(0, limit).map((item) => {
              return <Speciality Item={item} key={item.specialityId} />;
            })
          ) : (
            <>
              {[...Array(9)].map((e, i) => (
                <SpecialityListShimmer />
              ))}
            </>
          )}
          {dataItem.length == 0 && speciality.length !== 0 && (
            <div className={Style.notfound}>
              Sorry speciality's are not found.
            </div>
          )}
        </div>

        {viewAll && (
          <div className={Style.ViewMore}>
            <Button
              variant="outline-secondary"
              className={Style.view_Btn}
              onClick={onsubmit}
            >
              View All
            </Button>{" "}
          </div>
        )}
      </Container>
    </div>
  );
}

export default SpecialityListing;
