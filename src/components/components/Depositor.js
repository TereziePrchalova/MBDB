import FormWrapper from "../buildingBlocks/FormWrapper";
import Contact from "../buildingBlocks/Contact";

function Depositor({ name, values }) {
  return (
    <>
      <FormWrapper headline='Depositor'>
        <Contact name={name} values={values} />
      </FormWrapper>
    </>
  );
}

export default Depositor;