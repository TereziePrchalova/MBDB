import FormWrapper from "../buildingBlocks/FormWrapper";
import ArrayField from "../buildingBlocks/ArrayField";
import ChemicalEnvironment from "../chemicalEnvironment/ChemicalEnvironment";
import UseDefault from "../buildingBlocks/UseDefault";

function ChemicalEnvironmentTab( { name, values} ) {

    const fieldName = 'chemical_environment'
    UseDefault(values, `${name}.${fieldName}`, [{}] );

    return (
      <>
        <div className="-mt-3">
            <ArrayField
                name={name}
                values={values}
                label="Chemical environment"
                required={true}
                fieldName={fieldName}
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