import React from 'react'
import './sessionexpired.css'
import sessionout from '../../assets/sessionout.svg'

function SessionExpired() {
    return (
        <div className='session-expired-container'>

            <img className='image' src={sessionout} alt="" />
            <div className="title">Unauthorized: Access is denied due to invalid credentials.</div>
            <div className="caption">You do not have permission to view this page. Please contact your system administrator.</div>
        </div>
    )
}

export default SessionExpired