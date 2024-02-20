import Temperature from "../components/Temperature";
import Duration from '../components/Duration'
import ArrayField from "./ArrayField";
import FormWrapper from "./FormWrapper";
import StoragePreparation from "./StoragePreparation";
import ArrayFieldOneElement from "./ArrayFieldOneElement";

function Storage( { name, values } ) {

  return (
    <>
        <div>
            <Temperature
                name={`${name}.temperature`}
                tooltipHeader='The temperature the sample was stored at'
            />
        </div>
        <div>
            <ArrayFieldOneElement
                name={name}
                values={values}
                label='Duration'
                fieldName='duration'
                renderChild={({ name, index }) => (
                    <Duration
                        name={`${name}.duration.${index}`}
                        tooltipHeader='Length of time the sample was stored before being measured'
                    />
                )}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                values={values}
                label='Storage preparation'
                fieldName='storage_preparation'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper 
                        headline={`Storage preparation ${index + 1}`} 
                        tooltipHeader='The specific steps that were taken to prepare the samples for storage (e.g. flash freezing in liquid nitrogen), if applicable'
                    >
                        <StoragePreparation
                            name={`${arrayName}.${index}`}
                            fieldName='storage_preparation'
                        />
                    </FormWrapper>
                )}
            />
        </div>
    </>
  );
}

export default Storage;