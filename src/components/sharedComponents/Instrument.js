import FormWrapper from '../buildingBlocks/FormWrapper';
import CustomField from '../buildingBlocks/CustomField';

function Instrument( {name} ) {

  return (
    <>
        <FormWrapper headline='Instrument' tooltip='Information about the instrument being used to collect (measure) the raw data annotated by this record'>
            <div className='flex'>
                <div>
                    <CustomField
                        colorSchema='light'
                        name={name}
                        label='Instrument'
                        fieldName='id'
                        tooltip='The name of the instrument as provided by the manufacturer'
                    />
                </div>
            </div>
        </FormWrapper>
    </>
  );
}

export default Instrument;