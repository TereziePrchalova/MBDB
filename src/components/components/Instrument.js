import FormWrapper from '../buildingBlocks/FormWrapper';
import OptionInput from '../buildingBlocks/OptionInput';
import CustomField from '../buildingBlocks/CustomField';

function Instrument( {name} ) {

    const manufacturersOptions = [
        { value: 'bio_rad', label: 'Bio-Rad' },
        { value: 'bruker', label: 'Bruker' },
        { value: 'cytiva', label: 'Cytiva' },
        { value: 'gatorbio', label: 'Gatorbio' },
        { value: 'ge_healthcare', label: 'GE Healthcare' },
        { value: 'nanotemper', label: 'Nanotemper' },
        { value: 'nicoya_life', label: 'Nicoya Life' },
        { value: 'sartorious', label: 'Sartorious' },
        { value: 'malvern_panalytical', label: 'Malvern Panalytical' },
        { value: 'refeyn', label: 'Refeyn' },
        { value: 'ta_instruments', label: 'TA Instruments' },
    ];

  return (
    <>
        <FormWrapper headline='Instrument' tooltipHeader='Information about the instrument being used to collect (measure) the raw data annotated by this record'>
            <div className='flex'>
                <div>
                    <CustomField
                        colorSchema='light'
                        name={name}
                        label='Name'
                        fieldName='name'
                        tooltip='The name of the instrument as provided by the manufacturer'
                    />
                </div>
                <div className='mx-3'>
                    <OptionInput
                        colorSchema='light'
                        options={manufacturersOptions}
                        name={name}
                        label='Manufacturer'
                        fieldName='manufacturer'
                        tooltip='Name of the manufacturer of the instrument used for raw data collection'
                    />
                </div>
            </div>
        </FormWrapper>
    </>
  );
}

export default Instrument;