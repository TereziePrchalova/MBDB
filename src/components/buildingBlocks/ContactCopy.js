import ArrayField from "./ArrayField";
import CustomField from "./CustomField";
import FormWrapper from "./FormWrapper";

function ContactCopy( { name, values } ) {

  return (
    <>
      <ArrayField
        name={name}
        values={values}
        label='Contributor'
        renderChild={({ name, index }) => (
          <>
            <FormWrapper headline={`Contributor ${index + 1}`}>
              <div className='flex'>
                <div className='mr-3'>
                  <CustomField name={name} index={index} label='Given Name' fieldName='given_name' />
                </div>
                <div>
                  <CustomField name={name} index={index} label='Family Name' fieldName='family_name' />
                </div>
              </div>
              <div className="flex">

                 
              </div>
            </FormWrapper>
          </>
        )}
      />
    </>
  );
}

export default ContactCopy;