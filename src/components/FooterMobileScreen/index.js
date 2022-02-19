import React from "react";
import Style from "./FooterMobileScreen.module.scss";
import Assets from "../Layout/Assets";
import { Container, Row } from "react-bootstrap";

function MobileFooter() {

  return (
        <div className={Style.mobile_footer_align}>
             <div className={Style.mobile_footer_top_banner}>
                <Container>
                    <Row className={Style.mobile_footer_first_div}>
                        <div className="col-6 mob_footer_left">
                            <h2 className={Style.mobile_footer_main_heading}>
                                Download the app today!
                            </h2>
                            <a href="https://play.google.com/store/apps/details?id=com.neevlabs.connect2mydoctorpatient&amp;hl=en" target="_blank">
                                <img src={Assets.google_play_icon} className={Style.mobile_footer_space_between}/>
                            </a>
                            <a href="https://apps.apple.com/au/app/connect2mydoctor-for-patients/id1490627746" target="_blank">
                                <img src={Assets.app_store_icon} className={Style.mobile_footer_space_between}/>
                            </a>
                        
                        </div>
                        <div className="col-6 img_footer">
                            <img src={Assets.footer_img} className={Style.footer_img_align}/>
                        </div>
                    </Row>
                </Container> 
            </div>   
            <div className={Style.mobile_footer_bottom}>
                <Container>
                    <Row className={Style.mobile_footer_second_div}>
                        <p className={Style.mobile_footer_sub_heading}>Connect2MyDoctor cannot be used in case of emergency</p>
                        <p className={Style.mobile_footer_content}>Connect2MyDoctor does not provide medical advice, diagnosis, or treatment</p>

                    </Row>
                </Container> 
            </div>
        </div>
  );
}

export default MobileFooter;