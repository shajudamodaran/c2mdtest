import { Rate } from 'antd'
import React from 'react'
import './ratingcomponent.css'

function RatingComponent() {
    return (
        <div className="rating-component">

            <Rate disabled count={4} allowHalf defaultValue={3.5} className="test-star" />

        </div>
    )
}

export default RatingComponent