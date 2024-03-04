import CustomField from "../buildingBlocks/CustomField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import OptionField from "../buildingBlocks/OptionField";

function RawDataFiles( { name } ) {

  const originatesFromOptions = [
    { value: 'Instrument software', label: 'Instrument software' },
    { value: 'User', label: 'User' },
    { value: 'MBDB', label: 'MBDB' },
  ];

  const contentTypeOptions = [
    { value: 'Text', label: 'Text' },
    { value: 'Binary', label: 'Binary' },
    { value: 'Text and binary', label: 'Text and binary' },
  ];

  const contextOptions = [
    { value: 'Raw measurement data', label: 'Raw measurement data' },
    { value: 'Derived measurement data', label: 'Derived measurement data' },
    { value: 'Quality control report', label: 'Quality control report' },
  ];

  return (
    <>
      <FormWrapper headline='Raw data files'>
        <div className="mb-3">
          <CustomField
            name={name}
            type='file'
            fieldName='file'
            width='w-[25rem]'
          />
        </div>
        <div className="mb-3">
          <CustomField
            name={name}
            fieldName='name'
            label='Name'
            width='w-[25rem]'
          />
        </div>
        <div className="mb-3">
          <OptionField
            name={name}
            fieldName='content_type'
            options={contentTypeOptions}
            label='Content_type'
            width='w-[25rem]'
          />
        </div>
        <div className="mb-3">
          <OptionField
            name={name}
            fieldName='context'
            options={contextOptions}
            label='Context'
            width='w-[25rem]'
          />
        </div>
        <div className="mb-3">
          <OptionField
            name={name}
            options={originatesFromOptions}
            label='Originates from'
            fieldName='originates_from'
            width='w-[25rem]'
          />
        </div>
        <div className="mb-3">
          <CustomField
            name={name}
            fieldName='size'
            label='Size'
            type='number'
            width='w-[25rem]'
          />
        </div>
        <div className="mb-3">
          <CustomField
            name={name}
            fieldName='description'
            label='description'
            width='w-[25rem]'
          />
        </div>
        <div className="mb-3">
          <CustomField
            name={name}
            fieldName='recommended_software'
            label='Recommended software'
            width='w-[25rem]'
          />
        </div>
        <div className="mb-3">
          <CustomField
            name={name}
            fieldName='processing_steps'
            label='Processing steps'
            width='w-[25rem]'
          />
        </div>
      </FormWrapper>
    </>
  );
}

export default RawDataFiles;