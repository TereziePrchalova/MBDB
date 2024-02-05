import FormWrapper from '../buildingBlocks/FormWrapper';
import CustomField from '../buildingBlocks/CustomField';

function Location( { name } ) {

  return (
    <>
        <FormWrapper headline='Location'>
            <div className='flex'>
                <div className='mr-3'>
                    <CustomField
                        name={name}
                        label='Latitude'
                        fieldName='latitude'
                    />
                </div>
                <div>
                    <CustomField
                        name={name}
                        label='Longitude'
                        fieldName='longitude'
                    />
                </div>
            </div>
        </FormWrapper>
    </>
  );
}

export default Location;