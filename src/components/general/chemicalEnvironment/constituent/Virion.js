import ArrayField from "../../../buildingBlocks/ArrayField";
import CustomField from "../../../buildingBlocks/CustomField";
import FormWrapper from "../../../buildingBlocks/FormWrapper";
import Protocol from "../../../sharedComponents/Protocol";
import Storage from "../../sharedComponents/Storage";
import Concentration from "../../../sharedComponents/Concentration";
import OptionField from "../../../buildingBlocks/OptionField";
import OptionalField from "../../../buildingBlocks/OptionalField";

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
          <div>
            <OptionField
                name={name}
                options={capsidTypeOptions}
                label='Capsid type'
                fieldName='capsid_type'
                tooltip='The type of virion capsid (e.g. genetically engineered, None'
            />
          </div>
        </div>
        <div className="flex">
          <div className="mr-3">
            <OptionField
                name={name}
                options={envelopeOptions}
                label='Envelope type'
                fieldName='envelope_type'
                tooltip='The type of virion envelope (e.g. genetically engineered, None'
            />
          </div>
          <div>
            <CustomField
                name={name}
                fieldName='source_organism'
                label='Source organism'
                tooltip='The biological species where the polymer naturally occurs. Note that this is based on the NCBI taxonomy'
            />
          </div>
        </div>
        <div className="flex mb-3">
            <div className="mr-3">
                <OptionalField
                    name={name}
                    label='Host organism'
                    fieldName='host_organism'
                    tooltip='The host organism the virion was produced in. Note that information is based on the NCBI taxonomy'
                    renderChild={({ optionalFieldName}) => (
                        <CustomField
                            name={optionalFieldName}
                            label='Host organism'
                            tooltip='The host organism the virion was produced in. Note that information is based on the NCBI taxonomy'
                        />
                    )}
                />
            </div>
            <div className="mr-3">
                <OptionalField
                    name={name}
                    label='Host cell type'
                    fieldName='host_cell_type'
                    tooltip='The host cell type the virion was produced in'
                    renderChild={({ optionalFieldName }) => (
                        <CustomField
                            name={optionalFieldName}
                            label='Host cell type'
                            tooltip='The host cell type the virion was produced in'
                        />
                    )}
                />
            </div>
            <div>
                <ArrayField
                    name={name}
                    label='Additional specification'
                    fieldName='additional_specifications'
                    tooltip='Additional information about the complex substance can be specified here'
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
                tooltip='List of the steps performed during the preparation of the complex substance'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        headline={`Preparation protocol ${index + 1}`}
                        tooltip='List of the steps performed during the preparation of the complex substance'
                    >
                        <Protocol
                            name={`${arrayName}.${index}`}
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <OptionalField
                name={name}
                label='Storage'
                fieldName='storage'
                tooltip='Information about how the complex substance was stored between being acquired and measured, including temperature and duration'
                renderChild={({ optionalFieldName }) => (
                    <FormWrapper
                        headline='Storage'
                        tooltip='Information about how the complex substance was stored between being acquired and measured, including temperature and duration'
                    >
                        <Storage
                            name={optionalFieldName}
                            colorSchema='light'
                        />
                    </FormWrapper>
                )}
            />
        </div>
    </>
  );
}

export default Virion;