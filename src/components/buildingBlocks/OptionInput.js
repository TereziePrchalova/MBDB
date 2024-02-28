import React from 'react';
import { useField } from 'formik';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function OptionInput({ label, name, fieldName, options, colorSchema, width, onOptionChange, tooltip}) {
  const nameOptionField = `${name}.${fieldName}`;
  const [field, meta, helpers] = useField(nameOptionField);

  
  const handleChange = (event) => {
    const value = event.target.value;
    helpers.setValue(event.target.value);
    if (onOptionChange) {
      onOptionChange(value);
    }
  };

  return (
    <div className='flex'>
      <Box className={`${width} rounded-lg relative`} sx={{ minWidth: 195 }}>
        <FormControl fullWidth>
          <InputLabel id={nameOptionField} htmlFor={nameOptionField}>
            {label}
          </InputLabel>
          <Select
            {...field}
            labelId={nameOptionField}
            sx={{
              "& .MuiInputLabel-root": { color: '#034459' },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "#034459" },
              },
            }}
            id={nameOptionField}
            name={nameOptionField}
            value={field.value || ''}
            label={label}
            onChange={handleChange}
            size="small"
            error={meta.touched && !!meta.error}
            MenuProps={{
              sx: {
                "& .MuiMenuItem-root": {
                  color: "#034459", // text color
                  "&:hover": {
                    backgroundColor: "#e3f2fd", // background color on hover
                  },
                },
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value} >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {tooltip ?
        <div className='ml-1 -mt-1'>
          <Tooltip title={tooltip} arrow>
            <HelpOutlineIcon fontSize="smaller"/>
          </Tooltip>
        </div>
        :
        <div className='w-5'>
        </div>
      }
    </div>
  );
}

export default OptionInput;