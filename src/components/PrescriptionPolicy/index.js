import React from "react";
import Style from "./PrescriptionPolicy.module.scss";
import Container from "react-bootstrap/Container";
function PrescriptionPolicy() {
  return (
    <div className={Style.PrescriptionPolicy}>
      <div className={Style.TopSection}>
        <Container>
          <h1 className={Style.Top_Head}>Prescription Policy</h1>
        </Container>
      </div>
      <div className={Style.bottomSection}>
        <Container className={Style.Contents_wrapper}>
          <div className={Style.Contents}>
            <h6 className={Style.heading}>Prescription Policy</h6>
            <p>
              Online consultations via Connect2MyDoctor does not guarantee
              prescriptions. It is up to the provider to recommend the best
              treatment. During the virtual consult, the provider may prescribe
              non-scheduled/OTC Drugs (Schedule I-IV, lifestyle, psychiatric,
              and govt-regulated medications are not recommended to be
              prescribed) medications at your professional discretion. The
              patient may be intimated before issuing the appointment that the
              medical prescription will be issued if feel deemed right by the
              provider and cannot be forced by the patient. In the event a
              provider does prescribe medication, he/she will limit the supply
              based on regulations of the country/state they belong to.
            </p>
            <p>
              Specific Restrictions (India. As defined by the Telemedicine
              Practice Guidelines releases on 25 March 2020) <br /> There are
              certain limitations on prescribing medicines on consult via
              telemedicine depending upon the type of consultation and mode of
              consultation. The categories of medicines that can be prescribed
              via tele-consultation will be as notified in consultation with the
              Central Government from time to time.
              <br />
              List O: It will comprise those medicines which are safe to be
              prescribed through any mode of tele-consultation. In essence they
              would comprise of Medicines which are used for common conditions
              and are often available ‘over the counter’. For instance, these
              medicines would include, paracetamol, ORS solutions, cough
              lozenges etc Medicines that may be deemed necessary during public
              health emergencies.
            </p>
          </div>
          <div className={Style.Contents}>
            <h6 className={Style.heading}>Medicine List</h6>
            <p>
              Common over-the counter medications such as Antipyretics:
              Paracetamol Cough Supplements: Lozenges, Cough/ Common-cold
              medications (such as combinations of Acetylcysteine, Ammonium
              Chloride, Guaifensen, Ambroxol, Bromhexene, Dextromethorphan) ORS
              Packets Syrup Zinc
            </p>
            <p>
              Supplements: Iron & Folic Acid tablets, Vitamin D, Calcium
              supplements Etc Medications notified by Government of India in
              case from time to time on an Emergency basis Such as Chloroquine
              for Malaria control for a specific endemic region, when notified
              by Government
            </p>
            <p>
              List A : These medications are those which can be prescribed
              during the first consult which is a video consultation and are
              being re-prescribed for re-fill, in case of follow-up. This would
              be an inclusion list, containing relatively safe medicines with
              low potential for abuse Is a list of medication which RMP can
              prescribe in a patient who is undergoing follow-up consult, as a
              refill.
            </p>
          </div>
          <div className={Style.Contents}>
            <h6 className={Style.heading}>Medicine List</h6>
            <p>
              First Consult Medications (Diagnosis done on video mode of
              consultation) such as Ointments/Lotion for skin ailments:
              Ointments Clotrimazole, Mupirocin, Calamine Lotion, Benzyl
              Benzoate Lotion etc Local Ophthalmological drops such as:
              Ciprofloxacillin for Conjunctivitis, etc Local Ear Drops such as:
              Clotrimazole ear drops, drops for ear wax etc..
            </p>
            <p>
              {" "}
              Follow-up consult for above medications <br />
              Follow-up medications for chronic illnesses for ‘re-fill’ (on any
              mode of consultation) such as medications for
              <br /> Hypertension: Enalapril, Atenolol etc <br />
              Diabetes: Metformin, Glibenclamide etc <br />
              Asthma: Salmetrol inhaler etc <br />
              List B: Is a list of medication which RMP can prescribe in a
              patient who is undergoing follow-up consultation in addition to
              those which have been prescribed during in-person consult for the
              same medical condition.
            </p>
          </div>
          <div className={Style.Contents}>
            <h6 className={Style.heading}>Medicine List</h6>
            <p>
              On follow-up, medications prescribed as ‘Add-on’ to ongoing
              chronic medications to optimize management such as for
              hYpertension: Eg, add-on of Thiazide diuretic with Atenolol
              Diabetes: Addition of Sitagliptin to Metformin etc
            </p>
            <p>
              Prohibited List: An RMP providing consultation via telemedicine
              cannot prescribe medicines in this list. These medicine have a
              high potential of abuse and could harm the patient or the society
              at large if used improperly Medicines listed in Schedule X of Drug
              and Cosmetic Act and Rules or any Narcotic and Psychotropic
              substance listed in the Narcotic Drugs and Psychotropic
              Substances, Act, 1985 Connect2MyDoctor is not involved in any
              manner on the medicine type or brand or aware of any of the effect
              of the medicines that is prescribed. It is important to note that
              Connect2MyDoctor is an online technology platform and does not
              dispense any prescription drugs. If the provider prescribes
              medication, the information is captured and a prescription is
              generated, the patient can purchase the medicine of their choice
              unless particularly advised by the provider. Patients with chronic
              illnesses should visit their regular providers for extended care.
            </p>
            <p>
              {" "}
              Incase of any clarifications, please send your query to
              <a href="mailto:support@connect2my.doctor">
                support@connect2my.doctor
              </a>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default PrescriptionPolicy;
