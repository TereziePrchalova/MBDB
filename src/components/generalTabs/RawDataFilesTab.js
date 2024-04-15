import FormWrapper from "../buildingBlocks/FormWrapper";
import ArrayField from "../buildingBlocks/ArrayField";
import RawDataFile from "../rawDataFiles/RawDataFile";

function RawDataFilesTab( { name } ) {

    return (
      <>
        <div className="-mt-3">
            <ArrayField
                name={name}
                label="Raw data file"
                fieldName='raw_data_file'
                tooltip='Composition of the chemical environment (colloquially known as the buffer)'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        headline={`Raw data file ${index + 1}`}
                        tooltipHeader='Composition of the chemical environment (colloquially known as the buffer)'
                    >
                        <div>
                            <RawDataFile
                                name={`${arrayName}.${index}`}
                            />
                        </div>
                    </FormWrapper>
                )}
            />
        </div>
      </>
    );
  }
  
  export default RawDataFilesTab;