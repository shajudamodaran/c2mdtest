import React from 'react'
import { PuffLoader, SyncLoader } from 'react-spinners';
import ClipLoader from "react-spinners/ClipLoader";
import '../Modal/modal.css'

function LoaderModel({ state, setState }) {



    return (
        <>
            {state ?

                <div className="modal-loader" >
                    <div className="modal-body-prescription">
                        <div className="modal-content-prescription">
                            {/* when loader starts, cant able to call the API again even again clicks on the SAVE button */}
                            Saving Template. Please wait ...

                            
                        </div>

                        <div className="modal-buttons" style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>

                            <PuffLoader color={"black"} loading={true} size={50} />

                        </div>
                    </div>
                </div> : null}
        </>
    )
}

export default LoaderModel
