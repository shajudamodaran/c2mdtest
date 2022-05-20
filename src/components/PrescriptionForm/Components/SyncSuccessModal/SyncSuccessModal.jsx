import React from 'react'
import { CompletedGreen } from '../../../../assets/Logos/Icons'
import './syncsuccessmodal.css'

function SyncSuccessModal({ state, setState, onOk }) {

    let handleOk = () => {

        onOk&&onOk()
        setState(false) 
        
    }


    return (

        <>
            {state ?

                <div className="modal-loader syncsuccessmodal" >
                    <div className="modal-body-prescription body">

                        <div className="modal-content-prescription content">
                            <CompletedGreen />
                            <span className='syncsuccessmodal-message'>Data updated successfully</span>
                        </div>

                        <div onClick={handleOk} className="syncsuccessmodal-footer">
                            OK
                        </div>


                    </div>




                </div> : null}
        </>

    )
}

export default SyncSuccessModal
