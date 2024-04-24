import Temperature from '../sharedComponents/Temperature';
import Duration from './Duration'
import ArrayField from "./ArrayField";
import FormWrapper from "./FormWrapper";
import StoragePreparation from "./StoragePreparation";
import OptionalField from './OptionalField';

function Storage( { name, colorSchema } ) {

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
            <OptionalField
                name={name}
                label='Duration'
                fieldName='duration'
                tooltip='Length of time the sample was stored before being measured'
                renderChild={({ optionalFieldName }) => (
                    <Duration
                        name={optionalFieldName}
                        colorSchema={colorSchema}
                        tooltipHeader='Length of time the sample was stored before being measured'
                    />
                )}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                label='Storage preparation'
                fieldName='storage_preparation'
                tooltip='The specific steps that were taken to prepare the samples for storage (e.g. flash freezing in liquid nitrogen), if applicable'
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