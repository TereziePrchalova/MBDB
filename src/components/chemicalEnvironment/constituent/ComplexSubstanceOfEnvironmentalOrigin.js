import OptionInput from "../../buildingBlocks/OptionInput";
import CustomField from "../../buildingBlocks/CustomField";
import Location from "../../components/Location";
import ArrayField from "../../buildingBlocks/ArrayField";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import Protocol from "../../buildingBlocks/Protocol";
import ArrayFieldOneElement from "../../buildingBlocks/ArrayFieldOneElement";
import Storage from "../../buildingBlocks/Storage";
import Concentration from "../../components/Concentration";

function ComplexSubstanceOfEnvironmentalOrigin( { name, values } ) {

    const sourceOptions = [
        { value: 'fresh_water', label: 'Fresh water' },
        { value: 'marine', label: 'Marine' },
        { value: 'ice_core', label: 'Ice core' },
        { value: 'sediment', label: 'Sediment' },
        { value: 'sewage', label: 'Sewage' },
        { value: 'soil', label: 'Soil' },
      ];

  return (
    <>
        <div className="flex mb-3">
            <div className='mr-3'>
                <CustomField
                    name={name}
                    label='Name'
                    fieldName='name'
                    tooltip='Short descriptive name (id) of the entity; must be unique within a record (e.g. Lysozyme, Serum from Patient 1). This name is referenced in the measurement description to identify the entities present in measured sample'
                />
            </div>
            <div>
                <OptionInput 
                    name={name} 
                    options={sourceOptions} 
                    label='Source' 
                    fieldName='source'
                    tooltip='The environmental source where the complex substance was derived from'
                />
            </div>
        </div>
        <div className="mb-3">
            <Location
                name={`${name}.location`}
                tooltipHeader='The longitude, from west to east, in degrees (decimal notation)'
            />
        </div>
        <div>
            <Concentration
                name={`${name}.concentration`}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                values={values}
                label='Preparation protocol'
                fieldName='preparation_protocol'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        headline={`Preparation protocol ${index + 1}`}
                        tooltipHeader='List of the steps performed during the preparation of the complex substance'
                    >
                        <Protocol
                            name={`${arrayName}.${index}`}
                            fieldName='protocol'
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <ArrayFieldOneElement
                name={name}
                values={values}
                label='Storage'
                fieldName='storage'
                renderChild={({ name, index }) => (
                    <FormWrapper
                        headline={`Storage ${index + 1}`}
                        tooltipHeader='The specific steps that were taken to prepare the samples for storage (e.g. flash freezing in liquid nitrogen), if applicable'
                    >
                        <Storage
                            name={`${name}.${index}`}
                            values={values}
                            colorSchema='light'
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                values={values}
                label='Additional specification'
                fieldName='additional_specifications'
                renderChild={({ name, index }) => (
                    <CustomField
                        name={name}
                        index={index}
                        label={`Additional specification ${index + 1}`}
                        fieldName='additional_specifications'
                        width='w-[15rem]'
                        tooltip='Additional information about the complex substance can be specified here'
                    />
                )}
            />
        </div>
    </>
  );
}

export default ComplexSubstanceOfEnvironmentalOrigin;