import React from 'react';
import PrivacyPolicy from '../PrivacyPolicy';
import Container from "react-bootstrap/Container";
import Style from "./TermsandConditions.module.scss";

function SeparatePrivacy() {
    return (
        <div className={Style.TermsandConditions_Main}>
            <div className={Style.TermsandConditions_Top}>
                <Container>
                    <h1 className={Style.Top_Head}> Privacy Policy</h1>
                    {/* <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy <br /> eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam. 
                    </p> */}
                </Container>
            </div>
            {/* <div className={Style.TermsandConditions_Tabs_main}>
                <Container>
                    <div className={Style.TermsandConditions_Tabs}>
                        <h6
                            className={Style.Tab}
                            className={`${Style.Tab} ${ Style.activeClass }`}
                        >
                            Privacy Policy
                        </h6>
                    </div>
                </Container>
            </div> */}
            <div>
               
                    <PrivacyPolicy />
              
            </div>
        </div>);
}

export default SeparatePrivacy;
