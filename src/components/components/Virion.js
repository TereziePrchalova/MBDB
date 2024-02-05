import ArrayField from "../buildingBlocks/ArrayField";
import CustomField from "../buildingBlocks/CustomField";
import OptionInput from "../buildingBlocks/OptionInput";
import FormWrapper from "../buildingBlocks/FormWrapper";
import Protocol from "../buildingBlocks/Protocol";
import Storage from "../buildingBlocks/Storage";
import ArrayFieldOneElement from "../buildingBlocks/ArrayFieldOneElement";

function Virion( { name, values } ) {

    const geneticMaterialOptions = [
        { value: 'no_genetic_material', label: 'No genetic material' },
        { value: 'virus_genome', label: 'Virus genome' },
        { value: 'synthetic', label: 'Synthetic' },
    ];

    const capsidTypeOptions = [
        { value: 'none', label: 'None' },
        { value: 'native', label: 'Native' },
        { value: 'genetically_engineered', label: 'Genetically Engineered' },
        { value: 'synthetic', label: 'Synthetic' },
    ];

    const envelopeOptions = [
        { value: 'none', label: 'None' },
        { value: 'native', label: 'Native' },
        { value: 'genetically_engineered', label: 'Genetically Engineered' },
        { value: 'synthetic', label: 'Synthetic' },
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
                options={geneticMaterialOptions}
                label='Genetic Material'
                fieldName='genetic_material'
            />
          </div>
          <div className="mr-3">
            <OptionInput
                name={name}
                options={capsidTypeOptions}
                label='Capsid type'
                fieldName='capsid_type'
            />
          </div>
          <div>
            <OptionInput
                name={name}
                options={envelopeOptions}
                label='Envelope type'
                fieldName='envelope_type'
            />
          </div>
        </div>
        <div className="flex">
          <div className="mr-3">
            <CustomField name={name} label='Host organism' fieldName='host_organism' />
          </div>
          <div className="mr-3">
            <CustomField name={name} label='Host cell type' fieldName='host_cell_type' />
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
        </div>
    </>
  );
}

export default Virion;