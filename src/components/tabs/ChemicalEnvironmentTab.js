import FormWrapper from "../buildingBlocks/FormWrapper";
import ArrayFieldFirstElementRequired from "../buildingBlocks/ArrayField";
import ChemicalEnvironment from "../chemicalEnvironment/ChemicalEnvironment";

function ChemicalEnvironmentTab( { name, values} ) {

    return (
      <>
        <div className="-mt-3">
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
      </>
    );
  }
  
  export default ChemicalEnvironmentTab;