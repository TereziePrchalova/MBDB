import ArrayField from "../buildingBlocks/ArrayField";
import Contact from "../buildingBlocks/Contact";
import FormWrapper from "../buildingBlocks/FormWrapper";

function Contributors( {name, values} ) {

  return (
    <>
        <ArrayField
            name={name}
            values={values}
            label='contributor'
            fieldName='contributors'
            renderChild={({ name, index }) => (
                <FormWrapper>
                    <Contact name={name} values={values} />
                </FormWrapper>
            )}
        />
    </>
  );
}

export default Contributors;