import ArrayField from "../../buildingBlocks/ArrayField";
import CustomField from "../../buildingBlocks/CustomField";
import OptionInput from "../../buildingBlocks/OptionInput";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import Protocol from "../../buildingBlocks/Protocol";
import Storage from "../../buildingBlocks/Storage";
import ArrayFieldOneElement from "../../buildingBlocks/ArrayFieldOneElement";
import Concentration from "../../components/Concentration";

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
                options={geneticMaterialOptions}
                label='Genetic Material'
                fieldName='genetic_material'
                tooltip='The genetic material carried by the virions (None, virus genome, synthetic)'
            />
          </div>
          <div className="mr-3">
            <OptionInput
                name={name}
                options={capsidTypeOptions}
                label='Capsid type'
                fieldName='capsid_type'
                tooltip='The type of virion capsid (e.g. genetically engineered, None'
            />
          </div>
          <div>
            <OptionInput
                name={name}
                options={envelopeOptions}
                label='Envelope type'
                fieldName='envelope_type'
                tooltip='The type of virion envelope (e.g. genetically engineered, None'
            />
          </div>
        </div>
        <div className="flex">
          <div className="mr-3">
            <CustomField name={name} label='Host organism' fieldName='host_organism' />
          </div>
          <div className="mr-3">
            <CustomField
                name={name}
                label='Host cell type'
                fieldName='host_cell_type'
                tooltip='The host cell type the virion was produced in'
            />
          </div>
          <div>
            <CustomField name={name} label='Source organism' fieldName='source_organism' />
          </div>
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
                        colorSchema='light'
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
                    <FormWrapper colorSchema='light' headline={`Storage ${index + 1}`}>
                        <Storage
                            name={`${arrayName}.${index}`}
                            values={values}
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
                            tooltip='Additional information about the complex substance can be specified here'
                        />
                    )}
                />
            </div>
        </div>
    </>
  );
}

export default Virion;