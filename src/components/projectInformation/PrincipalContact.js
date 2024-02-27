import FormWrapper from "../buildingBlocks/FormWrapper";
import Contact from "../buildingBlocks/Contact";

function PrincipalContact({ name, values }) {
  return (
    <>
      <FormWrapper headline='Principal Contact'>
        <Contact name={name} values={values} />
      </FormWrapper>
    </>
  );
}

export default PrincipalContact;