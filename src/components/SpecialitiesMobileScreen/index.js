import React, { useEffect, useState } from "react";
import Style from "./SpecialitiesMobileScreen.module.scss";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetch_doctors } from "../../actions/DoctorListingAction";

function MobileSpecialities({ specialityData }) {
  const [sortedData, setSortedDate] = useState([]);
  const [selected, selectedDate] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const clientDetails = useSelector((state) => state.clientDetails);
  useEffect(async () => {
    // await setLoader(true);
    if (selected != "") {
      await dispatch(
        fetch_doctors(
          selected,
          clientDetails != undefined ? clientDetails.clinicName : ""
        )
      );
    }

    // await setLoader(false);
  }, [selected]);

  useEffect(() => {
    if (specialityData.length > 0) {
      let data = specialityData.reduce((r, e) => {
        let alphabet = e.specialityName[0];
        if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] };
        else r[alphabet].record.push(e);
        return r;
      }, {});
      let result = Object.values(data);

      setSortedDate(result);
    }
  }, [specialityData]);

  return (
    <div className={Style.filter_mobile_specialities_content}>
      {sortedData.map((item2) => {
        return (
          <>
            <div className={Style.filter_mobile_specialities_character}>
              {item2.alphabet}
            </div>
            {item2.record.map((item) => {
              return (
                <div className={Style.checkboxListwrp}>
                  <div className={Style.checkboxList}>
                    {/* <input
                type="checkbox"
                value={item.specialityName}
                id={item.specialityName}
                value={item.specialityName}
                checked={item.checked}
                onClick={()=>{selectedDate(item.specialityName)}}
                onChange={(e) => console.log(e)}
              /> */}
                    <input
                      type="checkbox"
                      value={item.specialityUrl}
                      id={item.specialityUrl}
                      checked={item.specialityName == selected}
                      onChange={(e) => {
                        selectedDate(item.specialityName);
                      }}
                      onClick={() => {
                        selectedDate(item.specialityName);
                      }}
                    />
                    <label
                      htmlFor="All"
                      onClick={() => {
                        selectedDate(item.specialityName);
                      }}
                    >
                      {item.specialityName}
                    </label>
                  </div>
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
}

export default MobileSpecialities;
