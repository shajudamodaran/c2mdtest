import React, { lazy, useEffect, useState } from "react";
import MobileFooter from "../../FooterMobileScreen";
import Style from "./DoctorListingLayout.module.scss";
import { useDimensions } from "../../../logic/Dimensions";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = React.lazy(() => import("../../Header"));
const MicrositeHeader = React.lazy(() =>
  import("../../MicrositeLayout/MicrositeHeader")
);
const Footer = React.lazy(() =>
  import("../../MicrositeLayout/MicrositeFooter")
);

function DoctorlistingLayout({ children }) {
  const { width } = useDimensions();
  const [showFilter, setShowFilter] = useState(false);
  const [searchDoctor, setSearchDoctor] = useState("");
  const location = useLocation();
  const clientDetails = useSelector((state) => state.clientDetails);


  return (
    <>
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
    </>
  );
}

export default DoctorlistingLayout;
