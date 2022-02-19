import React from 'react'
import './custommodal.css'

function CustomeModal({ state, modalName,component,position, isRight,setModal }) {

 

    let handleClose = () => {

        // console.log(modalName);

        // dispatch(setModalRedux({
        //     name: modalName,
        //     value:false
        // }))
        setModal(false)

    }


    return (
        <>
            {
               isRight?

               state ?
               <div className= {`custome-modal-container ${position}`}>

                   <div className="clickable" onClick={handleClose}>
                       &nbsp;
                   </div>

                   <div className={`menu-container`}>
                      {component}
                   </div>

               </div> : null

               :

               state ?
               <div className= {`custome-modal-container-center`}>

                 
                   <div className={`menu-container`}>
                      {component}
                   </div>

               </div> : null
            }
        </>
    )
}

export default CustomeModal
