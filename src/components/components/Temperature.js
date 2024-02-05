import React from 'react';
import ValueUnit from '../buildingBlocks/ValueUnit';
import FormWrapper from '../buildingBlocks/FormWrapper';

function Temperature( {name} ) {

  const unitOptions = [
    { value: 'K', label: 'K' },
    { value: '°C', label: '°C' },
    { value: '°F', label: '°F' },
  ];

  return (
    <FormWrapper headline='Temperature'>
        <div>
          <ValueUnit options={unitOptions} name={name}/>
        </div>
    </FormWrapper>
  );
}

export default Temperature;