import ArrayField from "../../buildingBlocks/ArrayField";
import CustomField from "../../buildingBlocks/CustomField";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import Protocol from "../../buildingBlocks/Protocol";
import Storage from "../../buildingBlocks/Storage";
import Concentration from "../../components/Concentration";
import OptionField from "../../buildingBlocks/OptionField";

function Virion( { name } ) {

    const geneticMaterialOptions = [
        { value: 'No genetic material', label: 'No genetic material' },
        { value: 'Virus genome', label: 'Virus genome' },
        { value: 'Synthetic', label: 'Synthetic' },
    ];

    const capsidTypeOptions = [
        { value: 'None', label: 'None' },
        { value: 'Native', label: 'Native' },
        { value: 'Genetically Engineered', label: 'Genetically Engineered' },
        { value: 'Synthetic', label: 'Synthetic' },
    ];

    const envelopeOptions = [
        { value: 'None', label: 'None' },
        { value: 'Native', label: 'Native' },
        { value: 'Genetically Engineered', label: 'Genetically Engineered' },
        { value: 'Synthetic', label: 'Synthetic' },
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
            <OptionField
                name={name}
                options={geneticMaterialOptions}
                label='Genetic Material'
                fieldName='genetic_material'
                tooltip='The genetic material carried by the virions (None, virus genome, synthetic)'
            />
          </div>
          <div className="mr-3">
            <OptionField
                name={name}
                options={capsidTypeOptions}
                label='Capsid type'
                fieldName='capsid_type'
                tooltip='The type of virion capsid (e.g. genetically engineered, None'
            />
          </div>
          <div>
            <OptionField
                name={name}
                options={envelopeOptions}
                label='Envelope type'
                fieldName='envelope_type'
                tooltip='The type of virion envelope (e.g. genetically engineered, None'
            />
          </div>
        </div>
        <div className="flex mb-3">
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
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                label='Storage'
                fieldName='storage'
                maxItems={1}
                renderChild={({ arrayName, index }) => (
                    <FormWrapper colorSchema='light' headline={`Storage ${index + 1}`}>
                        <Storage
                            name={`${arrayName}.${index}`}
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <div>
                <ArrayField
                    name={name}
                    label='Additional specification'
                    fieldName='additional_specifications'
                    renderChild={({ arrayName, index }) => (
                        <CustomField
                            name={`${arrayName}.${index}`}
                            label={`Additional specification ${index + 1}`}
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