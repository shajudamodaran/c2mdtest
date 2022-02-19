import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './consultation.css'

function ConsultationModal({ state, setState}) {

    const history = useHistory();


   
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
                                <button className='c-modal-cancel-btn btn dialog-btn filled green px-4 bootbox-accept' onClick={()=>{setState(!state)}}>OK</button>
                               
                            </div>
                        </div>
                    </div> : null
            }
        </>
    )
}

export default ConsultationModal