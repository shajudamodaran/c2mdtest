import React from 'react'
import './dashbutton.css'

function DashButton({text,disabled,inactive,active, onClick, action, width}) {
    return (
       <button 

       onClick={()=>{action?onClick(action):console.log('no action assigned');}}
       className={disabled?"dash-button-disabled":inactive?"dash-button-inactive":active?"dash-button-active":"dash-button-inactive" }
       style={{
           width:width?width:"90%"
       }}
       disabled={inactive}
       >
           {text}
       </button>
    )
}

export default DashButton
