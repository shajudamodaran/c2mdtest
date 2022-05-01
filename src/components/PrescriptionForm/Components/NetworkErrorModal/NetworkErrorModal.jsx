import React from 'react'
import { RefreshIcon } from '../../Icons/Icons'

function NetworkErrorModal({ state, setState, refresh }) {
    return (

        <>
            {state ?

                <div className="modal" >
                    <div className="modal-body">
                        <div className="modal-content">
                            Network Issue, Please try again.
                        </div>

                        <div className="modal-buttons" style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <button className='modal-ok-btn' onClick={() => { refresh() }}>Ok</button>
                        </div>
                    </div>
                </div> : null}
        </>

    )
}

export default NetworkErrorModal
