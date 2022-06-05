import React, { useState } from 'react'
import './header.css'

import c2mLogo from '../../../../assets/Logos/c2mdBlue.svg'
import { AndroidIcon, HamburgerIcon, IphoneIcon } from '../../../../assets/Logos/Icons'

import { Drawer } from 'antd';


function Header() {


  let [isDrawerVisible,setDrawerVisibility]=useState(false)

  return (
    <div className='c2md-header-container'>

      <div className='c2md-header-image-container'>

        <div className="c2md-header-image-container_left">

          <div className="hamburger-header for-tablet" onClick={()=>{setDrawerVisibility(!isDrawerVisible)}}>
            <HamburgerIcon/>
          </div>

          <img src={c2mLogo} alt="" />

          <ul className='c2md-header-image-container_nav for-web'>
            <li>SPECIALITIES</li>
            <li>ABOUT US</li>
            <li>FOR PATIENTS</li>
            <li>FOR DOCTORS</li>
            <li>CONTACT US</li>
          </ul>

        </div>


      </div>


      <div className="c2md-header-buttons-container">

        <button className='c2md-header-signin-button'>Sign in / Sign up</button>


        <div className="download_app_container">

          <span className='download-app-text'>Download Our App :</span>

          <div className='download_app_container_icon_container'>

            <div className="download_app_icon">
              <IphoneIcon />
            </div>

            <div className="download_app_icon">
              <AndroidIcon />
            </div>


          </div>

        </div>

      </div>

      <Drawer
        title="Explore Us"
        placement={"left"}
        closable={true}
        onClose={()=>{setDrawerVisibility(false)}}
        visible={isDrawerVisible}
        key={"left"}
      >
        <p className='hamburger-menu'>SSPECIALITIES</p>
        <p className='hamburger-menu'>ABOUT US</p>
        <p className='hamburger-menu'>FOR PATIENTS</p>
        <p className='hamburger-menu'>FOR DOCTORS</p>
        <p className='hamburger-menu'>CONTACT US</p>
      </Drawer>


    </div>
  )
}

export default Header