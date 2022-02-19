import React from "react";
import Style from "./CharacterSetMobileScreen.module.scss";
import { useSelector } from "react-redux";
import { CharacterSet } from "../Constants/characterSet";
function MobileCharacterSet({ handleStarts }) {
  const indexCharacters = useSelector(
    (state) => state.doctorListing.indexCharacters
  );

  const getSample = (item, index) => {
    if (indexCharacters.includes(item)) {
      return <span onClick={() => handleStarts("A")}>{item}</span>;
    } else {
      return (
        <span style={{ color: "#D1D1D1", cursor: "not-allowed" }}>{item}</span>
      );
    }
  };
  return (
    <span className={Style.mobile_filter_character_set}>
      <p>
        {CharacterSet &&
          CharacterSet.slice(0, 5).map((item, index) => getSample(item, index))}
      </p>
      <p>
        {CharacterSet &&
          CharacterSet.slice(5, 10).map((item, index) =>
            getSample(item, index)
          )}
      </p>
      <p>
        {CharacterSet &&
          CharacterSet.slice(10, 15).map((item, index) =>
            getSample(item, index)
          )}
      </p>
      <p>
        {CharacterSet &&
          CharacterSet.slice(15, 20).map((item, index) =>
            getSample(item, index)
          )}
      </p>
      <p>
        {CharacterSet &&
          CharacterSet.slice(20, 25).map((item, index) =>
            getSample(item, index)
          )}
      </p>
      <p>
        {CharacterSet &&
          CharacterSet.slice(25, 26).map((item, index) =>
            getSample(item, index)
          )}
      </p>
    </span>
  );
}

export default MobileCharacterSet;
