import React, { useState } from 'react'
import './customphoneinput.css'

import { Menu, Dropdown } from 'antd';
import { CaretDownOutlined, DownOutlined } from '@ant-design/icons';
import { getCountryArray } from '../../constants/country';

function CustomPhoneInput() {

    let [selecedCountry,selectCountry]=useState(null)

    const menu = (
        <Menu>
    
            {
                getCountryArray().length > 0 ?
                    getCountryArray().map((eachCountry, key) => {
    
                        return (
                            <Menu.Item key={key} onClick={()=>{selectCountry(eachCountry)}}>
                                
                                   <div>{eachCountry.flag} {eachCountry.name}</div>
                                
                            </Menu.Item>
                        )
    
    
    
                    })
    
    
                    : null
            }
           
        </Menu >
    );


    return (

        <div className='custom_phone_input_container'>

            <div className="flag_box ">
                <Dropdown getPopupContainer={(e) => e.target.pa} overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <CaretDownOutlined />  <img className='flag_image' src={`https://countryflagsapi.com/png/${selecedCountry?selecedCountry.code:"india"}`} alt="" />&nbsp;{selecedCountry?selecedCountry.dial_code:"+91"}&nbsp;
                    </a>
                </Dropdown>
            </div>

            <div className="number_box">
                <input placeholder='Enter mobile number' type="tel" name="" id="" />
            </div>

        </div>
    )
}

export default CustomPhoneInput


