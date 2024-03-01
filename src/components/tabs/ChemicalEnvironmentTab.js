import FormWrapper from "../buildingBlocks/FormWrapper";
import ArrayField from "../buildingBlocks/ArrayField";
import ChemicalEnvironment from "../chemicalEnvironment/ChemicalEnvironment";
import UseDefault from "../buildingBlocks/UseDefault";
import { useFormikContext } from 'formik';

function ChemicalEnvironmentTab( { name } ) {

    const { values } = useFormikContext();

    const fieldName = 'chemical_environment'

    UseDefault(values, `${name}.${fieldName}`, [{}] );

    return (
      <>
        <div className="-mt-3">
            <ArrayField
                name={name}
                label="Chemical environment"
                required={true}
                fieldName={fieldName}
                renderChild={({ arrayName, index }) => (
                    <FormWrapper headline={`Chemical environment ${index + 1}`}>
                        <div>
                            <ChemicalEnvironment
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
  
  export default ChemicalEnvironmentTab;