import React from 'react';
import { Dropdown } from "react-bootstrap";
import Style from './CustomDropDown.module.scss';

const CustomDropDown = ({DataItem,onClick,selectedData,error,defaultPlaceH}) => {
    return (
        <Dropdown className={`${Style.CustomDropDown}`}>
            <Dropdown.Toggle className={error&&Style.error} id="dropdown-basic">
            {defaultPlaceH?selectedData:<span>{selectedData}</span>}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {DataItem.map((item,index)=>{
                return (
                    <Dropdown.Item 
                    onClick={()=>{onClick(item)}}
                    >
                    {item}
                    </Dropdown.Item> 
                );
            })}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default CustomDropDown;