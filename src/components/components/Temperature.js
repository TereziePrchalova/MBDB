import React from 'react';
import ValueUnit from '../buildingBlocks/ValueUnit';
import OptionInput from '../buildingBlocks/OptionInput';
import FormWrapper from '../buildingBlocks/FormWrapper';
import ValueError from '../buildingBlocks/ValueError';

function Temperature( {name} ) {

  const unitOptions = [
    { value: 'K', label: 'K' },
    { value: '°C', label: '°C' },
    { value: '°F', label: '°F' },
  ];

  const operationalOptions = [
    { value: 'room_temperature', label: 'Room temp.' },
    { value: 'on_ice', label: 'On ice' },
    { value: 'other', label: 'Other' },
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
    <FormWrapper headline='Temperature'>
        <div>
            <div className='flex mb-2'>
                <div>
                    <ValueUnit options={unitOptions} name={name} width='w-[7rem]'/>
                </div>
                <div className='flex'>
                <div>
                    <OptionInput 
                        options={operationalOptions}
                        name={name}
                        label='Operational value'
                        fieldName='operational_value'
                        width='w-[10rem]'
                    />
                </div>
                <div className='mx-3'>
                    <OptionInput 
                        options={obtainedOptions}
                        name={name}
                        label='Obtained by'
                        fieldName='obtained_by'
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
                <ValueError name={`${name}.value_error`} />
            </div>
        </div>
    </FormWrapper>
  );
}

export default Temperature;