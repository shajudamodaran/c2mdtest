import React from 'react'
import { ArrowLeft } from '../../assets/Logos/Icons'
import './prescribemedicine.css'
import { Select } from 'antd';
import { Checkbox } from 'antd';

function PrescribeMedicine() {

    const { Option } = Select;


    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (

        <>
            <div className='medicines-list'>
                <span>MEDICINE DETAILS</span>

                <Select style={{ width: 90, fontSize: "13px" }}>
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>

                </Select>

                <input type="text" className="medication-card-input-50" defaultValue="1" />

                <div className="d-flex">
                    <Checkbox onChange={onChange}>Permit Brand Substitution</Checkbox>
                </div>
            </div>

        </>
    )
}

export default PrescribeMedicine
