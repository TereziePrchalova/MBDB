import Temperature from "../components/Temperature";
import Duration from './Duration'
import ArrayField from "./ArrayField";
import FormWrapper from "./FormWrapper";
import StoragePreparation from "./StoragePreparation";
import ArrayFieldOneElement from "./ArrayFieldOneElement";

function Storage( { name, values, colorSchema } ) {

  return (
    <>
        <div>
            <Temperature
                name={`${name}.temperature`}
                tooltipHeader='The temperature the sample was stored at'
                colorSchema={colorSchema}
            />
        </div>
        <div>
            <ArrayFieldOneElement
                name={name}
                values={values}
                label='Duration'
                fieldName='duration'
                renderChild={({ arrayName, index }) => (
                    <Duration
                        name={`${arrayName}.${index}`}
                        colorSchema={colorSchema}
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
                        colorSchema={colorSchema}
                        tooltipHeader='The specific steps that were taken to prepare the samples for storage (e.g. flash freezing in liquid nitrogen), if applicable'
                    >
                        <StoragePreparation
                            name={`${arrayName}.${index}`}
                        />
                    </FormWrapper>
                )}
            />
        </div>
    </>
  );
}

export default Storage;