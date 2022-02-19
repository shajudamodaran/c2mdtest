import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

import Style from "./Header.module.scss";
import Assets from "../../Layout/Assets";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../../actions/LoginAction";
function MicrositeHeader({ clientDetails }) {
  const handleSubmit = () => {
    var body = document.body;

    body.classList.toggle("nav-open");
  };
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login);
  const history = useHistory();
  const logout = () => {
    // if (width < 992) {
    //   document.body.classList.remove("nav-open");
    //   setExpanded(!expanded)
    // }
    dispatch(logoutAction());
    history.push("/");
  };
  return (
    <div className={Style.Header}>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className={Style.navbar_bg}
      >
        <Container>
          {clientDetails && clientDetails.logo ? (
            <a
              href={clientDetails.homeurl}
              // target="_blank"
              className="navbar-brand"
            >
              {clientDetails.logo && (
                <img
                  src={clientDetails.logo}
                  alt="Connect2MyDoctor"
                  className={Style.logoImg}
                />
              )}
            </a>
          ) : (
            <Link to="/" className="navbar-brand">
              <img
                src={Assets.logo}
                alt="Connect2MyDoctor"
                className={Style.logoImg}
              />
            </Link>
          )}
          <Navbar.Toggle
            onClick={handleSubmit}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav defaultActiveKey="#Specialities">
              {/* <Link
                to={`/${clientDetails.clinicurl}/ourdoctor`}
                className="nav-link"
              >
                Our doctors
              </Link>
              <Nav.Link>
                <span>How it works</span>
              </Nav.Link>
              <Link
                to={`/${clientDetails.clinicurl}/treatment`}
                className="nav-link"
              >
                Treatments
              </Link>
              <Link
                to={`/${clientDetails.clinicurl}/contactus`}
                className="nav-link"
              >
                Contact Us
              </Link> */}
            </Nav>
            {userData.login ? (
              <Button
                variant="outline-secondary"
                className={Style.siginup_Btn}
                onClick={logout}
                style={{ marginRight: 30 }}
              >
                Logout
              </Button>
            ) : (
              <Button
                style={{ marginRight: 30 }}
                variant="outline-secondary"
                className={Style.siginup_Btn}
                onClick={() => {
                  history.push("/signup");
                }}
              >
                Sign in / Sign up
              </Button>
            )}
            <div className={Style.iconWrapper}>
              <span>Download Our App :</span>
              <a
                href={
                  clientDetails.androidapp
                    ? clientDetails.androidapp
                    : `https://play.google.com/store/apps/details?id=com.neevlabs.connect2mydoctorpatient&hl=en`
                }
                target="_blank"
              >
                <img src={Assets.icon_ios} alt="appStoreIcon" />
              </a>
              <a
                href={
                  clientDetails.iosapp
                    ? clientDetails.iosapp
                    : `https://apps.apple.com/au/app/connect2mydoctor-for-patients/id1490627746`
                }
                target="_blank"
              >
                <img src={Assets.icon_android} alt="appStoreIcon" />
              </a>
            </div>
            <div className={Style.mobiconWrapper}>
              <span>Download Our App :</span>
              <a
                href={
                  clientDetails.androidapp
                    ? clientDetails.androidapp
                    : `https://play.google.com/store/apps/details?id=com.neevlabs.connect2mydoctorpatient&hl=en`
                }
                target="_blank"
              >
                <img src={Assets.icon_ios} alt="appStoreIcon" />
              </a>
              <a
                href={
                  clientDetails.iosapp
                    ? clientDetails.iosapp
                    : `https://apps.apple.com/au/app/connect2mydoctor-for-patients/id1490627746`
                }
              >
                <img src={Assets.icon_android} alt="appStoreIcon" />
              </a>
            </div>
            {/* <a href={clientDetails.iosapp}><img src={Assets.appStoreIcon} alt="appStoreIcon" /></a> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MicrositeHeader;
