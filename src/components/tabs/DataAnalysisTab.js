import FormWrapper from "../buildingBlocks/FormWrapper";
import ArrayField from "../buildingBlocks/ArrayField";
import DataAnalysis from "../dataAnalysis/DataAnalysis";

function DataAnalysisTab( { name } ) {

    return (
      <>
        <div className="-mt-3">
            <ArrayField
                name={name}
                label="Data analysis"
                fieldName='data_analysis'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper headline={`Data analysis ${index + 1}`}>
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