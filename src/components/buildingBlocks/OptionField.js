import React from "react";
import { useField } from "formik";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Tooltip } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Typography } from "@mui/material";

function OptionField({
  label,
  name,
  fieldName,
  options,
  width,
  tooltip,
  required,
}) {
  const nameOptionField =
    fieldName !== undefined ? `${name}.${fieldName}` : `${name}`;
  const [field, meta, helpers] = useField(nameOptionField);

  const currentValue =
    typeof field.value === "object" ? field.value.name : field.value || "";

  return (
    <div className="flex">
      <Box className={`${width} rounded-lg relative`} sx={{ minWidth: 195 }}>
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select
            {...field}
            value={currentValue}
            onChange={(event) => {
              const selectedOption = options.find(
                (option) => option.value === event.target.value
              );
              helpers.setValue(
                selectedOption.id !== undefined
                  ? { name: selectedOption.value, id: selectedOption.id }
                  : selectedOption.value
              );
            }}
            label={label}
            size="small"
            error={meta.touched && !!meta.error}
            sx={{
              //"& .MuiOutlinedInput-notchedOutline": {
              //  borderColor: "#034459",
              //},
              "& .MuiInputLabel-root": { color: "#034459" }, //styles the label
              color: "#034459",
              "&:hover": {
                borderColor: "#034459",
              },
            }}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value} id={option.id}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {required && (
        <div className="ml-1 text-accent">
          <Tooltip
            title={
              <Typography fontSize={13}>
                This field is required and cannot be left blank or unset
              </Typography>
            }
            arrow
          >
            <span>*</span>
          </Tooltip>
        </div>
      )}
      {tooltip && (
        <div className="ml-1 -mt-1">
          <Tooltip
            title={<Typography fontSize={13}>{tooltip}</Typography>}
            arrow
          >
            <HelpOutlineIcon fontSize="smaller" />
          </Tooltip>
        </div>
      )}
    </div>
  );
}

export default OptionField;
