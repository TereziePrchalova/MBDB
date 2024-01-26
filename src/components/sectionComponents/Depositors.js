import PrincipalContact from "../components/PrincipalContact";
import ArrayField from "../buildingBlocks/ArrayField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import Contact from "../buildingBlocks/Contact";
import CustomField from "../buildingBlocks/CustomField";

function Depositors( {name, values} ) {

  return (
    <>
        <div className="mb-2">
            <FormWrapper headline='Depositor'>
                <Contact name={`${name}.depositor`} values={values} />
            </FormWrapper>
        </div>
        <div className="mb-2">
            <FormWrapper headline='Principal Contact'>
                <Contact name={`${name}.principal_contact`} values={values} />
            </FormWrapper>
        </div>
        <div>
            <ArrayField
                name={name}
                values={values}
                label="Contributor"
                fieldName='contributors'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper headline={`Contributor ${index + 1}`}>
                        <Contact
                            name={`${arrayName}.${index}`}
                            values={values}
                            fieldName='contributors'
                        />
                    </FormWrapper>
                )}
            />
        </div>
    </>
  );
}

export default Depositors;