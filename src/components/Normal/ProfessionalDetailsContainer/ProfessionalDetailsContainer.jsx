import { DatePicker, Input, InputNumber, Radio } from 'antd'
import React, { useState } from 'react'
import { PlusIcon } from '../../../Assets/Logos/Icons'
import { Dummy_Languages, Dummy_Salutation, Dummy_Services, Dummy_Specializations } from '../../../Helpers/Dummydata'
import { FormItemContainer } from '../../Styled/FormItemContainer'
import CustomSelect from '../CustomSelect'
import MultilevelSelect from '../MultilevelSelect/MultilevelSelect'
import './ProfessionalDetailsContainer.css'

const { TextArea } = Input;

function ProfessionalDetailsContainer() {

    let [isActive, setActive] = useState(false)





    return (
        <div className="profile-drop-container">
            <div className="drop-switch" onClick={() => { setActive(!isActive) }}>
                Professional Details
                <PlusIcon />
            </div>


            <div className={isActive ? "drop-body-active" : "drop-body-hidden"}>

                <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">

                        <FormItemContainer>
                            <div className="form-item-left">
                                Medical Reg Number
                            </div>

                            <div className="form-item-right">
                                <Input placeholder="Enter registration number" />
                            </div>

                        </FormItemContainer>


                        <FormItemContainer>
                            <div className="form-item-left">
                                Year of Experiance
                            </div>

                            <div className="form-item-right">
                                <InputNumber min={0} max={100} defaultValue={0} />
                            </div>

                        </FormItemContainer>


                        <FormItemContainer>
                            <div className="form-item-left">
                                Specialization
                            </div>

                            <div className="form-item-right">
                                <MultilevelSelect name="Select" values={Dummy_Specializations} />
                            </div>

                        </FormItemContainer>

                        <FormItemContainer>
                            <div className="form-item-left">
                                Professional Summary
                            </div>

                            <div className="form-item-right">
                                <TextArea rows={3} />
                            </div>

                        </FormItemContainer>


                        <FormItemContainer>
                            <div className="form-item-left">
                                Services Offered
                            </div>

                            <div className="form-item-right">
                                <MultilevelSelect name="Select" values={Dummy_Services} />
                            </div>

                        </FormItemContainer>


                        <FormItemContainer>
                            <div className="form-item-left">
                                Designation / {<br/>} Current Role
                            </div>

                            <div className="form-item-right">
                                <Input placeholder="Enter Designation" />
                            </div>

                        </FormItemContainer>

                        <FormItemContainer>
                            <div className="form-item-left">
                                Educational Summary
                            </div>

                            <div className="form-item-right">
                                <TextArea rows={3} />
                            </div>

                        </FormItemContainer>




                    </div>

                    <div className="col-md-6 col-sm-12 col-12">



                    </div>
                </div>

            </div>


        </div>
    )
}

export default ProfessionalDetailsContainer
