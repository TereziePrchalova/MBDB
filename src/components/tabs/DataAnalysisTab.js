import FormWrapper from "../buildingBlocks/FormWrapper";
import ArrayField from "../buildingBlocks/ArrayField";
import DataAnalysis from "../dataAnalysis/DataAnalysis";
import UseDefault from "../buildingBlocks/UseDefault";

function DataAnalysisTab( { name, values} ) {

    const fieldName = 'chemical_environment'
    UseDefault(values, `${name}.${fieldName}`, [{}] );

    return (
      <>
        <div className="-mt-3">
            <ArrayField
                name={name}
                values={values}
                label="Data analysis"
                fieldName={fieldName}
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
      </>
    );
  }
  
  export default DataAnalysisTab;