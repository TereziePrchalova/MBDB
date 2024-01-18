import ValueUnit from '../buildingBlocks/ValueUnit';
import ValueError from '../buildingBlocks/ValueError';
import FormWrapper from '../buildingBlocks/FormWrapper';
import OptionInput from '../buildingBlocks/OptionInput';

function Pressure( {name} ) {

    const unitOptions = [
        { value: 'Pa', label: 'Pa' },
        { value: 'kPa', label: 'kPa' },
        { value: 'MPa', label: 'MPa' },
        { value: 'Bar', label: 'Bar' },
        { value: 'mBar', label: 'mBar' },
        { value: 'atm', label: 'atm' },
        { value: 'Torr', label: 'Torr' },
        { value: 'PSI', label: 'PSI' },
        { value: 'mmHg', label: 'mmHg' },
        { value: 'inchHg', label: 'inchHg' },
    ];

    const obtainedOptions = [
        { value: 'Measurement', label: 'Measurement' },
        { value: 'Calculation', label: 'Calculation' },
        { value: 'Assumption', label: 'Assumption' },
        { value: 'other', label: 'Other' },
    ];

    const controlledOptions = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
    ];

  return (
    <>
        <FormWrapper headline='Pressure'>
            <div className='flex mb-2'>
                <div>
                    <ValueUnit options={unitOptions} name={name} width='w-[7rem]'/>
                </div>
                <div className='flex'>
                    <div className='mr-3'>
                        <OptionInput 
                            options={obtainedOptions} 
                            name={name} 
                            label='Obtained by' 
                            fieldName='obtained_by'
                            width='w-[10rem]'
                        />
                    </div>
                    <div>
                        <OptionInput 
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

export default Pressure;
