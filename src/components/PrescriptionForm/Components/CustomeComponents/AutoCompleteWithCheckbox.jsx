
import { Select } from 'antd'

import React, { useEffect, useState } from 'react'

function AutoCompleteWithCheckbox(props) {

  let { data,onChangeValue, ...other }=props

  const { Option } = Select;

  let [_data, setData] = useState(data)
  let [options, setOptions] = useState([])
  const [value, setValue] = React.useState(_data);

  useEffect(() => {

    setData([...data])
    setValue(data)

    let result=[]

    for (let i = 0; i < data.length; i++) {
        
      result.push({
        label: `${data[i]}`,
        value:data[i],
      });
    }

    setOptions(result)

  }, [data])


  

  const selectProps = {
    mode: 'multiple',
    style: {
      width: '230px',
    },
    placeholder: 'Select Item...',
    maxTagCount: 'responsive',
  };


  let handleOnchange=(newValue)=>{
   
    setValue(newValue);
    onChangeValue(newValue)
   
  }


  return (
    <Select value={value} onChange={(e)=>{handleOnchange(e)}} options={options} getPopupContainer={trigger => trigger.parentNode} { ...other} {...selectProps} />
  )
}

export default AutoCompleteWithCheckbox