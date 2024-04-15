import CustomField from "../buildingBlocks/CustomField";
import OptionField from "../buildingBlocks/OptionField";
import ArrayField from "../buildingBlocks/ArrayField";
import DataProcessingStep from "../sharedComponents/DataProcessingStep";
import FormWrapper from "../buildingBlocks/FormWrapper";

function RawDataFile( { name } ) {

  const originatesFromOptions = [
    { value: 'Instrument software', label: 'Instrument software' },
    { value: 'User', label: 'User' },
    { value: 'MBDB', label: 'MBDB' },
  ];

  const contextOptions = [
    { value: 'Raw measurement data', label: 'Raw measurement data' },
    { value: 'Derived measurement data', label: 'Derived measurement data' },
    { value: 'Quality control report', label: 'Quality control report' },
  ];

  return (
    <>
        <div className="mb-3">
          <CustomField
            name={name}
            type='file'
            fieldName='file'
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
            tooltip='What is the source of the file'
          />
        </div>
        <div className="mb-3">
          <ArrayField
              name={name}
              label='Context'
              fieldName='context'
              maxItems={1}
              tooltip='The context the file should be understood within (e.g. raw measurement data)'
              renderChild={({ arrayName, index }) => (
                <OptionField
                  name={`${arrayName}.${index}`}
                  options={contextOptions}
                  label='Context'
                  width='w-[25rem]'
                  tooltip='The context the file should be understood within (e.g. raw measurement data)'
                />
              )}
          />
        </div>
        <div className="mb-3">
          <ArrayField
              name={name}
              label='Description'
              fieldName='description'
              maxItems={1}
              tooltip='Short description of what the file contains'
              renderChild={({ arrayName, index }) => (
                <CustomField
                  name={`${arrayName}.${index}`}
                  label='description'
                  width='w-[25rem]'
                  tooltip='Short description of what the file contains'
                />
              )}
          />
        </div>
        <div>
          <ArrayField
              name={name}
              label='Recommended software'
              fieldName='recommended_software'
              maxItems={1}
              tooltip='The name of the software recommended for opening and working with the file'
              renderChild={({ arrayName, index }) => (
                <CustomField
                  name={`${arrayName}.${index}`}
                  label='Recommended software'
                  width='w-[25rem]'
                  tooltip='The name of the software recommended for opening and working with the file'
                />
              )}
          />
        </div>
        <ArrayField
          name={name}
          label='processing step'
          fieldName='processing_step'
          tooltip='List of the processing steps performed on the file before it was deposited (e.g. exported to xlsx)'
          renderChild={({ arrayName, index }) => (
              <FormWrapper
                  colorSchema='light'
                  headline={`Processing step ${index + 1}`}
                  tooltip='List of the processing steps performed on the file before it was deposited (e.g. exported to xlsx)'
              >
                  <DataProcessingStep
                      name={`${arrayName}.${index}`}
                  />
              </FormWrapper>
          )}
        />
    </>
  );
}

export default RawDataFile;