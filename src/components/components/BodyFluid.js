import ArrayField from "../buildingBlocks/ArrayField";
import CustomField from "../buildingBlocks/CustomField";
import OptionInput from "../buildingBlocks/OptionInput";
import FormWrapper from "../buildingBlocks/FormWrapper";
import Protocol from "../buildingBlocks/Protocol";
import Storage from "../buildingBlocks/Storage";
import ArrayFieldOneElement from "../buildingBlocks/ArrayFieldOneElement";

function BodyFluid( { name, values } ) {

    const fluidOptions = [
        { value: 'blood', label: 'Blood' },
        { value: 'fecal_matter', label: 'Fecal matter' },
        { value: 'milk', label: 'Milk' },
        { value: 'plasma', label: 'Plasma' },
        { value: 'saliva', label: 'Saliva' },
        { value: 'serum', label: 'Serum' },
        { value: 'urine', label: 'Urine' },
        { value: 'plant_extract', label: 'Plant extract' },
    ];

  return (
    <>
        <div className='flex mb-3'>
          <div className='mr-3'>
            <CustomField name={name} label='Name' fieldName='name' />
          </div>
          <div className="mr-3">
            <OptionInput
                name={name}
                options={fluidOptions}
                label='Fluid'
                fieldName='fluid'
            />
          </div>
          <div className="mr-3">
            <CustomField name={name} label='Health status' fieldName='health_status' />
          </div>
          <div>
            <CustomField name={name} label='Source organism' fieldName='source_organism' />
          </div>
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

export default BodyFluid;