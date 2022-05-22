import React from 'react'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { makeStyles, createStyles } from "@material-ui/core/styles";
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from 'moment'

import { Menu, Dropdown } from 'antd';





const useStyles = makeStyles((theme) => ({


    root: {
        '&.MuiOutlinedInput-root': {
            backgroundColor: "red !important"
        },

        "& .MuiInputBase-root": {
            padding: 0,
            "& .MuiButtonBase-root": {
                padding: 0,
                paddingLeft: 0,
            },
            "& .MuiInputBase-input": {
                backgroundColor: "white",
                padding: ".5rem .6rem",
                fontSize: "14.8px",
                minHeight: 28,
                cursor: "pointer",

            }
        }
    },
    inputRoot: {
        color: "purple",
        backgroundColor: "white",
        padding: '0px',

        '& .MuiFormControl-root MuiTextField-root': {

            backgroundColor: "red"

        },


        // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
        '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
            // Default left padding is 6px
            paddingLeft: 0,

            margin: "0px",
            padding: 0

        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "green",
            border: 0,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
            border: 0,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "purple",
            border: 0,
        }

    }


}));



function MuiDatePicker({ onChange, name, isMedTable, id, maxDate, minDate, placeholder, _value, error }) {

    const [value, setValue] = React.useState(null);
    const classes = useStyles();

    const menu = (
        <Menu>
            <Menu.Item onClick={() => { setValue(null) }} key="1">Clear date</Menu.Item>

        </Menu>
    );

    const handleChange = (newValue) => {


        console.log(newValue);

        if (isMedTable) {

            console.log(newValue, id, name);

            onChange({ data: convertDate(newValue), id, key: name })
            // setState(newValue);

        }
        else {

            // setState(newValue);
            onChange(name, convertDate(newValue))

        }


    };


    let convertDate = (para_date) => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const dateObj = new Date(para_date);
        const month = monthNames[dateObj.getMonth()];
        const day = String(dateObj.getDate()).padStart(2, '0');
        const year = dateObj.getFullYear();
        const output = day + '-' + month + '-' + year;

        return output
    }

    return (

        <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <Dropdown overlay={menu} trigger={['contextMenu']}>

                <DatePicker
                    error={error}
                    helperText={null}
                    autoOk
                    classes={classes}
                    InputProps={{
                        disableUnderline: true
                    }}
                    maxDate={maxDate}
                    minDate={minDate}
                    placeholder={placeholder}
                    variant="inline"
                    value={_value ? moment(_value) : null}
                    onChange={handleChange}
                    disableToolbar={false}
                    format={'dd-MMM-yyyy'}


                />
            </Dropdown>

        </MuiPickersUtilsProvider>
    )
}

export default MuiDatePicker
