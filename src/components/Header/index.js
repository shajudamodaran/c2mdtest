import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation,useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Container,NavDropdown,Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { logoutAction } from "../../actions/LoginAction";

import Style from "./Header.module.scss";
import Assets from "../Layout/Assets";
import MobileHeader from "../HeaderMobileScreen";
import { useDimensions } from "../../logic/Dimensions";
import { useSelector, useDispatch } from "react-redux";
import { fetch_clientDetails } from "../../actions/MicrositeAction";

function Header({ showFilter, setShowFilter, searchDoctor, setSearchDoctor }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { width } = useDimensions();

  const userData = useSelector((state) => state.login);
  const patientData = useSelector(
    (state) => state.login.patientDashboard
);

  const [expanded, setExpanded] = useState(false);
  window.onscroll = () => sampleFunction();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const clientDetails = useSelector((state) => state.clientDetails);
  let { clinicId } = useParams();

  let path = ["/signup", "/signup/verify", "/reset", "/signin"];
  let checkRoute = path.includes(location.pathname);

  if (location.pathname.search("bookAppointment") != -1) {
    checkRoute = true;
  }

  useEffect(()=>{
    if(clientDetails.logo==undefined)
    {
      dispatch(
        fetch_clientDetails(clinicId == undefined ? "babymemorial" : clinicId)
      );
    }
  },[])

  function sampleFunction() {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      document.body.classList.add("fix-header");
    } else {
      document.body.classList.remove("fix-header");
    }
  }

  const handleSubmit = () => {
    var body = document.body;

    body.classList.toggle("nav-open");
    setExpanded(!expanded);
  };
  const logout = () => {
    if (width < 992) {
      document.body.classList.remove("nav-open");
      setExpanded(!expanded);
    }
    dispatch(logoutAction(userData,patientData));
    history.push("/");
  };

  const homePage = () => {
    // document.body.classList.toggle("nav-open");

    if (width < 992) {
      // document.body.classList.remove("nav-open");
      if (location.pathname != "/") {
        document.body.classList.toggle("nav-open");
        history.push("/");
      }
    }
  };

  const CustomHeader1 = () => {
    return (
      <div className={Style.Header_inner}>
        {" "}
        {width >= 992 ? (
          <div className={Style.header_left}>
            <Navbar.Brand>
              <Link to="/">
                <img
                  src={Assets.logo}
                  alt="Connect2MyDoctor"
                  className={Style.logoImg}
                />
              </Link>
            </Navbar.Brand>
            <Nav
              defaultActiveKey="#Specialities"
              className={Style.menulink_main}
            >
              <Link to="/">Specialities</Link>
              <Link to="/">About Us</Link>
              <Link to="/partner-with-us">When to Use</Link>
              <Link to="/forpatients">For Doctors</Link>
              <Link to="/">Contact Us</Link>
            </Nav>
          </div>
        ) : null}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleSubmit}
        />
        {width < 992 ? (
          <MobileHeader
            showFilter={showFilter}
            searchDoctor={searchDoctor}
            setSearchDoctor={setSearchDoctor}
            setShowFilter={setShowFilter}
          />
        ) : null}
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav defaultActiveKey="#Specialities" className={Style.menulink_mob}>
            <Link onClick={homePage}>Home</Link>
            {/* <Link onClick={homePage}>Specialities</Link> */}
            {/* <Link onClick={homePage}>About Us</Link>
            <Link onClick={homePage}>When to Use</Link>
            <Link onClick={homePage}>For Doctors</Link>
            <Link onClick={homePage}>Contact Us</Link> */}
          </Nav>

          {userData.login ? (
            <Button
              variant="outline-secondary"
              className={Style.siginup_Btn}
              onClick={logout}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="outline-secondary"
              className={Style.siginup_Btn}
              onClick={() => {
                if (width < 992) {
                  document.body.classList.toggle("nav-open");
                }
                history.push("/signup");
              }}
            >
              Sign in / Sign up
            </Button>
          )}

          <div className={Style.iconWrapper}>
            <span>Download Our App :</span>
            <a href={clientDetails.androidapp
                    ? clientDetails.androidapp:`https://play.google.com/store/apps/details?id=com.neevlabs.connect2mydoctorpatient&hl=en`} target="_blank">
              <img src={Assets.icon_ios} alt="appStoreIcon" />
            </a>
            <a href={clientDetails.iosapp
                    ? clientDetails.iosapp:`https://apps.apple.com/au/app/connect2mydoctor-for-patients/id1490627746`} target="_blank">
              <img src={Assets.icon_android} alt="appStoreIcon" />
            </a>
          </div>
          <div className={Style.mobiconWrapper}>
            <span>Download Our App :</span>
            <a href={clientDetails.androidapp
                    ? clientDetails.androidapp:`https://play.google.com/store/apps/details?id=com.neevlabs.connect2mydoctorpatient&hl=en`} target="_blank">
              <img src={Assets.icon_ios} alt="appStoreIcon" />
            </a>
            <a href={clientDetails.iosapp
                    ? clientDetails.iosapp:`https://apps.apple.com/au/app/connect2mydoctor-for-patients/id1490627746`} target="_blank">
              <img src={Assets.icon_android} alt="appStoreIcon" />
            </a>
          </div>
        </Navbar.Collapse>
        {/* {width < 992 ? <MobileHeader showFilter={showFilter} searchDoctor={searchDoctor} setSearchDoctor={setSearchDoctor} setShowFilter={setShowFilter} /> : null} */}
      </div>
    );
  };
  const CustomHeader2 = () => {
    return (
      <Container className={Style.sec_header}>
        <Navbar.Brand>
          <Link to="/">
            {" "}
            <img
              src={clientDetails && clientDetails.logo!=""?clientDetails.logo:Assets.logo}
              alt="Connect2MyDoctor"
              className={Style.logoImg}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleSubmit}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav defaultActiveKey="#Specialities">
          {width >= 991?
          <>
            {/* <Link className="first-child" onClick={()=>{setShowModal(true)}}>Contact Us</Link> */}
            <NavDropdown title="Help?" id="basic-nav-dropdown" style={{ width:" 124px"}}>
              {
                clientDetails && clientDetails.phoneNumber? <NavDropdown.Item className={Style.help_phonenumber} >{clientDetails.phoneNumber}</NavDropdown.Item>:null
              }
           
              <NavDropdown.Item className={Style.help_normal} onClick={()=>{history.push('/faq')}} >FAQ</NavDropdown.Item>
              <NavDropdown.Item className={Style.help_normal} >Tutorials</NavDropdown.Item>
             
            </NavDropdown>
            </>
            :<>
            <Link>Contact Us</Link>
            <Link>Help?</Link></>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    );
  };
  return (
    <div className={`${Style.Header} header_wrap`}>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className={Style.navbar_bg}
        expanded={expanded}
      >
        {checkRoute ? CustomHeader2() : CustomHeader1()}
      </Navbar>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        style={{ zIndex: 20000 }}
        className={Style.DeleteConfirmmodal}
      >
        <Modal.Body>
          <div>
            <div>
              <h3 className={Style.HeaderText}> Contact details</h3>
            </div>
            {/* <p className={Style.DeleteText}>
              Contact number: {clientDetails}
            </p> */}
            {/* <p className={Style.DeleteText}>
              Email id: {clientDetails.email}
            </p> */}
            {clientDetails.address&&clientDetails.address.length>0&&
            <>
            {clientDetails.address.length>=2&&
            <p className={Style.address1} dangerouslySetInnerHTML={{
              __html: clientDetails?.address[1]}}>
            </p>
            }
            <p className={Style.address1} dangerouslySetInnerHTML={{
              __html: clientDetails?.address[0]}}>
            </p>
            </>}
            {clientDetails.phoneNumber&&clientDetails.phoneNumber!=""&&
            <p>
             Contact number: {clientDetails.phoneNumber}
            </p>
            }
            
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;
