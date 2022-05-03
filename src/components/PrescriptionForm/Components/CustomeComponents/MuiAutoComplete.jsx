import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete,{ createFilterOptions }  from '@mui/material/Autocomplete';
import { FormControl, InputLabel } from '@mui/material';
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { BootstrapInput } from './MuiSelect';



const useStyles = makeStyles((theme) => ({

  'input': {
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'blue !important',
      color: 'rgb(119, 119, 119)!important',
      opacity: '1 !important',
      fontSize: "14px !important"
    }
  },

  root: {

    "& .css-16awh2u-MuiAutocomplete-root": {
      width: "200px"

    },
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
      // Default transform is "translate(14px, 20px) scale(1)""
      // This lines up the label with the initial cursor position in the input
      // after changing its padding-left.
      transform: "translate(34px, 20px) scale(1);",

    }
  },
  inputRoot: {
    color: "purple",
    backgroundColor: "white",
    padding: '0px',
    fontSize: "14px",



    // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      // Default left padding is 6px
      paddingLeft: 0,

      margin: "0px",
      padding: 0,
      fontSize: "14px"


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


const usePlaceholderStyles = makeStyles(theme => ({

  '.MuiAutocomplete-root': {
    borderRadius: 4,
    backgroundColor: 'red'

  },

  noBorder: {
    border: "none",
  },
  customTextField: {
    "& input::placeholder": {
      fontSize: "20px !important",
      opacity: 1
    }
  },
  'input-label': {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '100%',
    color: 'red',
  },

  'input': {
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'blue'
    }
  }

}));

const Placeholder = ({ children }) => {
  const classes = usePlaceholderStyles();
  return <div className={classes.placeholder}>{children}</div>;
};


function MuiAutoComplete({ value, data, name, onChange, id, placeholder, isObject }) {

  const classes = useStyles();
  const [answer, setAnswer] = React.useState("");


  const Pop = props => {
    const { className, anchorEl, style, ...rest } = props
    const bound = anchorEl.getBoundingClientRect()
    return <div {...rest} style={{
      position: 'absolute',
      zIndex: 9999,
      width: bound.width
    }} />
  }

  let handleOnachange = (e, values) => {

   onChange({ data: values, id, key: name }) 

  }

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option,
  });

  // const filterOptions = createFilterOptions({
  //   // matchFrom: 'start',
  //   stringify: (option) => option, // make it one for it
  // });



  return (

    <Autocomplete
      // classes={{ notchedOutline: classes.input }}
      popoverProps={{ style: { width: 'auto' } }}
      style={{
        minWidth: 150,
        width: "100%"
      }}
      value={value}
      filterOptions={data?filterOptions:null}
      onChange={handleOnachange}
      classes={classes}
      id="combo-box-demo"
      options={data ? data : null}
      renderInput={(params) => {


        return (
          <TextField
            InputProps={{ classes: { input: classes['input'] } }}
            {...params}
            placeholder={placeholder}
          />
        )
      }}
    />

  )
}

export default MuiAutoComplete
