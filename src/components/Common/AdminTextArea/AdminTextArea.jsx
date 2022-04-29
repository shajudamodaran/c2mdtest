import { Input } from 'antd';
import React, { useEffect, useState } from 'react'
const { TextArea } = Input;


function AdminTextArea({value,element,onBlur}) {

    let[_value,setValue]=useState(null)


    useEffect(() => {

        if(value)
        {
            setValue(value)
        }
     
    }, [value])
    

    return (
        <TextArea
            onChange={(e)=>{setValue(e.target.value)}}
            value={_value!=""?_value:"-"}
            onBlur={(e) => { onBlur(element.appointmentId, e) }}
            rows={1} />

    )
}

export default AdminTextArea