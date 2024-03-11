import ValueUnit from '../buildingBlocks/ValueUnit';
import ValueError from '../buildingBlocks/ValueError';
import FormWrapper from '../buildingBlocks/FormWrapper';
import OptionField from '../buildingBlocks/OptionField';

function Humidity( { name } ) {

    const unitOptions = [
        { value: '%', label: '%' },
        { value: 'g/m^3', label: 'g/m^3' },
        { value: 'oz/y^3', label: 'oz/y^3' },
    ];

    const obtainedOptions = [
        { value: 'Measurement', label: 'Measurement' },
        { value: 'Calculation', label: 'Calculation' },
        { value: 'Assumption', label: 'Assumption' },
        { value: 'Other', label: 'Other' },
    ];

    const controlledOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];

  return (
    <>
        <FormWrapper headline='Humidity'>
            <div className='flex mb-3'>
                <div>
                    <ValueUnit options={unitOptions} name={name} width='w-[7rem]' />
                </div>
                <div className='flex'>
                    <div className='mr-3'>
                        <OptionField
                            options={obtainedOptions}
                            name={name}
                            label='Obtained by'
                            fieldName='obtained_by'
                            width='w-[10rem]'
                        />
                    </div>
                    <div>
                        <OptionField
                            options={controlledOptions}
                            name={name}
                            label='Controlled'
                            fieldName='controlled'
                            width='w-[7rem]'
                        />
                    </div>
                </div>
            </div>
            <div>
                <ValueError name={`${name}.value_error`}/>
            </div>
        </FormWrapper>
    </>
  );
}

export default Humidity;