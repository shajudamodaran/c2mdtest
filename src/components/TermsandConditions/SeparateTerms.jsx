import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Termsofuse from './TermsofUse/Termsofuse';
import Style from "./TermsandConditions.module.scss";

function SeparateTerms() {

    const [TermsInsideIndia, setTerms] = useState(true);

    return (
        <div className={Style.TermsandConditions_Main}>
            <div className={Style.TermsandConditions_Top}>
                <Container>
                    <h1 className={Style.Top_Head}>Terms of Use</h1>
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
                            className={`${Style.Tab} ${Style.activeClass}`}
                        >
                            Terms of Use
                        </h6>
        
                    </div>
                </Container>
            </div> */}
            <div>
               
                    <Termsofuse TermsInsideIndia={TermsInsideIndia} />
               
            </div>
        </div>
    );
}

export default SeparateTerms;
