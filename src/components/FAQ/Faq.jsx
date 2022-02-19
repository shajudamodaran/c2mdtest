import React from 'react';
import { Container } from 'react-bootstrap';
import PrivacyPolicy from '../PrivacyPolicy';
import Termsofuse from '../TermsandConditions/TermsofUse/Termsofuse';
import FaqContent from './FaqContent';
import Style from "./_faq.module.scss";

function Faq() {
    return <div className={Style.Faq_Main}>
        <div className={Style.Faq_Top}>
            <Container>
                <h1 className={Style.Top_Head}>FAQ</h1>
               
            </Container>
        </div>
       
        <div>

        <FaqContent />

        </div>
    </div>;
}

export default Faq;
