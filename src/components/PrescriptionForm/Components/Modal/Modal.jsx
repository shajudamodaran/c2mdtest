import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_INVESTIGATION_TABLE_DATA, UPDATE_MEDICINE_TABLE_DATA, UPDATE_REDUX_PRESCRIPTION } from '../../../../actions/type'
import { DELETE_FLAG, INVESTIGATION_HEAD } from '../../Helpers/Constants'
// import { setInvestigationRedux, setMedicinesRedux, updateReduxData } from '../../Redux/Slice/SelectedDataSlice'
import './modal.css'

function Modal({ state, setState, data, setData, removeIndex, deletingFrom }) {

   const { investigationData, medicinesData } = useSelector((state) =>  state?.presctiptionFormReducer)

  


    const dispatch = useDispatch()

    let removeData = () => {

        //console.log(deletingFrom,investigationData);


        if (data) {

            if (deletingFrom===INVESTIGATION_HEAD) {

                let newResult = investigationData.filter((element,key) => { return (key !== removeIndex) })
                console.log("New removed array==>", newResult);
                dispatch({
                    type: UPDATE_INVESTIGATION_TABLE_DATA,
                    payload: newResult
                });
            }
            else {

                let newResult = medicinesData.filter((element) => { return (element.id !== removeIndex) })
                console.log("New removed array==>", newResult);
                dispatch({
                    type: UPDATE_MEDICINE_TABLE_DATA,
                    payload: newResult
                });
            }



        }

        setState(false)




    }


    let updateReduxSelect = ({ head, id, tittle, value }) => {

        dispatch(UPDATE_REDUX_PRESCRIPTION({ head, id, tittle, value }))

    }





    return (
        <>
            {
                state ?

                    <div className="modal-prescription" >
                        <div className="modal-body-prescription">
                            <div className="modal-content-prescription">
                                Do you want to delete this ?
                            </div>

                            <div className="modal-buttons-prescription">
                                <button className='modal-cancel-btn-prescription' onClick={() => { setState(false) }}>No</button>
                                <button className='modal-ok-btn-prescription' onClick={() => { removeData() }}>Yes</button>
                            </div>
                        </div>
                    </div> : null
            }
        </>
    )
}

export default Modal
