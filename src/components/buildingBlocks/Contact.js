import ArrayField from "./ArrayField";
import CustomField from "./CustomField";

function Contact( { name, values} ) {

  return (
    <>
        <div className='flex'>
          <div className='mr-3'>
            <CustomField name={name} label='Given Name' fieldName='given_name' />
          </div>
          <div>
            <CustomField name={name} label='Family Name' fieldName='family_name' />
          </div>
        </div>
        <div className="flex">
            <div className="mr-3">
                <ArrayField
                    name={name}
                    values={values}
                    label='identifier'
                    fieldName='identifiers'
                    renderChild={({ name, index }) => (
                        <CustomField
                            name={name}
                            index={index}
                            label={`identifier ${index + 1}`}
                            fieldName='identifiers'
                        />
                    )}
                />
            </div>
            <div>
                <ArrayField
                    name={name}
                    values={values}
                    label='affiliation'
                    fieldName='affiliations'
                    renderChild={({ name, index }) => (
                        <CustomField
                            name={name}
                            index={index}
                            label={`affiliation ${index + 1}`}
                            fieldName='affiliations'
                        />
                    )}
                />
            </div>
        </div>
    </>
  );
}

export default Contact;