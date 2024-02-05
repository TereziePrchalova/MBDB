import OptionInput from "../buildingBlocks/OptionInput";
import CustomField from "../buildingBlocks/CustomField";
import Location from "./Location";
import ArrayField from "../buildingBlocks/ArrayField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import Protocol from "../buildingBlocks/Protocol";
import ArrayFieldOneElement from "../buildingBlocks/ArrayFieldOneElement";
import Storage from "../buildingBlocks/Storage";

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
        <div className="flex">
            <div className='mr-3'>
                <CustomField name={name} label='Name' fieldName='name' />
            </div>
            <div>
                <OptionInput 
                    name={name} 
                    options={sourceOptions} 
                    label='Source' 
                    fieldName='source' 
                />
            </div>
        </div>
        <div className="-mx-3">
            <Location name={name} />
        </div>
        <div>
            <ArrayField
                name={name}
                values={values}
                label='Preparation protocol'
                fieldName='preparation_protocol'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper colorSchema='light' headline={`Preparation protocol ${index + 1}`}>
                        <Protocol
                            name={`${arrayName}.${index}`}
                            values={values}
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
                    <FormWrapper colorSchema='light' headline={`Storage ${index + 1}`}>
                        <Storage
                            name={`${name}.storage.${index}`}
                            values={values}
                            fieldName='storage'
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
                    />
                )}
            />
        </div>
    </>
  );
}

export default ComplexSubstanceOfEnvironmentalOrigin;