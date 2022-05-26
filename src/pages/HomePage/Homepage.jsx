import React from 'react'
import CorporateVideo from './Components/CorporateVideo/CorporateVideo'
import DownloadAppHome from './Components/DownloadAppHome/DownloadAppHome'
import Header from './Components/Header/Header'
import HomeBanner from './Components/HomeBanner/HomeBanner'
import HomeMenu from './Components/HomeMenu/HomeMenu'
import './homepage.css'

function Homepage() {
  return (
    <div className='c2md-home-container'>

        <Header/>
        <HomeBanner/>
        <HomeMenu/>
        <DownloadAppHome/>
        <CorporateVideo/>
      
        
    </div>
  )
}

export default Homepage