import { DatePicker, Input, Radio } from 'antd'
import React, { useState } from 'react'
import { PlusIcon } from '../../../Assets/Logos/Icons'
import { Dummy_Languages, Dummy_Salutation } from '../../../Helpers/Dummydata'
import { FormItemContainer } from '../../Styled/FormItemContainer'
import CustomSelect from '../CustomSelect'
import MultilevelSelect from '../MultilevelSelect/MultilevelSelect'
import './profiledropdowncontainer.css'

const { TextArea } = Input;

function PersonalDetailsDropdownContainer() {

    let [isActive, setActive] = useState(false)





    return (
        <div className="profile-drop-container">
            <div className="drop-switch" onClick={() => { setActive(!isActive) }}>
                Peresonal Details
                <PlusIcon />
            </div>


            <div className={isActive ? "drop-body-active" : "drop-body-hidden"}>

                <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">
                        <FormItemContainer>
                            <div className="form-item-left">
                                Salutation
                            </div>

                            <div className="form-item-right">
                                <CustomSelect values={Dummy_Salutation} />
                            </div>

                        </FormItemContainer>

                        <FormItemContainer>
                            <div className="form-item-left">
                                First Name
                            </div>

                            <div className="form-item-right">
                                <Input placeholder="Enter first name" />
                            </div>

                        </FormItemContainer>

                        <FormItemContainer>
                            <div className="form-item-left">
                                First Name
                            </div>

                            <div className="form-item-right">
                                <Input placeholder="Enter middle name" />
                            </div>

                        </FormItemContainer>

                        <FormItemContainer>
                            <div className="form-item-left">
                                First Name
                            </div>

                            <div className="form-item-right">
                                <Input placeholder="Enter last name" />
                            </div>

                        </FormItemContainer>

                        <FormItemContainer>
                            <div className="form-item-left">
                                Date of birth
                            </div>

                            <div className="form-item-right">
                                <DatePicker />
                            </div>

                        </FormItemContainer>

                        <FormItemContainer>
                            <div className="form-item-left">
                                Gender
                            </div>

                            <div className="form-item-right">
                                <Radio.Group>
                                    <Radio value={1}>Male</Radio>
                                    <Radio value={2}>Female</Radio>
                                    <Radio value={3}>Other</Radio>
                                </Radio.Group>
                            </div>

                        </FormItemContainer>

                    </div>

                    <div className="col-md-6 col-sm-12 col-12">
                        <FormItemContainer>
                            <div className="form-item-left">
                                Languages
                            </div>

                            <div className="form-item-right">
                               <MultilevelSelect name="Select language" values={Dummy_Languages}/>
                            </div>

                        </FormItemContainer>

                        <FormItemContainer>
                            <div className="form-item-left">
                                Email ID
                            </div>

                            <div className="form-item-right">
                                <Input placeholder="Enter Mail Id" />
                            </div>

                        </FormItemContainer>


                        <FormItemContainer>
                            <div className="form-item-left">
                                Mobile Number
                            </div>

                            <div className="form-item-right">
                                <Input placeholder="Enter mobile number" />
                            </div>

                        </FormItemContainer>

                        <FormItemContainer>
                            <div className="form-item-left">
                                Address
                            </div>

                            <div className="form-item-right">
                                <TextArea rows={4} />
                            </div>

                        </FormItemContainer>





                    </div>
                </div>

            </div>


        </div>
    )
}

export default PersonalDetailsDropdownContainer
