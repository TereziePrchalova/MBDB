import FormWrapper from "../../buildingBlocks/FormWrapper";
import ArrayField from "../../buildingBlocks/ArrayField";
import DataAnalysis from "../dataAnalysis/DataAnalysis";

function DataAnalysisTab( { name } ) {

    return (
      <>
        <div className="-mt-3">
            <ArrayField
                name={name}
                label="Data analysis"
                fieldName='data_analysis'
                tooltip='The details of how data analysis was performed to obtain the result'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        headline={`Data analysis ${index + 1}`}
                        tooltip='The details of how data analysis was performed to obtain the result'
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