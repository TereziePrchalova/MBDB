import TextField from '@mui/material/TextField';
import { useField } from 'formik';

function CustomField( {label, name, fieldName, type, colorSchema, index, width}) {

  const nameTextField = index !== undefined
  ? (fieldName !== undefined ? `${name}.${fieldName}[${index}]` : `${name}[${index}]`)
  : (fieldName !== undefined ? `${name}.${fieldName}` : `${name}`);
  
    const [field, meta] = useField(nameTextField);

  return (
    <>
        <div className={`${width}`}>
            <TextField
              {...field}
              className={`rounded-lg p-2 text-16px ${width}`}
              sx={{
                "& .MuiInputLabel-root": {color: '#034459'},//styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "#034459" },
                },
              }}
              id={nameTextField}
              label={label}
              name={nameTextField}
              type={type}
              value={field.value || ''}
              disabled={false}
              variant="outlined"
              size="small"
              error={meta.touched && !!meta.error}
            />
        </div>
    </>
  );
}

export default CustomField;