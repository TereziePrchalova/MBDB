import { useField } from 'formik';

function CustomFieldCopy( {label, name, fieldName, type, colorSchema, width}) {
    const [field, meta, helpers] = useField(`${name}.${fieldName}`);

    const nameTextField=`${name}.${fieldName}`

    const handleFocusChange = (focused) => {
      helpers.setTouched(focused);
    };

  return (
    <>
        <div className={`rounded-lg relative ${width}`}>
            <label
                htmlFor={nameTextField}
                className={`absolute z-0 transition-all ${meta.touched || meta.value ? 'text-12px top-[4px] left-[8px]' : 'top-[27%] left-[10px] text-16px'}`}
            >
                {label}
            </label>
            <input
                {...field}
                className={`border-dark border-[1px] bg-transparent relative z-10 rounded-lg text-16px pt-5 pb-1 p-2 ${width}`}
                id={nameTextField}
                name={nameTextField}
                type={type}
                disabled={false}
                value={field.value || ''}
                required
                onFocus={() => handleFocusChange(true)}
                onBlur={() => handleFocusChange(false)}
            />
        </div>
    </>
  );
}

export default CustomFieldCopy;