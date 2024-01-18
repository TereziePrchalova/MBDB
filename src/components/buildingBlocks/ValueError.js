import { Field } from "formik";
import CustomField from "./CustomField";
import OptionInput from "./OptionInput";


function ValueError( {colorSchema, name} ) {

    const ErrorOptions = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
    ];

  return (
    <>    
        <div className='flex'>
            <div className='flex mr-4'>
                <div className='mr-2 my-auto'>Value error</div>
                <label className="my-auto">
                    <Field className='mt-[0.1rem] mr-1' type="checkbox" name={`${name}.data_not_provided`} />
                    Not available
                </label>
            </div>

            <div className="flex">
                <div>
                    <CustomField name={name} fieldName='lower_error' type='number' label='Min' width='w-[7rem]' />
                </div>
                <div className="mx-3 my-auto">
                    --
                </div>
                <div>
                    <CustomField name={name} fieldName='upper_error' type='number' label='Max' width='w-[7rem]' />
                </div>
                <div className="mx-3">
                    <CustomField name={name} fieldName='error_level' type='number' label='Error level' width='w-[7rem]' />
                </div>
                <div>
                    <OptionInput name={name} fieldName='errors_are_relative' options={ErrorOptions} label='Errors are relative' width='w-[10rem]' />
                </div>
            </div>
        </div>
    </>
  );
}

export default ValueError;