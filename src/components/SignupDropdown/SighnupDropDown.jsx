import React from 'react'
import { Dropdown } from 'react-bootstrap'
import './SignupDropdown.css'

import { Select } from 'antd';

const { Option } = Select;

function SighnupDropDown({ DataItem, formik,value, defaultPlaceH }) {

  

    let handleChange=(value,e)=>{
        console.log(e);
       
        formik.setFieldValue("specialityType", value)

    }

    return (

        <div className="SignupDropDown">
            <Select value={value} placeholder="Select speciality" style={{ width: "100%" }} onSelect={handleChange}>
                
               {
                   DataItem?.map((element,key)=>{
                       return(
                        <Option key={key} value={element.specialityName}>{element.specialityName}</Option>
                       )
                   })
               }
            </Select>
        </div>

    )
}

export default SighnupDropDown