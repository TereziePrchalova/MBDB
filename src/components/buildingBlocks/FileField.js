import Input from '@mui/material/Input';
import { useField, useFormikContext } from 'formik';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Typography } from '@mui/material';

function FileField({ name, fieldName, tooltip, width, required }) {
  const nameCustomField = fieldName !== undefined ? `${name}.${fieldName}` : `${name}`;
  const [field, meta ] = useField(nameCustomField);
  const {values, setFieldValue} = useFormikContext();

  const handleChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      console.log("File found");
      setFieldValue(`${name}.key`, file.name);
    }
  };

  return (
    <>
      <div className='flex'>
        <div className={`${width}`}>
          <Input
            type='file'
            className={`rounded-lg p-2 text-16px ${width}`}
            onChange={handleChange}
            size="small"
            error={meta.touched && !!meta.error}
          />
        </div>
        {required &&
          <div className='text-accent ml-1'>
            <Tooltip title={<Typography fontSize={13}>This field is required and cannot be left blank or unset</Typography>} arrow>
              <span>*</span>
            </Tooltip>
          </div>
        }
        {tooltip &&
          <div className='ml-1 -mt-1'>
            <Tooltip title={<Typography fontSize={13}>{tooltip}</Typography>} arrow>
              <HelpOutlineIcon fontSize="smaller"/>
            </Tooltip>
          </div>
        }
      </div>
    </>
  );
}

export default FileField;