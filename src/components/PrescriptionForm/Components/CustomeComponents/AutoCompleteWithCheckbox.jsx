
import { Select } from 'antd'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SET_SELECTED_DOCTORS, UPDATE_REDUX_PRESCRIPTION } from '../../../../actions/type';

function AutoCompleteWithCheckbox(props) {

  let { data, setSelected, ...other } = props

  const { Option } = Select;

  let [_data, setData] = useState(data)
  let [options, setOptions] = useState([])
  const [value, setValue] = React.useState([]);

  let dispatch = useDispatch()
  const { selectedDoctors, doctorsList } = useSelector((state) => state?.presctiptionFormReducer)



  let createOptionObject = (para_data) => {

    if (para_data.length > 0) {

      let _options = []

      for (let i = 0; i<para_data.length; i++) {

        _options.push({
          label: `${para_data[i].doctorName}`,
          value: para_data[i].doctorId,
        });
      }

      return(_options);

    }


  }



  const selectProps = {
    mode: 'multiple',
    style: {
      width: '230px',
    },
    placeholder: 'Select doctor',
    maxTagCount: 'responsive',
  };


  let handleOnchange = (newValue) => {

    console.log(newValue);

   

    dispatch({
      type: SET_SELECTED_DOCTORS,
      payload: newValue
    });

    // setValue(newValue);


  }



  return (
    <Select value={selectedDoctors} options={ createOptionObject(doctorsList)} onChange={(e) => { handleOnchange(e) }} getPopupContainer={trigger => trigger.parentNode} {...other} {...selectProps} />
  )
}

export default AutoCompleteWithCheckbox