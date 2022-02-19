import React from "react";
import Style from "./HeaderMobileScreen.module.scss";
import Assets from "../Layout/Assets";
import { useLocation } from "react-router-dom";

function MobileHeader({showFilter,setShowFilter,setSearchDoctor,searchDoctor}) {
  const location = useLocation();

  return (
        <div className={Style.mobile_header_search_input}>
            {location.pathname.search('doctorProfile')==-1?<><img
            src={Assets.search_icon}
            className={Style.mobile_header_search_icon_image}
            ></img>
            <input
            autoComplete="off"
            id="search"
            placeholder="Search"
            className={Style.mobile_header_search_input_box}
            value={searchDoctor}
            onChange={(e)=>{setSearchDoctor(e.target.value)}}
            />
            <img
            src={Assets.filter_icon}
            className={Style.mobile_header_filter_icon_image}
            onClick={()=>{setShowFilter(!showFilter)}}
            ></img></>:<></>
            // <div className={Style.header}>Doctor details</div>
            }
        </div>
        
  );
}

export default MobileHeader;