import React, { useState } from "react";
import Style from "./TermsofUse.module.scss";
import Button from "react-bootstrap/Button";
import Assets from "../../Layout/Assets";
import {
  Responsibilities,
  refund,
  Links,
} from "../../Constants/TermsAndConditions/Insideindia";
import { HmacSHA256 } from "crypto-js";

function InsideIndia() {
  const [InsideIndia, setTerms] = useState(true);

  return (
    <>
      <div>
        <h3 className={Style.headings}>1. Terms of Use</h3>
        <p className={Style.content}>
          PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING
          CONNECT2MYDOCTOR. These terms were most recently updated on 18 October
          2019.
          These Terms of Use constitute an agreement between you and Neev Labs
          IT Solutions Pvt Ltd (“We” or “Us” or “Connect2MyDoctor”, as the
          context may be). There are rules you agree to follow when using
          www.connect2mydoctor.com and other related websites and mobile
          applications with links to these Terms of Use (collectively, the
          “Site”) including when you ask questions and when you view or input
          content on or into the Site.
          PLEASE READ THESE USER TERMS AND CONDITIONS CAREFULLY BEFORE USING OUR
          SERVICE. YOUR REGISTERING BELOW SHALL BE CONSIDERED AS ACCEPTANCE OF
          THESE USER TERMS AND CONDITIONS FOR USAGE
        </p>
      </div>

      <div>
        <h3 className={Style.headings}>2. Who we are</h3>
        <p>
          Connect2MyDoctor is an Internet based technology platform that
          attempts to connect providers of online health services (hereafter
          referred to as "Healthcare Service Provider") and users (hereafter
          referred to as "you").
          Connect2MyDoctor.com, the web site and its associated websites and
          mobile applications and IT applications thereof, are owned by Neev
          Tech Labs Pty Ltd. (ACN 623145611), a company registered in Melbourne,
          Australia and having the registered office at 67 / 135 Cardigan
          Street, Carlton, Melbourne 3053, Victoria, Australia and are sold
          and/or licensed by Neev Labs subsidiaries, affiliates and/or
          resellers, hereafter referred to as “Connect2MyDoctor”. Neev Labs IT
          Solutions IT Pvt Ltd, a wholly owned subsidiary of Neev Tech Labs
          manages Connect2MyDoctor in India. Neev Labs IT Solutions India
          Private Limited, (CIN: U72200KA2015PTC080160) is a company duly
          registered under applicable Indian law and having its registered
          office at #222, Indiranagar Double Road, Domlur II Stage, Indiranagar,
          Bangalore, Karnataka-560071.
          By accessing and signing up for the Connect2MyDoctor service on
          creation of a user account on the website, you are agreeing to abide
          by the terms of use and conditions mentioned hereunder.
        </p>
      </div>

      <div>
        <h3 className={Style.headings}>3. Nature of Service</h3>
        <p className={Style.content}>
          Connect2MyDoctor is an online platform providing access to various
          forms of medical services offered by third party service providers
          which are listed through our website and apps. The request to access
          the information on the Third-Party Service providers may be made
          through the use of our web portal or other applications that may be
          downloaded and installed on Computers, mobile devices or tablets.
          The services which we intend to provide include a platform to find a
          doctor who has listed his/her services and facility to request or
          schedule an appointment for Online consultation via, Video, audio or
          text mode of communication and managing self or family
          information/health records. Using our website and apps you can take
          appointments for self and dependent/family with any of the listed
          doctor however you agree and understand that the Doctor may choose to
          cancel the appointment or re-schedule it.
        </p>
        <p>
          You explicitly acknowledge that the use of Platform is to facilitate
          consultation between Patient and Doctor. You agree that the online
          consultation and usage of the system is not for emergency and
          non-life-threatening conditions. It is explicitly declared that the
          platform does not take away the need for physical consultation by
          visiting a Doctor’s office/clinic/hospital. In cases of emergency,
          please contact public emergency services immediately by telephone. We
          are not responsible for any loss, damage, cost, expense, action,
          claim, demand, proceeding, injury or liability suffered by any person
          as a result of a failure by that person or any other person to contact
          public emergency services.
          You hereby agree that you will disclose all necessary details to the
          doctor, which will help him/her to provide medical advice/guidance.
          The doctor may choose to ask the patient to visit his/her
          clinic/hospital for further check-up or investigation. The use of
          Connect2MyDoctor our website and apps are not a substitute for
          professional medical diagnosis or treatment, and you may use the
          information provided at your own risk.
          Connect2MyDoctor shall not be responsible for any undesirable
          consequences of comments or posts made by any Doctor/Healthcare
          Service Provider.
          By using the services of Connect2MyDoctor, you unconditionally agree
          to receive automated SMS text notifications relevant to services from
          Connect2MyDoctor, to the mobile number you provided during
          registration, irrespective of whether you have subscribed to any DND
          services.
          Connect2MyDoctor is merely a Technology Solution provider and this
          contract is for the use of technology and tools provided by
          Connect2MyDoctor, which may be revoked by Connect2MyDoctor without
          prior notice via email or SMS or any such communication.
        </p>
      </div>

      <div>
        <h3 className={Style.headings}>4.Service Providers</h3>
        <p className={Style.content}>
          The Website and App is a platform through which people may obtain
          medical advice/guidance from qualified Doctors (‘Service Providers’).
          We are and operate the Website and App wholly as an introductory
          service and we take no part in the provision of care process or any
          other medical services. The Service Providers who offer their services
          on the Website and App are independent contractors or
          hospital/clinical establishment and the advice they provide is
          independent of Connect2MyDoctor.
          All persons who obtain services from the Service Providers through the
          Website and App are solely responsible for determining the suitability
          of the relevant Service Providers for their particular needs. We DO
          NOT guarantee or warrant that the Website or App, or any services
          provided by any Service Provider through the Website or App, is
          suitable or appropriate for any person/care seeker.
        </p>
        <p>
          If you are a Service Provider, you acknowledge and agree that
          additional and/or modified terms and conditions will apply to your
          access and use of the Website. Such terms and conditions are available
          from the Website or App and are also emailed to your registered email
          id after creating an account and logging in.
        </p>
      </div>
      <div>
        <h3 className={Style.headings}> 5. User Account</h3>
        <p className={Style.content}>
          You represent that if you are an individual, you are of legal age to
          enter into a binding contract, or that if you are registering on
          behalf of a legal entity, that you are authorized to enter into, and
          bind the entity to, these User Terms and Conditions to register for
          the Service and the Application.
          By using the services provided on our web portal, you enter into a
          contract with Connect2MyDoctor. In order to be able to use the
          Service, you first need to sign up to create an account in the website
          or app. When signing up, you are obligated to provide your personal
          information, email id, mobile telephone number and other details as
          required by the website. Upon successful completion of your signing up
          the service will be accessible using your personal user id and
          password that you have chosen. Your User ID and password are unique to
          you, and you agree not to disclose or share your User ID and password
          to or with any third party. You are responsible for keeping your
          password confidential and for notifying us if your password has been
          hacked or stolen.
          When creating your account and in order to use all of the website and
          apps features, you must create a user account and complete all
          mandatory fields in the ‘My Profile’ section of the Website or App.
          </p>
          <p>
          The accuracy, integrity and completeness of the personal information
          you enter or allow anyone on behalf of yourself or your
          Doctor/Healthcare Service Provider to enter into our system is your
          responsibility, and Connect2MyDoctor assumes no liability for it.
          Connect2MyDoctor is also not liable for any use or misuse of
          information transmitted or received by a third party you have
          authorized to access or use your account and data on Connect2MyDoctor.
          We reserve the right to disclose your identity or other information
          you provide when establishing a user account if required by law to do
          so. We may alter any part of your user account if we receive a
          legitimate complaint, or otherwise form the view (in our sole
          discretion) that the content of your user account is inappropriate or
          offensive.
          Connect2MyDoctor shall not be responsible for any undesirable
          consequences of information, comments or posts made by you or any
          Doctor/Healthcare Service Provider or individual operating on behalf
          of the same. We reserve the right to terminate your access to the
          Website and App at any time in our sole discretion, without notice.
          While Connect2MyDoctor will take all reasonable efforts for protecting
          the patient information it might have to disclose the contact details
          of the patients if required by any bank, payment gateway provider or
          any statutory authorities. The Healthcare Service Providers shall
          educate the patients about circumstances under which the information
          might be disclosed. Data in your personal health records will be
          accessible only to your authorized Doctors/Healthcare Service
          Providers that you are a registered patient of or consulted with, for
          the purpose of providing you with healthcare services that you choose.
          Non-personalised system analysis of non-identifiable patient data may
          be done as part of application service development to enable better
          healthcare outcomes. However, the identity of individual patient/users
          will remain anonymous.
        </p>
      </div>
      <div>
        <h3 className={Style.headings}>6. Your Responsibilities</h3>
        <p className={Style.content}>
          By using our service, you further agree that you may only use the
          Website and App for lawful purposes, in a responsible and co-operative
          manner, and in accordance with these Terms of Use. You agree that we
          reserve the right to immediately terminate the Service and block your
          account on non-compliance of any of the below terms.
        </p>
        <div className={Style.subContent_main}>
          {Responsibilities?.map((item, index) => {
            return (
              <div className={Style.subContent} key={index}>
                <img src={Assets.Ellipse} alt="" />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className={Style.headings}> 7. Fees and Payment You</h3>
        <p className={Style.content}>
          You agree to pay the mentioned fess for all consultations booked with
          a Provider through the Website and App. These fees listed may include,
          the specified consultation fees, booking fees or facilitation fees.
        </p>
        <p className={Style.content}>
          You acknowledge and agree that our liability to you or any other
          person making this payment for the consultation is not increased by
          virtue of the fact that we collect a fee as part of any consultation;
        </p>
        <p className={Style.content}>
          All fees are required to be paid in the currency listed or unless
          specified. In situations where you need to make payments in currencies
          that are not supported by our platform you are solely responsible and
          liable for paying any foreign exchange or currency by your financial
          institution; and
        </p>
        <p className={Style.content}>
          All fees listed or new fees may be added or removed without prior
          notice.
        </p>
        <p className={Style.content}>
          We do not store any credit or debit card information. Payments are
          processed via a third party payment provider that is fully compliant
          with Level 1 Payment Card Industry (PCI) data security standards. Any
          payment transactions are encrypted using SSL technology.
        </p>
        <p className={Style.content}>
          All fees paid is inclusive of all taxes unless explicitly stated by
          us.
        </p>
      </div>

      <h3 className={Style.headings}>8. Refunds and Cancellation Charges </h3>
      <p className={Style.content}>
        The following terms and conditions on Cancellation of the appointment
        booked by the user
      </p>
      <div className={Style.subContent_main}>
        {refund?.map((item, index) => {
          return (
            <div className={Style.subContent} key={index}>
              <img src={Assets.Ellipse} alt="" />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <p>
        The user is not entitled to a refund of fees if he/she is not happy or
        satisfied with doctor/provider services. Service charges may be deducted
        for any refund or cancellation.
      </p>
      <p>
        On Cancellation of the appointment by the doctor/provider, the Service
        Providers has the option to suggest an alternative time and date for the
        consultation. If the suggested time and date is convenient by the
        patient they can proceed with the consultation, otherwise the full
        payment is refunded back to the person who has booked the appointment.
      </p>
      <p>Late or missing refunds (if applicable)</p>
      <p>
        It may take between 10 to 15 days to process a refund request. Even
        where Connect2MyDoctor processes the refund, the user’s credit card
        company and Banks make take longer time to finish the processing of the
        refund and remit funds to users account.
      </p>
      <p>
        If the user has not received a refund after 15 days, the user will need
        to check with their credit card company/bank.
      </p>
      <p>
        If the user has done this and still have not received your refund yet,
        please contact at refunds@connect2my.doctor with all the details of the
        appointment that has been cancelled by the user and copies of your
        communication with the bank or credit card Company in this regard.
      </p>
      <div>
        <h3 className={Style.headings}>9. Warranties </h3>
        <p className={Style.content}>
          We do not warrant that access to or use of the Site will be
          uninterrupted or error-free or that defects in the Site will be
          corrected. This Site, including any content or information contained
          within it or any Service, is provided “as is,” with all faults, with
          no representations or warranties of any kind, either expressed or
          implied, including, but not limited to, the implied warranties of
          merchantability, fitness for a particular purpose, quality of
          information, quiet enjoyment, and title/non-infringement. We do not
          warrant the accuracy, completeness or timeliness of the information
          obtained through the Site.
        </p>
        <p>
          We make every effort to ensure consultations maintain a viable
          internet connection but we are not responsible for the internet or
          data bandwidth and signal of your mobile device, nor transmission
          errors.
        </p>
        <p>
          You assume total responsibility and risk for your use of this Site,
          the Service, and linked websites. We do not warrant that files
          available for download will be free of viruses, worms, trojan horses
          or other destructive programming. You are responsible for implementing
          procedures sufficient to satisfy your needs for data back up and
          security.
        </p>
        <p>
          You agree that certain parts of the Website may be made available on
          an “alpha” or “beta” basis for testing purposes prior to full release
          and may be withdrawn or removed at any time by us without notice to
          you. We may not identify which parts of the Website are released on
          such an “alpha” or “beta” basis. We are not responsible for any loss
          to property or persons incurred as a result of the use by any person
          of any parts of the Website which are released on an “alpha” or “beta”
          basis.
        </p>
      </div>
      <div>
        <h3 className={Style.headings}>10. Security</h3>
        <p className={Style.content}>
          Where there is unauthorised access or a breach of security, we will
          take appropriate steps to rectify the unauthorised use or breach of
          security, including by, without limitation, cancelling and resetting
          the relevant login IDs and passwords. You must take all other actions
          that we reasonably deem necessary or desirable to maintain or enhance
          the security of our computing systems and networks and your access to
          the Website.
        </p>
        <p>
          We will use all reasonable endeavours to ensure that we provide a
          secure environment for any data stored or hosted on our systems. You
          acknowledge however that no information which is available on the
          Internet is completely secure and you agree that we will not be liable
          for any loss suffered by you or any third party should our security
          measures (or those of any of our service providers) be overcome or
          breached.
        </p>
        <p>
          We maintain appropriate technical and operational measures, internal
          controls, and data security routines intended to protect your data
          against accidental loss or change, unauthorized disclosure or access,
          or unlawful destruction. We are not responsible for the security of
          any data stored on any personal computer, laptop or mobile device
          owned or controlled by you.
        </p>
      </div>
      <div>
        <h3 className={Style.headings}>11. Content</h3>
        <p className={Style.content}>
          We or our subsidiary and associates own all rights, title and
          copyrights in the Website and Mobile applications.
        </p>
        <p>
          All material on the Website and mobile applications such as articles,
          written materials, names, images, photographs, designs, illustrations,
          and logos (‘Content’) are owned by, or licensed to, us (unless
          expressly indicated otherwise). You are granted a nonexclusive,
          non-transferable licence to use the Website and access the Content in
          the manner set out in these Terms of Use.
        </p>
        <p>
          Certain names, logos, and other materials displayed on the Site or in
          the Services may be trademarks or trade names of Connect2MyDoctor or
          other entities. You are not permitted to use any such trademarks or
          trade names without our written authorisation. Ownership of all such
          trademarks and trade names remains with us or those other entities.
        </p>
        <p>
          You may use the Website and access the Content only for your personal
          and non commercial use. Nothing in these Terms of Use or on the
          Website will grant you ownership of the Content (or any intellectual
          property rights in it). You may not sell, modify, copy, distribute,
          display, communicate or otherwise use the Content unless we have
          expressly authorised you to do so in writing.
        </p>
      </div>
      <div>
        <h3 className={Style.headings}>12. Continued Development</h3>
        <p className={Style.content}>
          You consent to us soliciting feedback, information, requests, data,
          ideas, enhancement requests, recommendations, description of
          processes, or other information concerning the website and mobile
          application from you. We will own all IP Rights in any Feedback and
          may use such Feedback for purposes related to the Site or the carrying
          out of services by us generally in our business activities without
          further approval or acknowledgement, and you hereby assign to us all
          IP Rights in any such Feedback.
        </p>
      </div>
      <div>
        <h3 className={Style.headings}>13. Privacy Policy</h3>
        <p className={Style.content}>
          These Terms are subject to our Privacy Policy and accessible at
          Privacy Policy.
        </p>
      </div>
      <div>
        <h3 className={Style.headings}>14. Links</h3>
        <div className={Style.subContent_main}>
          {Links?.map((item, index) => {
            return (
              <div className={Style.subContent} key={index}>
                <img src={Assets.Ellipse} alt="" />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className={Style.headings}> 15. Off-Site Conduct</h3>
        <p className={Style.content}>
          It is a direct violation of these Terms of Use for you to engage in an
          activity using information obtained from the website and mobile
          application to contact, abuse, advertise, sell to, harass or harm any
          other person.
        </p>
      </div>
      <div>
        <h3 className={Style.headings}>16. Termination</h3>
        <p className={Style.content}>
          We may (in our sole discretion and without prior notice to you)
          terminate access the Website and take any legal action we have
          available against you, if you breach these Terms of Use or we believe
          the services offered by us are not appropriate for you.
        </p>
      </div>
      <div>
        <h3 className={Style.headings}>
          17. Disclaimer and Limitation of Liability
        </h3>
        <p className={Style.content}>
          To the fullest extent permitted by law, we exclude all conditions and
          warranties (express and implied) of any kind in relation to the
          Website and Mobile application. Under no circumstances (including
          without limitation, any act or omission on our part) will we be liable
          for any indirect, incidental, special and/or consequential damages or
          loss whatsoever which results from any use of or access to, or any
          inability to use or access, the Website. Certain laws may not allow
          the exclusion of some conditions and warranties, in which case some of
          the above exclusions may not apply to you.
        </p>
        <p className={Style.content}>
          You agree that Neev Tech Labs and its affiliates shall not be liable
          to you or anyone else for any loss or injury caused in whole or in
          part by relying upon, using, or interpreting the content or any other
          information obtained through the use of the Website. In no event will
          Neev Tech Labs or its affiliates be liable to you or anyone else for
          any incidental, consequential, indirect, special or exemplary damages
          or lost profits arising out of the use or inability to use the
          Content, the Website, or any other information obtained through the
          Website, even if Neev Tech Labs, its affiliates, its licensors, agents
          or representatives know or have been advised of the possibility of
          such damages.
        </p>
        <p className={Style.content}>
          You agree that if we are liable for any damages or loss regardless of
          the cause of action, whether in contract, tort or breach of statute or
          any other legal or equitable obligations the amount is limited to the
          Consultation Fee.
        </p>
        <p className={Style.content}>
          The Site is delivered on an “as is” and “as available” basis. In this
          context, we do not warrant that the Site will be error-free or
          uninterrupted.
        </p>
      </div>
      <h3 className={Style.headings}>18. Indemnity</h3>
      <p className={Style.content}>
        You agree to indemnify us and our officers, directors, agents and
        affiliates from and against all claims, liabilities, costs and expenses
        (including legal costs on a full indemnity basis) resulting from your
        failure to comply with these Terms of Use.
      </p>
      <div>
        <h3 className={Style.headings}> 19. Reporting</h3>
        <p className={Style.content}>
          If you encounter any content on the Website that you find offensive
          and which you believe violates these Terms of Use, please report the
          content to us by e-mailing{" "}
          <a href="mailto:support.connect2mydoctor.com">
            support.connect2mydoctor.com
          </a>
          . So that we can efficiently deal with your report, please ensure that
          your report: <br />
          a. states the reason for your concern/s; and
          <br /> b.clearly identifies the content by providing:
          <br />{" "}
          <span className={Style.ReportSubText}>
            i. a description of it; and <br />
          </span>
          <span className={Style.ReportSubText}>
            ii. a hyperlink to the specific page (if applicable).
          </span>
        </p>
      </div>
      <h3 className={Style.headings}>20. Confidentiality</h3>
      <p className={Style.content}>
        If you receive or encounter any information which a reasonable person
        would consider to be confidential in nature, you agree to contact us
        immediately at{" "}
        <a href="mailto:support.connect2mydoctor.com">support.connect2mydoctor.com</a>
        .
      </p>
      <h3 className={Style.headings}>21. Applicable Law</h3>
      <p className={Style.content}>
        These Terms and Use will be governed by and construed in accordance with
        the laws of India. You irrevocably and unconditionally submit to the
        exclusive jurisdiction of the courts of Bangalore, Karnataka, India. If
        any provision of these Terms of Use is found to be invalid or
        unenforceable by a court of law, such invalidity or unenforceability
        will not affect the remainder of these Terms of Use which will continue
        in full force and effect.
      </p>
      <h3 className={Style.headings}>22. Contact</h3>
      <p className={Style.content}>
        If you have any questions or concerns regarding these Terms of Use
        please contact us at
        <a href="mailto:support.connect2mydoctor.com">
          support.connect2mydoctor.com
        </a>{" "}
        .
      </p>
    </>
  );
}

export default InsideIndia;
