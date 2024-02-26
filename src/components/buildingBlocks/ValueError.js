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
            <div className='flex mr-3'>
                <div className='mr-2 my-auto'>Value error</div>
            </div>

            <div className="flex">
                <div>
                    <CustomField
                        name={name}
                        fieldName='lower_error'
                        type='number'
                        label='Min'
                        width='w-[7rem]'
                        tooltip='The lower error, i.e. the number that should be subtracted from the value to get the lower bound. The same unit as the value being described is assumed, if relative errors are provided, please provide it in fractional form (e.g.  0.01 for 1 %)'
                    />
                </div>
                <div className="ml-2 mr-3 my-auto">
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