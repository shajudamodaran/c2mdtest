import { Select } from 'antd';
import React, { useState } from 'react'

function CustomSelect({ values, name }) {

    let [selected, setSelected] = useState(null)

    const { Option } = Select;

    function onChange(value) {
        setSelected(value)
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }



    return (
        <Select
            showSearch
            style={{ width: "max-content"}}
            placeholder={name?name:"Select"}
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >

            {
                values!= null ?

                    values.map((obj,key) => {
                        return (
                            <Option key={key} value={obj}>{obj}</Option>
                        )
                    })


                    : null
            }

        </Select>
    )
}

export default CustomSelect
