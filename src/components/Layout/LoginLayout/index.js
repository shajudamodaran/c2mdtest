import React, { lazy,useEffect,useState } from "react";
import MobileFooter from "../../FooterMobileScreen";
import Style from "./Loginlayout.module.scss";
import { useDimensions } from "../../../logic/Dimensions";
import { useLocation } from "react-router-dom";


const Header = React.lazy(() => import("../../Header"));
const Footer = React.lazy(() => import("../../Footer"));

function LoginLayout({ children }) {
  const { width } = useDimensions();
  const [showFilter,setShowFilter] = useState(false);
  const [searchDoctor,setSearchDoctor] = useState("");
  const location = useLocation();

  return (
    <>
      <Header showFilter={showFilter} setShowFilter={setShowFilter} searchDoctor={searchDoctor} setSearchDoctor={setSearchDoctor}/>
      <div className={Style.LoginLayout_body}>
      {width>=992?children:
        React.cloneElement(children, { showFilter,setShowFilter,searchDoctor,setSearchDoctor })}
        </div>
      {location.pathname.search('bookAppointment')==-1&&width>=992?<Footer />:null}
      {location.pathname.search('bookAppointment')==-1&&width<992?<MobileFooter/>:null}
    </>
  );
}

export default LoginLayout;
