

import React from 'react'
import './allergiescard.css'
import { Select } from 'antd';
import { CloseIcon } from '../../assets/Logos/Icons';

function AllergiesCard() {

    const { Option } = Select;

    return (
        <div className="allergies-card-container">

        <input type="text" className="allergies-card-input" defaultValue="Skin Rashes" />

        <input type="text" className="allergies-card-input" placeholder="Reaction" />

        <Select placeholder="Status" style={{ width: "100%", fontSize: "14px"}}>
            <Option value="Option1">Option1</Option>
        </Select>

        <div className="d-flex flex-row justify-content-start align-items-center" style={{ marginTop: ".8rem" }}>
        <CloseIcon/>
        <span className="remove-text">Remove</span>
        </div>

    </div>
    )
}

export default AllergiesCard
