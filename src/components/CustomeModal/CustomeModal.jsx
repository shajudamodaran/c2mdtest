import React from 'react'
import { useDispatch } from 'react-redux';
import { INTERBRANCH_MODAL } from '../../actions/type';
import './custommodal.css'

function CustomeModal({ state, modalName,component,position, isRight,setModal }) {

 
    let dispatch=useDispatch()

    let handleClose = () => {

        // console.log(modalName);

        dispatch({
            type: INTERBRANCH_MODAL,
            payload: {
                name: modalName,
                value: false
            }
        });

        if(setModal)
        {
            setModal(false)
        }
       

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
