import ArrayField from "../../buildingBlocks/ArrayField";
import CustomField from "../../buildingBlocks/CustomField";
import OptionInput from "../../buildingBlocks/OptionInput";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import Protocol from "../../buildingBlocks/Protocol";
import Storage from "../../buildingBlocks/Storage";
import ArrayFieldOneElement from "../../buildingBlocks/ArrayFieldOneElement";
import Concentration from "../../components/Concentration";

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
            <CustomField
                name={name}
                label='Name'
                fieldName='name'
                tooltip='Short descriptive name (id) of the entity; must be unique within a record (e.g. Lysozyme, Serum from Patient 1). This name is referenced in the measurement description to identify the entities present in measured sample'
            />
          </div>
          <div className="mr-3">
            <OptionInput
                name={name}
                options={fluidOptions}
                label='Fluid'
                fieldName='fluid'
                tooltip='The body fluid the complex substance is derived from'
            />
          </div>
          <div className="mr-3">
            <CustomField
                name={name}
                label='Health status'
                fieldName='health_status'
                tooltip='Health status of the donor organism where the body fluid was derived from (e.g. healthy, sick, patient with Diabetes type 2)'
            />
          </div>
          <div>
            <CustomField
                name={name}
                label='Source organism'
                fieldName='source_organism'
            />
          </div>
        </div>
        <div className="mb-3">
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
                            values={values}
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
                renderChild={({ arrayName, index }) => (
                    <FormWrapper headline={`Storage ${index + 1}`}>
                        <Storage
                            name={`${arrayName}.${index}`}
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

export default BodyFluid;