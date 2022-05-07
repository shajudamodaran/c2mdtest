import React from 'react'

function SuccessModal({ state,setState,successMessage, isPreload, setEditMode }) {


    let handleOkClick =()=>{

        setState(false)

        if(isPreload)
        {
            setEditMode(false)
        }

    }


    return (

        <>
            {state ?

                <div className="modal-loader" >
                    <div className="modal-body-prescription">
                        <div className="modal-content-prescription">
                           {successMessage?successMessage:"Success"}
                        </div>

                        <div className="modal-buttons-prescription" style={{width:"100%",display:"flex", flexDirection:"row", justifyContent:"center"}}>
                            <button className='modal-ok-btn-prescription' onClick={handleOkClick}>Ok</button>
                        </div>
                    </div>
                </div> : null}
        </>

    )
}

export default SuccessModal
