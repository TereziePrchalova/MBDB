import FormWrapper from "../buildingBlocks/FormWrapper";
import ArrayFieldFirstElementRequired from "../buildingBlocks/ArrayFieldFirstElementRequired";
import ChemicalEnvironment from "../chemicalEnvironment/ChemicalEnvironment";

function ChemicalEnvironmentTab( { name, values} ) {

    return (
      <>
        <div>
            <div>
                <ArrayFieldFirstElementRequired 
                    name={name}
                    values={values}
                    label="Chemical environment"
                    fieldName='chemical_environment'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper headline={`Chemical environment ${index + 1}`}>
                            <div>
                                <ChemicalEnvironment
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
  
  export default ChemicalEnvironmentTab;