import React, { useEffect, useRef, useState } from 'react'
import './customphoneinput.css'

import { Menu } from 'antd';
import { CaretDownOutlined, DownOutlined } from '@ant-design/icons';
import { getCountryArray } from '../../constants/country';
import { Dropdown, Form } from 'react-bootstrap';


function CustomPhoneInput({ onChange, onBlur, value, name }) {

    let [selecedCountry, selectCountry] = useState({ "name": "India", "flag": "🇮🇳", "code": "IN", "dial_code": "+91" })
    let [isVisible, setVisible] = useState(true)
    let [countryArray, setCountryArray] = useState(getCountryArray())


    let handleSelectChange = (e) => {

        if (e.target.value && countryArray) {
            let index = e.target.value
            selectCountry(countryArray[index])
        }
    }


    let handlePhoneNumberChange = (e) => {

        let { value } = e.target


        let data = {
            "name": selecedCountry?.name,
            "dialCode": selecedCountry?.dial_code?.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''),
            "countryCode": selecedCountry?.code,
            "format": "+... .... ...."
        }

        let formattedValue = { formattedValue: `${selecedCountry?.dial_code}${value}` }



        onChange(`${selecedCountry?.dial_code?.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')}${value}`, data, e, "+852123")

    }

    function allowOnlyNumericsOrDigits(e) {		
		const charCode = e.which ? e.which : e.keyCode;
		
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            e.preventDefault();
		}
	}


    return (

        <div className='custom_phone_input_container'>

            <div className="flag_box ">


                <a className="ant-dropdown-link" onClick={e => setVisible(true)}>
                    <img className='flag_image' src={`https://countryflagsapi.com/png/${selecedCountry ? selecedCountry.code : "india"}`} alt="" />

                </a>

                <Form.Select value="" onChange={handleSelectChange} size="sm" style={{ display: isVisible ? "flex" : "none", maxHeight:"100px" }}>

                   
                        <option hidden value="911">
                            {`${selecedCountry ? selecedCountry.dial_code : "+91"}`}
                        </option>

                        {
                            countryArray.length > 0 ?
                                countryArray.map((eachCountry, key) => {

                                    return (
                                        <option key={key} value={key}>{`${eachCountry.name}  ${eachCountry.dial_code}`}</option>
                                    )
                                }) : null
                        }
                   
                </Form.Select>


            </div>

            <div className="number_box">
                <input onKeyDown={allowOnlyNumericsOrDigits} name={name} value={value} onBlur={onBlur} onChange={handlePhoneNumberChange} placeholder='Enter mobile number' type="tel" id="" />
            </div>

        </div>
    )
}

export default CustomPhoneInput


