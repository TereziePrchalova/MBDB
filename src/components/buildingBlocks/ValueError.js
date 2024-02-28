import CustomField from "./CustomField";
import FormWrapper from "./FormWrapper";
import OptionInput from "./OptionInput";


function ValueError( {colorSchema, name} ) {

    const ErrorOptions = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
    ];

  return (
    <>    
        <div className='flex'>
            <FormWrapper 
                headline='Value error'
                tooltipHeader='The expected error of the result in terms of a 95 % confidence interval'>
                <div className="flex">
                    <div className="mr-3">
                        <CustomField
                            name={name}
                            fieldName='lower_error'
                            type='number'
                            label='Min'
                            tooltip='The lower error, i.e. the number that should be added to the value to get the upper bound of the 95 % confidence interval. The same unit as the value being described is assumed. If relative errors are provided, please provide it in fractional form (e.g.  0.01 for 1 %)'
                        />
                    </div>
                    <div className="mr-3 my-auto">
                        &#8211;
                    </div>
                    <div>
                        <CustomField
                            name={name}
                            fieldName='upper_error'
                            type='number'
                            label='Max'
                            tooltip='The upper error, i.e. the number that should be added to the value to get the upper bound of the 95 % confidence interval. The same unit as the value being described is assumed. If relative errors are provided, please provide it in fractional form (e.g.  0.01 for 1 %)'
                        />
                    </div>
                    <div className="mx-3">
                        <CustomField
                            name={name}
                            fieldName='error_level'
                            type='number'
                            label='Error level'
                        />
                    </div>
                    <div>
                        <OptionInput
                            name={name}
                            fieldName='errors_are_relative'
                            options={ErrorOptions}
                            label='Errors are relative'
                            tooltip='True if the error values should be interpreted as relative errors (fractional uncertainty)'
                        />
                    </div>
                </div>
            </FormWrapper>

        </div>
    </>
  );
}

export default ValueError;