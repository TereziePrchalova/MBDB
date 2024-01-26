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

  return (
    <FormWrapper headline='Temperature'>
        <div>
          <ValueUnit options={unitOptions} name={name}/>
        </div>
    </FormWrapper>
  );
}

export default Temperature;