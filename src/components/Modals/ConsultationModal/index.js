import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './consultation.css'

function ConsultationModal({ state, setState}) {

    const history = useHistory();

    let handleClose = () =>{

        let close_msg="Your session has been disconnected."

        if(state==close_msg)
        {
            setState(!state)
            history.push("/dashboard");

        }
        else{

            setState(!state)

        }
    }


   
    return (
        <>
            {
                state ?

                    <div className="c-modal-loader" >
                        <div className="c-modal-body">
                            <div className="c-modal-content">
                        
                          {
                              state.split('\n')
                              .map(e => <div>{e}</div>)
                          }
                            </div>

                            <div className="c-modal-buttons">
                                <button className='c-modal-cancel-btn btn dialog-btn filled green px-4 bootbox-accept' onClick={handleClose}>OK</button>
                               
                            </div>
                        </div>
                    </div> : null
            }
        </>
    )
}

export default ConsultationModal