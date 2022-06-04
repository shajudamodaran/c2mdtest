import React from 'react'
import Banner1 from './Banners/Banner1'
import './homebanner.css'
import Slider from "react-slick";

function HomeBanner() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='c2md-home-banner'>
            {/* <Banner1/> */}

            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div style={{backgroundColor:"red"}}>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default HomeBanner