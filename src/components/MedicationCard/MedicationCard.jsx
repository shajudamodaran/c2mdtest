import './medicationcard.css'
import React from 'react'
import { Select } from 'antd';
import { CloseIcon } from '../../assets/Logos/Icons';


function MedicationCard() {

    const { Option } = Select;

    return (
        <div className="medication-card-container">
            <input type="text" className="medication-card-input" defaultValue="Acetaminophen" />

            <div className="d-flex flex-row justify-content-between align-items-center" style={{ marginTop: ".8rem" }}>
                <input type="text" className="medication-card-input-50" defaultValue="1" />
                <Select placeholder="Status" style={{ width: "48%", fontSize: "14px", height: "100%",fontWeight:500 }}>
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>

                </Select>
            </div>

            <Select value="After Lunch" style={{ width: "100%", fontSize: "14px", marginTop: ".8rem" }}>
                <Option value="After Lunch">After Lunch</Option>
            </Select>

            <div className="d-flex flex-row justify-content-start align-items-center" style={{ marginTop: ".8rem" }}>
            <CloseIcon/>
            <span className="remove-text">Remove</span>
            </div>

        </div>
    )
}

export default MedicationCard
