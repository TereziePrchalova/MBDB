import CustomField from '../buildingBlocks/CustomField';
import FormWrapper from '../buildingBlocks/FormWrapper';
import OptionInput from '../buildingBlocks/OptionInput';

function RecordInformation( {name} ) {

    const accessRightsOptions = [
        { value: 'open_access', label: 'Open access' },
        { value: 'embargoed_access', label: 'Embargoed access' },
        { value: 'restricted_access', label: 'Restricted access' },
    ];

    const metadataAccessRightsOptions = [
        { value: 'open_access', label: 'Open access' },
        { value: 'embargoed_access', label: 'Embargoed access' },
        { value: 'restricted_access', label: 'Restricted access' },
    ];

  return (
    <>
        <FormWrapper>
            <div className='flex'>
                <div className='mr-3'>
                    <CustomField
                        name={name}
                        fieldName='title'
                        label='Title'
                        width='w-[25rem]'
                    />
                </div>
                <div className='mr-3'>
                    <OptionInput
                        options={accessRightsOptions}
                        name={name}
                        fieldName='access_rights'
                        label='Access rights'
                        width='w-[14rem]'
                    />
                </div>
                <div>
                    <OptionInput
                        options={metadataAccessRightsOptions}
                        name={name}
                        fieldName='metadata_access_rights'
                        label='Metadata access rights'
                        width='w-[14rem]'
                    />
                </div>
            </div>
        </FormWrapper>
    </>
  );
}

export default RecordInformation;
