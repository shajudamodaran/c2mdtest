import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { BootstrapInput } from './MuiSelect';

const usePlaceholderStyles = makeStyles(theme => ({
    placeholder: {
        color: "#868686",
        color: 'rgb(119, 119, 119)!important',
        fontSize: "14.5px",
        margin: "0px"
    },

    root: {
        '&.MuiOutlinedInput-root': {
            backgroundColor: "red !important",

        },

        "& .MuiInputBase-root": {
            padding: 0,
            "& .MuiButtonBase-root": {
                padding: 0,
                paddingLeft: 0,
            },
            "& .MuiInputBase-input": {
                backgroundColor: "white",
                padding: ".8rem .6rem !important",
                minHeight: 30,
                cursor: "pointer",
                backgroundColor: "red !important",
                fontSize: "14px",

            }
        }
    },
}));

const Placeholder = ({ children }) => {
    const classes = usePlaceholderStyles();
    return <div className={classes.placeholder}>{children}</div>;
};



function MuiDropdown({ onChange, name, data, isMedTable, id, placeholder, value, style }) {

    const [answer, setAnswer] = React.useState("");

    let handleOnChange = (e) => {
        if (isMedTable) {
            console.log({ data: e.target.value, id: id, key: name });
            onChange({ data: e.target.value, id: id, key: name });
            // setAnswer(e.target.value)
        }

        else {
            onChange(name, e.target.value);
            // setAnswer(e.target.value)
        }
    }


    return (
        <Select
            style={style ? style : null}
            input={<BootstrapInput placeholder={placeholder} />}
            value={value}
            onChange={handleOnChange}
            displayEmpty
            inputProps={{ style: { fontSize: 20 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
            renderValue={
                value ? () => <span>{value}</span> : () => <Placeholder>{placeholder}</Placeholder>
            }
        >
            {
                data ?

                    data.map((element, key) => {
                        return (

                            <MenuItem key={key} value={element}>{element}</MenuItem>

                        )
                    })

                    : null
            }

        </Select>
    )
}

export default MuiDropdown
