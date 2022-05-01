import React from 'react'

function FailiureModal({ state,setState }) {
    return (

        <>
            {state ?

                <div className="modal" >
                    <div className="modal-body">
                        <div className="modal-content">
                        Prescription already saved. No changes found
                        </div>

                        <div className="modal-buttons" style={{width:"100%",display:"flex", flexDirection:"row", justifyContent:"center"}}>
                            <button className='modal-ok-btn' onClick={() => { setState(false) }}>Ok</button>
                        </div>
                    </div>
                </div> : null}
        </>

    )
}

export default FailiureModal
