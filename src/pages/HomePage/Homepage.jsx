import React from 'react'
import BookAppointmentHome from './Components/BookAppointmentHome/BookAppointmentHome'
import CorporateVideo from './Components/CorporateVideo/CorporateVideo'
import CustomerSays from './Components/CustomerSays/CustomerSays'
import CustomerSaysBanner from './Components/CustomerSays/CustomerSaysBanner/CustomerSaysBanner'
import DownloadAppHome from './Components/DownloadAppHome/DownloadAppHome'
import KnowMore from './Components/DownloadAppHome/KnowMore'
import FeaturedIn from './Components/FeaturedIn/FeaturedIn'
import Header from './Components/Header/Header'
import HomeBanner from './Components/HomeBanner/HomeBanner'
import HomeFooter from './Components/HomeFooter/HomeFooter'
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
        <KnowMore/>
        <CustomerSaysBanner/>
        <FeaturedIn/>
        <BookAppointmentHome/>
        <HomeFooter/>
      
        
    </div>
  )
}

export default Homepage