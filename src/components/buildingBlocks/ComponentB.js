import React, { useContext } from 'react';
import MyContext from './MyContext';
import OptionInput from './OptionInput';

const ComponentB = () => {
  const { inputValue } = useContext(MyContext);

  const options = [
    { value: 'Add entity', label: 'Add entity' },
    { value: 'peptide_nucleic_acid', label: 'Peptide nucleic acid' },
  ];

  return (
    <div className='bg-black'>
      <select>
        <OptionInput  name='option' label='option' fieldName='option' option={options}/>
      </select>
      <div>
        {inputValue}
      </div>
    </div>
  );
};

export default ComponentB;