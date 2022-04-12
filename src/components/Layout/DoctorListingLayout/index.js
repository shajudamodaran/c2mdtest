import React, { lazy, useEffect, useRef, useState } from "react";
import MobileFooter from "../../FooterMobileScreen";
import Style from "./DoctorListingLayout.module.scss";
import { useDimensions } from "../../../logic/Dimensions";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetch_doctors } from "../../../actions/DoctorListingAction";
const Header = React.lazy(() => import("../../Header"));
const MicrositeHeader = React.lazy(() =>
  import("../../MicrositeLayout/MicrositeHeader")
);
const Footer = React.lazy(() =>
  import("../../MicrositeLayout/MicrositeFooter")
);

function DoctorlistingLayout({ children, pagination, setPagination, selectedSpeciality, setSpeciality }) {
  const { width } = useDimensions();
  const [showFilter, setShowFilter] = useState(false);
  const [searchDoctor, setSearchDoctor] = useState("");
  const location = useLocation();
  const clientDetails = useSelector((state) => state.clientDetails);
  let doctorListingScroll = useRef()

  let dispatch = useDispatch()

  let onScrollDoctorList = async () => {



    const { scrollTop, scrollHeight, clientHeight } = doctorListingScroll.current;

    if (scrollTop + clientHeight === scrollHeight) {


      if (!selectedSpeciality || selectedSpeciality=="ALL") {
        // TO SOMETHING HERE
        console.log('Reached bottom')

        // if (FilterItem.length % 4 == 0) {

        // await setLoader(true);
        // await dispatch(
        //   fetch_doctors(
        //     selectedSpeciality,
        //     clientDetails ? clientDetails.clinicurl : "",
        //     pagination + 10
        //   )
        // );
        if(setPagination)
        {
          setPagination(pagination + 10)
        }
       
        // await setLoader(false);


        // }

      }




    }

  }



  return (
    <div className={Style.DoctorlistingLayout_scroll} ref={doctorListingScroll} onScroll={() => { onScrollDoctorList() }} style={{ height: "100vh", overflow: "auto" }}>
      {width >= 992 ? (
        <MicrositeHeader
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          searchDoctor={searchDoctor}
          setSearchDoctor={setSearchDoctor}
          clientDetails={clientDetails}
        />
      ) : (
        <Header
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          searchDoctor={searchDoctor}
          setSearchDoctor={setSearchDoctor}
          clientDetails={""}
        />
      )}
      <div className={Style.LoginLayout_body}>
        {width >= 992
          ? children
          : React.cloneElement(children, {
            showFilter,
            setShowFilter,
            searchDoctor,
            setSearchDoctor,
          })}
      </div>
      {location.pathname.search("bookAppointment") == -1 && width >= 992 ? (
        <Footer />
      ) : null}
      {location.pathname.search("bookAppointment") == -1 && width < 992 ? (
        <MobileFooter />
      ) : null}
    </div>
  );
}

export default DoctorlistingLayout;
