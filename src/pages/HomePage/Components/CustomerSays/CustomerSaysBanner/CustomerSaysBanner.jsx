import React from 'react'
import Slider from "react-slick";
import CustomerSays from '../CustomerSays';

function CustomerSaysBanner() {


    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };


    return (
        <div className='c2md-home-banner'>

            <CustomerSays index={0} />

        </div>
    )
}

export default CustomerSaysBanner