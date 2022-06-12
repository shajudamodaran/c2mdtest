import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import Slider from "react-slick";


import h1 from '../../../../../assets/HomepageAssets/Banner Footer/h1.png'
import h2 from '../../../../../assets/HomepageAssets/Banner Footer/h2.png'
import h3 from '../../../../../assets/HomepageAssets/Banner Footer/h3.png'
import h4 from '../../../../../assets/HomepageAssets/Banner Footer/h4.png'
import h5 from '../../../../../assets/HomepageAssets/Banner Footer/h5.png'

import image1 from '../../../../../assets/HomepageAssets/HomeBanner/banner1.png'
import image2 from '../../../../../assets/HomepageAssets/HomeBanner/banner2.png'
import image3 from '../../../../../assets/HomepageAssets/HomeBanner/banner3.png'


function Banner1() {


    let [index, setActiveIndex] = useState(0)
    let images = [image1, image2, image3]


    //Functions...................................

    let handleDotClick = (count) => {


        setActiveIndex(count)
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => incrementIndex(),
        onSwipedRight: () => decrementIndex(),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    });


    let incrementIndex = () => {

        if (index >= 2) {
            setActiveIndex(0)
        }
        else {
            setActiveIndex(index + 1)
        }

    }

    let decrementIndex = () => {

        if (index <= 0) {
            setActiveIndex(2)
        }
        else {
            setActiveIndex(index - 1)
        }

    }

    useEffect(() => {

        // const myTimeout = setTimeout(incrementIndex, 6000);

    }, [])

    useEffect(() => {

        // const myTimeout = setTimeout(incrementIndex, 6000);

    }, [index])

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow:2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };






    return (
        <div  className='c2md-home-banner-element'>

            <div {...handlers} className="c2md-home-banner-element_body">

                <div className="c2md-home-banner-element_body_text-container" key={Math.random()} >

                    <span className="hash-tag" >#Beclosertocare</span>

                    <div className="home-banner-title-container" >
                        <div>Convenient, secure,</div>
                        <div>private online video</div>
                        <div>consultation</div>
                    </div>

                    <div className="home-banner-caption-container" >
                        <span>Virtual primary care and mental health treatment when you  lorem ipsum doler set ament smartphone.</span>

                    </div>


                    <buttton className="home-banner-more-button">More Partners</buttton>


                    <ul className='banner-slider-dot'>
                        <li onClick={() => { handleDotClick(0) }} className={index == 0 ? "active" : null}></li>
                        <li onClick={() => { handleDotClick(1) }} className={index == 1 ? "active" : null}></li>
                        <li onClick={() => { handleDotClick(2) }} className={index == 2 ? "active" : null}></li>
                    </ul>




                </div>

                <div className="c2md-home-banner-element_body_image-container">

                    <div className={`banner-image-home`}>

                        {
                            index === 0 ? <img key={Math.random()} className='c2md-banner-image' src={images[index]} alt="C2md banner image" /> :
                                index === 1 ? <img key={Math.random()} className='c2md-banner-image' src={images[index]} alt="C2md banner image" /> :
                                    index === 2 ? <img key={Math.random()} className='c2md-banner-image' src={images[index]} alt="C2md banner image" /> : null
                        }

                    </div>

                </div>

            </div>

            <div className="c2md-home-banner-element_footer">

                <div className="c2md-home-banner-element_footer_caption">Trusted by &nbsp;<b> 200+ </b> &nbsp;hospitals</div>


                <div className="c2md-home-banner-element_footer_hospital-logos">

                <img src={h1} alt="" />
                <img src={h2} alt="" />
                <img src={h3} alt="" />
                <img src={h4} alt="" />

                    {/* {
                        <div style={{width:"100%"}}>

                            <Slider {...settings}>
                                <div>
                                    <img src={h1} alt="" />
                                </div>
                                <div>
                                <img src={h2} alt="" />
                                </div>
                                <div>
                                <img src={h3} alt="" />
                                </div>
                                <div>
                                <img src={h4} alt="" />
                                </div>
                                
                            </Slider>
                        </div>
                    } */}
                   

                </div>

            </div>

        </div>
    )
}

export default Banner1