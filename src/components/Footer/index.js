import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MainLogoWhiteForFooter } from "../../assets/Logos/Icons";

import Assets from "../Layout/Assets";
import Style from "./Footer.module.scss";
function Footer() {
  return (
    <div className={Style.Footer}>
      <Container>
        <div className={Style.footer_row}>
          <div className={Style.footer_col1}>
            {/* <p className={Style.Top_text}>Download App</p> */}
            {/* <div className={Style.iconWrapper}>
              <a href="#">
                <img src={Assets.playStore} alt="appStoreIcon" />
              </a>
              <a href="#">
                <img src={Assets.appSrore} alt="appStoreIcon" />
              </a>
            </div> */}

            <div className="footer-lefttxt">
             
              <p className={Style.leftText3}>
               Powered by
              </p>
              
                <MainLogoWhiteForFooter/>
             
            </div>
          </div>

          <div className={Style.footer_col1}>
            {/* <p className={Style.Top_text}>Download App</p> */}
            {/* <div className={Style.iconWrapper}>
              <a href="#">
                <img src={Assets.playStore} alt="appStoreIcon" />
              </a>
              <a href="#">
                <img src={Assets.appSrore} alt="appStoreIcon" />
              </a>
            </div> */}

            <div className="footer-lefttxt">
              <p className={Style.leftText2}>
                Connect2MyDoctor cannot be used in case of emergency
              </p>
              <p className={Style.leftText3}>
                Connect2MyDoctor does not provide medical advice, diagnosis, or
                treatment
              </p>
            </div>
          </div>

          {/* <div className={Style.footer_col2}>
            <p className={Style.Top_text}>Company</p>
            <div className={Style.middile_Section}>
              <ul class="footer-nav">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Partners</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Press</a>
                </li>
              </ul>
              <ul class="footer-nav pl-5">
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
              </ul>
            </div>

          </div>

          <div className={Style.footer_col3}>
            <p className={Style.Top_text}>For Patients</p>
            <ul class="footer-nav">
              <li> <a href="">Testimonials</a></li>
              <li><a href="">When to us</a></li>
            </ul>
          </div>
          <div className="footer-dctr-txt">
            <p className={Style.Top_text}>Are you a leading doctor?</p>
            <a href="" className="link-txt">Join Connect2MyDoctor Today</a>
            <div className="footer-social">
              <p>Follow Us On</p>
              <a href="">
                <img
                  src={Assets.facebookIcon}
                  alt="facebookIcon"
                  className={Style.facebookIcon}
                />
              </a>
              <a href="">
                <img src={Assets.Twittericon} alt="Twittericon" />
              </a>
            </div>
          </div> */}

        </div>
        {/* <div className={Style.footerBottom}>
          <p>© 2021 Connect2mydoctor. All rights reserved.</p>
          <ul>
            <li> <a href="">Privacy Policy</a></li>
            <li> <a href="">Terms of Use</a></li>
          </ul>


          <div className={Style.compnyName}>
            <span>Designed by <a href="https://webandcrafts.com/" target="_blank">webandcrafts</a></span>
          </div>
        </div> */}
      </Container>
    </div>
  );
}

export default Footer;
