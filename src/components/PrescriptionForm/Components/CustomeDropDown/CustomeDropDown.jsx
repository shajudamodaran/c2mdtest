import React from 'react'
import './customedropdown.css'

import { Select } from 'antd';

const { Option } = Select;



function CustomeDropDown() {

    function handleChange(value) {
        console.log(`selected ${value}`);
      }

    return (

        // <div style={{width:"min-content"}}>
        //     <div className='custome-drop-container'>
        //         shaju
        //     </div>

        //     <div className='custome-drop-down'>

        //     </div>


        // </div>

        <Select defaultValue="Inches" style={{ width: 120}} onChange={handleChange}>
            <Option value="Inches">Inches</Option>

        </Select>

    )
}

export default CustomeDropDown
