import FormWrapper from "../../buildingBlocks/FormWrapper";
import ArrayField from "../../buildingBlocks/ArrayField";
import DataAnalysis from "../../sharedComponents/DataAnalysis";

function DataAnalysisTab( { name } ) {

    return (
      <>
        <div className="-mt-3">
            <ArrayField
                name={name}
                label="Data analysis"
                fieldName='data_analysis'
                tooltip='List of measurement where each step from each sensor is considered a single measurement'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        headline={`Data analysis ${index + 1}`}
                        tooltipHeader='List of measurement where each step from each sensor is considered a single measurement'
                    >
                        <div>
                            <DataAnalysis
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
  
  export default DataAnalysisTab;