import CustomField from '../buildingBlocks/CustomField';
import FormWrapper from '../buildingBlocks/FormWrapper';
import OptionInput from '../buildingBlocks/OptionInput';

function RecordInformation( { name } ) {

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
                        width='w-[34rem]'
                        tooltip='Short descriptive title of the record'
                    />
                </div>
                <div className='mr-3'>
                    <OptionInput
                        options={accessRightsOptions}
                        name={name}
                        fieldName='access_rights'
                        label='Access rights'
                        width='w-[14rem]'
                        tooltip='The access rights to the uploaded files. There are three options, 1) "open access" where the files are accessible immediately when the deposition is published, 2) "embargoed access" where the files will only become available after a specified date, 3) "restricted access" where depositors are of the record are the only ones who has access'
                    />
                </div>
                <div>
                    <OptionInput
                        options={metadataAccessRightsOptions}
                        name={name}
                        fieldName='metadata_access_rights'
                        label='Metadata access rights'
                        width='w-[14rem]'
                        tooltip='The access rights to the metadata. Minimal metadata that includes title and depositors is accessible regardless of which type is chosen as it is required to obtain a DOI. There are three options, 1) "open access" where the complete metadata are accessible immediately when the deposition is published, 2) "embargoed access" where the files will only become available after a specified date, 3) "restricted access" where depositors are of the record are the only ones who has access'
                    />
                </div>
            </div>
        </FormWrapper>
    </>
  );
}

export default RecordInformation;
