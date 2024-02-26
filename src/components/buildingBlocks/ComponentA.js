import React, { useContext } from 'react';
import MyContext from './MyContext';
import CustomField from './CustomField';

const ComponentA = () => {
  const { setInputValue } = useContext(MyContext);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <CustomField name='name' label='Name' fieldName='name' className='' type="text" onChange={handleChange} />
    </div>
  );
};

export default ComponentA;