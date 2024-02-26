import FormWrapper from "../buildingBlocks/FormWrapper";
import ArrayFieldFirstElementRequired from "../buildingBlocks/ArrayFieldFirstElementRequired";
import DataAnalysis from "../dataAnalysis/DataAnalysis";

function DataAnalysisTab( { name, values} ) {

    return (
      <>
        <div>
            <div>
                <ArrayFieldFirstElementRequired
                    name={name}
                    values={values}
                    label="Data analysis"
                    fieldName='data_analysis'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper headline={`Data analysis ${index + 1}`}>
                            <div>
                                <DataAnalysis
                                    name={`${arrayName}.${index}`}
                                    values={values}
                                />
                            </div>
                        </FormWrapper>
                    )}
                />
            </div>
        </div>
      </>
    );
  }
  
  export default DataAnalysisTab;