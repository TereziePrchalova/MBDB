import ArrayField from "./ArrayField";
import CustomField from "./CustomField";

function Contact( { name, values} ) {

  return (
    <>
        <div className='flex'>
          <div className='mr-3'>
            <CustomField
              name={name}
              label='Given Name'
              fieldName='given_name'
              tooltip='The given name(s), including middlename(s), of the person'
            />
          </div>
          <div>
            <CustomField
              name={name}
              label='Family Name'
              fieldName='family_name'
              tooltip='The family name(s) the person'
            />
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
                            tooltip='Persistent personal identifiers, currently only ORCIDs are allowed'
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
                            tooltip='The affiliation of the person. Note that this is based on the Research Organization Registry (ROR)'
                        />
                    )}
                />
            </div>
        </div>
    </>
  );
}

export default Contact;