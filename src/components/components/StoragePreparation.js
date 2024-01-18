import CustomField from '../buildingBlocks/CustomField';
import FormWrapperRequired from '../buildingBlocks/FormWrapperRequired';

function StoragePreparation( {colorSchema, name} ) {

  return (
    <>
        <FormWrapperRequired colorSchema={colorSchema} headline='Storage preparation'>
            <div className='flex'>
                <div className='mr-3'>
                    <CustomField
                        name={name}
                        label='Name'
                        fieldName='name'
                        width='w-[10rem]'
                    />
                </div>
                <div>
                    <CustomField
                        name={name}
                        label='Description'
                        fieldName='description'
                        width='w-[37rem]'
                    />
                </div>
            </div>
        </FormWrapperRequired>
    </>
  );
}

export default StoragePreparation;