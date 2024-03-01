import CustomField from './CustomField';
import OptionInput from './OptionInput';
import { useFormikContext, getIn } from 'formik';

function EntityInvolved( { name } ) {

      const { values } = useFormikContext()
      
      const entitiesValue = getIn(values, `general_parameters.entities_of_interest`)

      let unitOptions = [];

      if (entitiesValue && entitiesValue.length > 0) {
        unitOptions = entitiesValue.map(entity => ({
            value: entity.name,
            label: entity.name,
        }));
    } else {
        unitOptions = [{ label: 'Select Entity, if applicable' }];
    }

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
