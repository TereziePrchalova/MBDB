import Input from '@mui/material/Input';
import { useState } from 'react';
import { useField } from 'formik';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useEffect } from 'react';
import { Typography } from '@mui/material';

async function submitFile(submissionUrl, file) {
  if (!file) return ({ code: 400, errors: ["No file selected."] });

  const fileName = file.name;

  // Submit the file name
  let resp = await fetch(submissionUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key: fileName })
  });

  if (!resp.ok) {
      return ({ code: resp.status, errors: [`Failed to submit file "${fileName}": ${resp.statusText}`] });
  }

  // Upload the file content
  const fileUploadUrl = `${submissionUrl.endsWith('/') ? submissionUrl.substring(0, submissionUrl.length - 1) : submissionUrl}/${fileName}`;
  resp = await fetch(`${fileUploadUrl}/content`, {
      method: 'PUT',
      body: file
  });

  if (!resp.ok) {
      return ({ code: resp.status, errors: [`Failed to upload content of file "${fileName}": ${resp.statusText}`] });
  }

  // Commit the result
  resp = await fetch(`${fileUploadUrl}/commit`, {
      method: 'POST'
  });

  if (!resp.ok) {
      return ({ code: resp.status, errors: [`Failed to commit uploaded file "${fileName}": ${resp.statusText}`] });
  }

  return (void 0);
}

function FileField({ name, fieldName, tooltip, width, required }) {
  const nameCustomField = fieldName !== undefined ? `${name}.${fieldName}` : `${name}`;
  const [field, meta, helpers] = useField(nameCustomField);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const fileURL = URL.createObjectURL(file);
    console.log(file.name);
    console.log(fileURL, 'Fillle url')
    helpers.setValue(file);
    setSelectedFile(file);
  };

  useEffect(() => {
    console.log('Selected file:', selectedFile);
  }, [selectedFile]);

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
              *
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