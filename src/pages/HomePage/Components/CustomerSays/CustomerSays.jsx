import React, { useState, useEffect } from 'react'
import { HeartVectorUserComment, LikeVectorUserComment, PlusGrid, QuotesEnd, QuotesStart, StarVectorUserComment } from '../../../../assets/Logos/Icons'
import './customersays.css'
import image from '../../../../assets/HomepageAssets/Customer Comments/customer-lady.png'
import image2 from '../../../../assets/HomepageAssets/Customer Comments/customer-lady2.webp'

import image3 from '../../../../assets/HomepageAssets/Customer Comments/Group 43126.png'

import RatingComponent from '../../../../components/RatingComponent/RatingComponent'

import { useSwipeable } from 'react-swipeable'

function CustomerSays() {

    let [index, setActiveIndex] = useState(0)

    const handlers = useSwipeable({
        onSwipedLeft: () => incrementIndex(),
        onSwipedRight: () => decrementIndex(),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    let handleDotClick = (count) => {

        setActiveIndex(count)
    }

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


    return (
        <div className='c2md-customer-says-container' {...handlers}>

            <div className="customer-says-title">
                <h2>What our customers says</h2>
                <div className="customer-says-underline">&nbsp;</div>
            </div>


            <div className="customer-says-content">

                <div className="customer-says-content_left" key={Math.random()}>

                    <div className="comment-container">

                        <div className="logo-top">
                            <QuotesEnd />
                        </div>
                        <div className="comment">
                            “Virtual primary care and mental health treatment
                            onalized desk top or smartpohone. Virtual are primary
                            care and treatment personalized smartphone”
                        </div>
                        <div className="logo-bottom">

                            <QuotesStart />
                        </div>

                    </div>


                    <div className="comment-footer">
                        <div className="name">Marya Smith</div>
                        <div className="location">South Australia, Canria</div>

                        <div className="rating-container">
                            <RatingComponent />
                        </div>

                        <ul className='customer-says-slider-dot'>
                            <li onClick={() => { handleDotClick(0) }} className={index == 0 && "active"}></li>
                            <li onClick={() => { handleDotClick(1) }} className={index == 1 && "active"}></li>
                            <li onClick={() => { handleDotClick(2) }} className={index == 2 && "active"}></li>
                        </ul>

                    </div>

                </div>

                <div className="customer-says-content_right">

                    {
                        index >= 0 ? <div className="customer-says-content_right_image_container" key={Math.random()}>
                            {/* 
                       <div className="image-layer-under image-layer">
                           <PlusGrid />
                       </div> */}

                            <div className="image-layer-middle image-layer">

                                <img src={image3} alt="" />

                                {/* <div className="customer-says-content_right_note">
                                    *Identity modified for privacy reasons
                                </div> */}
                            </div>

                            {/* <div className="image-layer-top image-layer" >

                           <div className="star-vector">
                               <StarVectorUserComment />
                           </div>

                           <div className="like-vector">
                               <LikeVectorUserComment />
                           </div>

                           <div className="heart-vector">
                               <HeartVectorUserComment />
                           </div>

                       </div> */}



                        </div> : null
                    }




                </div>

            </div>



        </div>
    )
}

export default CustomerSays