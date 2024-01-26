import ArrayField from "../buildingBlocks/ArrayField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import CustomField from "../buildingBlocks/CustomField";

function FundingReference( { name, values } ) {

  return (
    <>
        <ArrayField
            name={name}
            values={values}
            label='Funding reference'
            fieldName='funding_reference'
            renderChild={({ arrayName, index }) => (
                <FormWrapper headline={`Funding reference ${index + 1}`}>
                    <CustomField
                        name={`${arrayName}.${index}`}
                        index={index}
                        label='funding reference'
                        fieldName='funding_reference'
                    />
                </FormWrapper>
            )}
        />
    </>
  );
}

export default FundingReference;