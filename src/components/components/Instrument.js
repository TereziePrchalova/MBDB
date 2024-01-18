import FormWrapperRequired from '../buildingBlocks/FormWrapperRequired';
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
        <FormWrapperRequired colorSchema='light' headline='Instrument'>
            <div className='flex'>
                <div>
                    <CustomField
                        colorSchema='light'
                        name={name}
                        label='Name'
                        fieldName='name'
                        width='w-[7rem]'
                    />
                </div>
                <div className='mx-3'>
                    <OptionInput
                        colorSchema='light'
                        options={manufacturersOptions}
                        name={name}
                        label='Manufacturer'
                        fieldName='manufacturer'
                    />
                </div>
                <div>
                    <CustomField
                        colorSchema="light"
                        name={name}
                        label='Model'
                        fieldName='model'
                        width='w-[7rem]'
                    />
                </div>
            </div>
        </FormWrapperRequired>
    </>
  );
}

export default Instrument;