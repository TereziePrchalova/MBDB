import CustomField from "../buildingBlocks/CustomField";
import Protocol from "../buildingBlocks/Protocol";
import ArrayField from "../buildingBlocks/ArrayField";
import FormWrapper from "../buildingBlocks/FormWrapper";

function Modification( { name, values } ) {

  return (
    <>
        <div className="flex mb-3">
            <div className="mr-3">
                <CustomField
                    name={name}
                    fieldName='position'
                    label='Position'
                    tooltip='The position where the modification occurs'
                />
            </div>
            <div>
                <CustomField
                    name={name}
                    fieldName='modification'
                    label='Modification'
                    tooltip='The common name/type of the modification'
                />
            </div>
        </div>
        <div>
            <ArrayField
                name={name}
                values={values}
                label='Protocol'
                fieldName='protocol'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        headline={`Protocol ${index + 1}`}
                        tooltipHeader='List of steps that led to the modification taking place'
                    >
                        <Protocol
                            name={`${arrayName}.${index}`}
                            label={`${index + 1}`}
                            fieldName='protocol'
                        />
                    </FormWrapper>
                )}
            />
        </div>
    </>
  );
}

export default Modification;