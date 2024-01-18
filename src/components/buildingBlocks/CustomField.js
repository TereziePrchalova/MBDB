import { useField } from 'formik';

function CustomField( {label, name, fieldName, type, colorSchema}) {
    const [field, meta, helpers] = useField(`${name}.${fieldName}`);

    const nameTextField=`${name}.${fieldName}`

    const handleFocusChange = (focused) => {
      helpers.setTouched(focused);
    };

  return (
    <>
        <div className={`${colorSchema === 'light' ? 'bg-primary' : 'bg-white'} rounded-xl relative w-[7rem]`}>
            <label
                htmlFor={nameTextField}
                className={`absolute z-0 transition-all ${meta.touched || meta.value ? 'text-12px top-[4px] left-[8px]' : 'top-[27%] left-[10px] text-16px'}`}
            >
                {label}
            </label>
            <input
                {...field}
                className='bg-transparent relative z-10 rounded-xl text-16px pt-5 pb-1 p-2 w-[7rem]'
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

export default CustomField;