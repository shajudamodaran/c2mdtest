import React, { useState } from "react";
import Style from "./PrivacyPolicy.module.scss";
import {
  personalInfo,
  personalInfo2,
  userInfo,
  disclosure,
  StorageInfo,
  crossBorder,
} from "../Constants/PrivacyPolicy/Outsideindia";
import Assets from "../Layout/Assets";
function OutSideIndia() {
  const [PrivacyInsideIndia, setPrivacypolicy] = useState(true);
  return (
    <>
      <h3 className={Style.headings}> 1. Privacy Statement </h3>
      <p>
        This Privacy Policy sets out how Neev tech Labs Pty Ltd (ACN 623145611)
        ('we', 'us', 'our', 'Neev Labs' ‘Connect2MyDoctor’) collects, holds,
        uses and protects your personal information. This Privacy Policy applies
        to your use of the connect2mydoctor.com website ('the Website') and
        Connect2MyDoctor apps for android and apple devices (‘the Apps’). You
        agree that using the Website or the Apps or clicking 'I Accept' when
        signing up for a user account on the Website or the App implies your
        consent to the collection and use of your personal information in
        accordance with this Privacy Policy. This Privacy Policy complies with
        the Privacy Act 1988 (Cth) ('the Privacy Act') and has been developed in
        line with the Australian Privacy Principles in the Privacy Act.
      </p>
      <h3 className={Style.headings}>
        2. Kinds of Personal Information Collected
      </h3>
      <p>
        In the course of conducting our business, we collect personal
        information from you including, but not limited to:
      </p>
      <div className={Style.subContent_main}>
        {personalInfo?.map((item, index) => {
          return (
            <div className={Style.subContent} key={index}>
              <img src={Assets.Ellipse} alt="" />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <p>
        We may collect and store the clinical notes and / or clinical
        assessments of health care service providers (‘Providers’) who are
        registered with us, which relate to your consultation with the Provider.
        The personal information we collect is reasonably necessary for the
        purposes of conducting and improving our business and our products and
        services. Given the nature of the products and services we offer, some
        of the information we collect may be sensitive information including
        health information. This information may be collected in a number of
        ways, including:
      </p>
      <p>Personal information collected by us may include:</p>
      <div className={Style.subContent_main}>
        {personalInfo2?.map((item, index) => {
          return (
            <div className={Style.subContent} key={index}>
              <img src={Assets.Ellipse} alt="" />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <p>
        We endeavour to only collect personal information about you from you,
        where it is reasonable and practical to do so.
      </p>
      <h3 className={Style.headings}>3. Use of Personal Information</h3>
      <p>
        Neev Tech Labs (including its staff, contractors and volunteers) will
        use the personal information you provide in the provision of services to
        you.
      </p>
      <p>
        We may use personal information you provide for evaluating, improving,
        personalising and developing our business, the Website, and the App our
        other products and services, and to protect our users. We may also use
        your personal information in the course of:
      </p>
      <div className={Style.subContent_main}>
        {userInfo?.map((item, index) => {
          return (
            <div className={Style.subContent} key={index}>
              <img src={Assets.Ellipse} alt="" />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <p>
        We automatically gather information to monitor the use of the Website
        and the App and our other products and services. Most of the data we
        collect is aggregated, and such aggregated information is effectively
        anonymous to us.
      </p>
      <p>
        Sometimes you will be asked to confirm that you agree to a particular
        activity, or the collection of your personal information for a specific
        purpose. Though we usually collect aggregate data, we will make it clear
        to you if any information is being collected in a way that could
        personally identify you.
      </p>
      <p>
        We may use Google Analytics, and other third party analytics software to
        track your usage of the Website and the App. Google Analytics is a web
        analysis service provided by Google. Google utilises the data collected
        to track and examine the use of our Site, to prepare reports on its
        activities and share them with other Google services. Google’s use of
        the data collected is subject to Google’s Privacy Policy which is
        available at google.com.au/policies/privacy.
      </p>
      <h3 className={Style.headings}>4. Disclosure of Personal Information</h3>
      <p>
        In the course of conducting our business, we may also disclose your
        personal information to other entities including:
      </p>
      <div className={Style.subContent_main}>
        {disclosure?.map((item, index) => {
          return (
            <div className={Style.subContent} key={index}>
              <img src={Assets.Ellipse} alt="" />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <p>
        We will not use or disclose information about individuals for other
        purposes without consent, except in exceptional circumstances, such as
        if disclosure is required by law or is necessary to protect the rights
        or property of Neev Labs or any other individual, or to lessen a serious
        threat to a person’s health or safety. This may include if we have
        concerns that there is a serious threat to your health or safety.
      </p>
      <p>
        Certain services we provide and features on the Website and the App are
        open to any other account holders to view, including, but not limited
        to, our blog (if any), and certain aspects of your personal user
        profile. Any information you create or post in these locations may be
        available and accessible to other users of the Website.
      </p>
      <p>
        The Website and the App may also enable you to upload, post, transmit,
        display, perform or distribute content, information or other data, which
        may include your personal information. Any information that you choose
        to disclose by means of such features will become public information.
      </p>
      <p>
        We strongly urge you to exercise caution when deciding to disclose your
        personal information by such means. You agree to assume all
        responsibility for all personal information that you have made public.
      </p>
      <h3 className={Style.headings}>
        5. Storage and Security of Personal Information
      </h3>{" "}
      <p>
        We will use all reasonable endeavours to maintain the security of
        personal information we collect against misuse, interference, loss,
        unauthorised access, modification or disclosure.
      </p>
      <p>
        Data transmissions over the Internet cannot be guaranteed to be fully
        and absolutely secure. The Website and the App and our services have
        security measures in place designed to protect against the loss, misuse
        and alteration of the information under our control. The precautionary
        steps we take to protect personal information include:
      </p>
      <div className={Style.subContent_main}>
        {StorageInfo?.map((item, index) => {
          return (
            <div className={Style.subContent} key={index}>
              <img src={Assets.Ellipse} alt="" />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <p>
        We cannot ensure or warrant that your personal information will always
        be secure during transmission or protected from unauthorised access
        during storage therefore you provide your personal information to us at
        your own risk. Please contact us immediately if you become aware or have
        reason to believe there has been unauthorised use of your personal
        information in connection with the Website and the App.
      </p>
      <h3 className={Style.headings}>6. Cookies </h3>
      <p>Cookies are files with a small amount of data, which may include an
      anonymous unique identifier. Cookies are sent to your browser from a web
      site and stored on your computer's storage drive. Like many sites, we use
      "cookies" to collect information. You can instruct your browser to refuse
      all cookies, or to indicate when a cookie is being sent. However, if you
      do not accept cookies, you may not be able to use some of the features of
      the Website or our other products and services.</p>
      <h3 className={Style.headings}>7. Web Beacons</h3>
      <p>Web beacons (also known as clear gifs, pixel tags or web bugs) are tiny
      graphics with a unique identifier and are used to track the online
      movements of users or to access cookies. Unlike cookies which are stored
      on the user’s computer storage drive, web beacons are embedded invisibly
      on web pages (or in e-mail). Web beacons may be used to deliver or
      communicate with cookies, to count users who have visited certain pages
      and to understand usage patterns. Like many sites, we use web beacons to
      collect information which is done in accordance with this Privacy Policy.{" "}</p>
      <h3 className={Style.headings}> 8. Cross Border Disclosures</h3>
      <p>
        We may disclose personal information to outsourced information
        technology service providers, including cloud computing providers and
        data storage providers, based overseas and located in the United States
        of America and Europe.
      </p>
      <p>
        With the exception of the above, we will only disclose your personal
        information to an overseas recipient if:
      </p>
      <div className={Style.subContent_main}>
        {crossBorder?.map((item, index) => {
          return (
            <div className={Style.subContent} key={index}>
              <img src={Assets.Ellipse} alt="" />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <h3 className={Style.headings}> 9. Links</h3>
      <p>If you use a Link to access a third party website, you do so entirely at
      your own risk. You should always read the applicable privacy policies on
      the other website.</p>
      <h3 className={Style.headings}>
        10. Accessing and updating your personal information{" "}
      </h3>
      <p>If you have established an account with us, you may access and amend your
      personal information through the Website after you log in. It is your
      responsibility to ensure that all of your personal information is accurate
      and kept up to date. If you wish to amend personal information that we
      hold that you are not able to amend through the Website and the App,
      please contact us by writing to our Privacy Officer at
      <a href="mailto:privacy@connect2my.doctor">privacy@connect2my.doctor</a>.
      We will reasonably endeavour to respond to your request for access within
      7 business days. You are responsible for advising us of any changes to
      your personal information. If you wish to delete your profile from the
      Website, and the App please contact us by writing to our Privacy Officer
      at<a href="mailto:privacy@connect2my.doctor">privacy@connect2my.doctor</a>{" "}
      . Please be aware there may be residual information left behind on our
      servers from your profile / personal information which is beyond our
      control. If applicable, any legal requirement on us to maintain certain
      records of your personal information shall prevail over any of your
      requests.</p>
      <h3 className={Style.headings}>
        11. Mandatory Data Breach Notifications
      </h3>{" "}
      <p>From February 2018, pursuant to the Privacy Act 1988, we will be required
      to notify you and the Australian Information Commissioner if we suspect
      that a data breach (relating to your personal and / or health information)
      has occurred and there is real risk of serious harm to you as a result of
      the breach.</p>
      <h3 className={Style.headings}> 12. Applicable Laws</h3>
      <p>The Website and the App is controlled from our offices in Victoria,
      Australia. This Privacy Policy will be governed and construed in
      accordance with the laws of Victoria. You irrevocably and unconditionally
      submit to the exclusive jurisdiction of the courts of Victoria. If any
      provision of this Privacy Policy is found to be invalid or unenforceable
      by a court of law, such invalidity or unenforceability will not affect the
      remainder of this Privacy Policy which will continue in full force and
      effect.</p>
      <h3 className={Style.headings}>13. Changes to the Privacy Policy</h3>
     <p> The Privacy Policy is effective from 15.05.2020 We reserve the right to
      change this Privacy Policy from time to time without further notice to
      you. Any variations made will be updated on the Website and the App. Your
      use of the Website and the App following any such change to the Privacy
      Policy will confirm your acceptance of the changes.</p>
      <h3 className={Style.headings}> 14. Contact Us</h3>
      <p>For any further information about this Policy please contact us at
      <a href="mailto:support@connect2my.doctor">support@connect2my.doctor</a>
      <h3 className={Style.headings}>15. Making a Complaint</h3>If you have any
      concerns about how we manage your personal information, you may write to
      our Privacy Officer at{" "}
      <a href="mailto:privacy@connect2my.doctor">privacy@connect2my.doctor</a>.
      All complaints made will be dealt with in confidence. We will reasonably
      endeavour to provide a response within 30 days of receipt of your
      complaint.</p>
    </>
  );
}

export default OutSideIndia;
