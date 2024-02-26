import ArrayField from "../buildingBlocks/ArrayField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import Contact from "../buildingBlocks/Contact";

function Depositors( {name, values} ) {

  return (
    <>
        <div className="mb-2">
            <FormWrapper
                headline='Depositor'
                tooltipHeader='The person who made the deposition to MBDB'
            >
                <Contact name={`${name}.depositor`} values={values} />
            </FormWrapper>
        </div>
        <div className="mb-2">
            <FormWrapper 
                headline='Principal Contact'
                tooltipHeader='The person responsible for the record and the one to contact for inquiries, would typically be the principle investigator group leader, or laboratory head'
            >
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
                        />
                    </FormWrapper>
                )}
            />
        </div>
    </>
  );
}

export default Depositors;