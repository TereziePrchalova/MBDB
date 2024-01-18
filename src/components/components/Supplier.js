import FormWrapper from '../buildingBlocks/FormWrapper';
import CustomField from '../buildingBlocks/CustomField';

function Supplier( {name} ) {

  return (
    <>
        <FormWrapper colorSchema='' headline='Supplier'>
            <div className='flex'>
                <div className='mr-3'>
                    <CustomField
                        name={name}
                        fieldName='name'
                        label='Name'
                        width='w-[10rem]'
                    />
                </div>
                <div>
                    <CustomField
                        name={name}
                        fieldName='catalog_number'
                        label='Catalog number'
                        type='number'
                        width='w-[10rem]'
                    />
                </div>
            </div>
        </FormWrapper>
    </>
  );
}

export default Supplier;
