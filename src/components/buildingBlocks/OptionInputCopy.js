import { useField } from 'formik';

function OptionInputCopy( {label, name, fieldName, options, colorSchema, width} ) {
  const [field, meta] = useField(`${name}.${fieldName}`);

  const nameOptionField=`${name}.${fieldName}`

  const valueOption = ''

  return (
    <>
      <div className={`${width} rounded-lg relative`}>
        <label 
          htmlFor={nameOptionField}
          className={`absolute z-0 transition-all ${meta.value ? 'text-12px top-[4px] left-[8px]' : 'top-[27%] left-[10px] text-16px'}`}
        >
          {label}
        </label>
        <select
          {...field}
          className={`border-dark border-[1px] bg-transparent relative z-10 rounded-lg text-16px pt-5 pb-1 p-2 ${width}`}
          name={nameOptionField}
          id={nameOptionField}
          as="select"
          required
          disabled={false}
          >
            <option hidden value={valueOption}>
            </option>
            {options.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
      </div>                 
    </>
  );
}

export default OptionInputCopy;