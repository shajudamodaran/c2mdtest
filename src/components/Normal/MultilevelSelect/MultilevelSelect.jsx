import React from 'react'

import { Select, Radio } from 'antd';
import { LocalLaundryServiceSharp } from '@mui/icons-material';

const { Option } = Select;

function MultilevelSelect({ name, values }) {

    const [size, setSize] = React.useState('default');



    function handleChange(value) {
        console.log(`Selected: ${value}`);
    }

    const SelectSizesDemo = () => {


        const handleSizeChange = e => {
            setSize(e.target.value);
        };

    }



    return (
        <Select
            mode="tags"
            placeholder={name ? name : "Please select"}
            onChange={handleChange}
            style={{ width: '100%', minWidth: "120px" }}
            size={size}
        >
            {values != null ?

                values.map((obj, key) => {
                    return (
                        <Option key={obj}>{obj}</Option>
                    )
                })


                : null}
        </Select>
    )
}

export default MultilevelSelect
