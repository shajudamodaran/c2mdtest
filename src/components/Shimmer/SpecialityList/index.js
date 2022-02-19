import React from 'react';
import Style from './SpecialityList.module.scss';

const SpecialityListShimmer = () => {
    return (
        <div
        className={Style.Speciality}
      >
        <div className={Style.ImgStyle}>
          <div className={Style.mobTextStyle}>
            <h6 className={Style.head}></h6>
          </div>
          <div className={`${Style.imageBox} ${Style.shimmer}`}></div>
        </div>
        <div className={Style.TextStyle}>
          <h6 className={`${Style.head} ${Style.shimmer}`}></h6>
          <p className={`${Style.text1} ${Style.shimmer}`}></p>
          <div className={Style.SpecialityItems}>
                  <p className={`${Style.text2} ${Style.shimmer}`}></p>
          </div>
        </div>
      </div>
    )
}

export default SpecialityListShimmer;