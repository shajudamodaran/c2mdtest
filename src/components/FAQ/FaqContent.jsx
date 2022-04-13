import React from 'react';
import {
    personalInfo,
    personal2,
    useInfo,
    Disclosure,
    storageInfo,
} from "../Constants/PrivacyPolicy/InsideIndia";
import Assets from "../Layout/Assets";
import Style from "./_faq.module.scss";

function FaqContent() {
    return (

        <div className={Style.FaqContent_main}>

            <h3 className={Style.headings}> 1. What is Connect2MyDoctor?</h3>
            <p>Connect2MyDoctor, an online platform serving patients and doctors by eliminating the boundaries
                of quality healthcare via online video consultations, managing patient's self and family
                medical records in a HIPAA secure server, syncing data from multiple sources - all stitched
                together with intuitive user experience across computers, tablet and mobile devices.</p>


            <h3 className={Style.headings}>
                {" "}
                2. How can I access Connect2MyDoctor?
            </h3>
            <p>Connect2MyDoctor will be available across computers, smart phones and tablets. Our iPhone, iPad and Android apps are coming soon.</p>

            <h3 className={Style.headings}> 3. Can I contact a doctor Connect2MyDoctor during emergencies?</h3>
            <p>NO. Patients should NOT use Connect2MyDoctor incase of any medical emergency. If you are having
                a medical emergency, please contact your local emergency service.</p>

            <h3 className={Style.headings}>
                {" "}
                4. When can I use Connect2MyDoctor?
            </h3>
            <p>
                Connect2MyDoctor should be used when you need non critical care, for a follow up or second opinion,
                reviewing medical reports, initial treatments etc. While Connect2MyDoctor is not intended to replace
                your regular doctor or specialist for common or chronic conditions, an online consultation can sometimes
                substitute a doctor's visit.
            </p>

            <h3 className={Style.headings}>5. How can I use Connect2MyDoctor?</h3>
            <p>Connect2MyDoctor is your go-to place to search, book and consult online for non-critical ailments.
                The system also allows you to store and manage self and family health records centrally on the cloud,
                thereby allowing you to access you medical records, prescriptions, lab reports from your online consultations
                and much more...Now, isn't that convenient....no more torn papers and fear of loosing documents.</p>


            <h3 className={Style.headings}>6. How much does a consultation on Connect2MyDoctor cost? </h3>
            <p>Consultation fees are decided by the respective doctors. We have no control on the pricing.</p>


            <h3 className={Style.headings}> 7. Is my health data secure?</h3>
            <p>Connect2MyDoctor is compliant with HIPAA (Health Insurance Portability and Accountability Act) guidelines. Health records are kept
                totally secure and only shared with your selected doctor. There is nothing more important to us than keeping your data secure.</p>


            <h3 className={Style.headings}>
                {" "}
                8. Do I talk to a real doctors?{" "}
            </h3>
            <p>Yes. Connect2MyDoctors are certified doctors licensed to practice medicine. We have a stringent doctor on boarding where all the doctors' profiles and medical licenses are verified by a human. Only on successful verification process their profiles are made LIVE.</p>


            <h3 className={Style.headings}> 9. Is Connect2MyDoctor available 24x7?</h3>
            <p>Connect2MyDoctor is accessible to doctors and patients no matter where they are, domestic or international. The platform enables access 24 hours a day, seven days a week 365 days a year, however individual doctors are subject to their stated availability.</p>


            <h3 className={Style.headings}>10. Are there any specific system/Internet requirements for Connect2MyDoctor Video Conferencing?</h3>
            <p>System Requirements - Connect2MyDoctor supports any computer that has an Internet connection and a webcam. The service works on the following browsers: Chrome, Firefox, Internet Explorer and Opera. Our smartphone and tablet apps will work on Android and iOS platforms. The smartphone and tablet apps are under development.</p>

            <p> Internet Requirements - The service will work excellent on a minimum Internet speed of 250 Kbps. The quality of the video is directly dependent on the speed of the Internet.</p>

            <p> Technical Requirements - As a minimum requirement we need the TCP port 443 open in your firewall. For a better experience you can also get the UDP port 3478 opened and for the best experience you will need to get the UDP ports 1025 - 65535 opened. Please note that enabling UDP ports is not a mandatory requirement.</p>
            
            
            <h3 className={Style.headings}>11. What happens if my Internet speed fluctuates in between the consultation?</h3>
            <p>Connect2MyDoctor is all about making your healthcare experience better....Our systems will automatically detect the drop in your Internet bandwidth and turn off the video off. The video session will be restored when the network is back to the required speed. In such a scenario, the video will be turned off and the consultation will move to an audio only mode. The video will resume once the bandwidth has been restored.</p>
            
          
            <h3 className={Style.headings}>12. Does Connect2MyDoctor accept medical insurance?</h3>
            <p>Unfortunately not at this point. We are working with some of the leading insurance providers to make our service available through them. It will be great if you could let us know the insurance provider you are with via the contact us page.</p>
        
            <h3 className={Style.headings}>13. How do I pay for a consultation on Connect2MyDoctor?</h3>
            <p>We have partnered with the industry's best payment providers. All the payments in 130+ different currencies payable via credit cards (Visa, MasterCard, and American Express), debit cards and direct banking.</p>

            <h3 className={Style.headings}>14. What happens if my computer shuts down or Internet connection stops working when the Payment is getting processed?</h3>
            <p>There could be 2 scenarios -(1) The payment got authorized by the bank but the communication of the same was not received by the Payment Gateway. In this case your account will get debited by the bank. The payment status will be Initiated/Failed/Dropped. We receive a confirmation from the bank later and then we initiate a refund for the payment to the customer's account. (2)The payment didn't get authorized by the bank. In this case your account will not be debited and we don't get any further updates from the banks. The payment status will be Initiated/Failed/Dropped.</p>

            <h3 className={Style.headings}>15. How can I get a refund?</h3>
            <p>Please contact our Customer Support team by visiting our Contact page and they will assist you on the same. Also, you can read the refund policy here.</p>

            <h3 className={Style.headings}>16. I am not very technology savvy ¦what do I do?</h3>
            <p>It is not meant to be for technology savvy people only. The underlying experience that we have focussed on is the ease of use. So if you can operate a simple website/email then you should be able to use the site without any hassle.</p>

            <h3 className={Style.headings}>17. I have a question and I can't see that here. What can I do?</h3>
            <p>Sorry about it. Please send an email to support@c2mydr.com and we will respond back to you on the same.</p>
        
        
        
        
        </div>

    );
}

export default FaqContent;
