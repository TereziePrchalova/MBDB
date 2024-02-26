import CustomField from './CustomField';
import OptionInput from './OptionInput';
import MyContext from './MyContext';
import { useContext } from 'react';

function EntityInvolved( {name } ) {

    const { inputValue } = useContext(MyContext);

    const unitOptions = [
        { value: 'currently_out_off_service', label: 'Currently out off service' },
      ];

  return (
    <>
        <div className='flex'>
            <div className="mr-3">
                <OptionInput
                    name={name}
                    options={unitOptions}
                    fieldName='entity'
                    label='Entity'
                />
            </div>
            <div >
                <CustomField
                    name={name}
                    fieldName='copy_number'
                    label='Copy number'
                    tooltip='Number of copies of the entity that contribute to the result, -1 if unknown (e.g. if two individual copies of a polymer binds to another, the copy number would be 2)'
                />
            </div>
        </div>
    </>
  );
}

export default EntityInvolved;
