import ArrayField from "../buildingBlocks/ArrayFieldSave";
import CustomField from "../buildingBlocks/CustomField";
import OptionInput from "../buildingBlocks/OptionInput";
import FormWrapper from "../buildingBlocks/FormWrapper";
import Protocol from "../buildingBlocks/Protocol";
import Storage from "../buildingBlocks/Storage";
import ArrayFieldOneElement from "../buildingBlocks/ArrayFieldOneElement";

function CellFraction( { name, values } ) {

    const fractionOptions = [
        { value: 'ribosome', label: 'Ribosome' },
        { value: 'cell_wall', label: 'Cell wall' },
        { value: 'VesicleCell lysate/Cytoplasm', label: 'VesicleCell lysate/Cytoplasm' },
        { value: 'cell_membrane', label: 'Cell Membrane' },
        { value: 'extracellular_matrix', label: 'Extracellular matrix' },
        { value: 'lysosome', label: 'Lysosome' },
        { value: 'golgi_apparatus', label: 'Golgi Apparatus' },
        { value: 'mitochondrion', label: 'Mitochondrion' },
        { value: 'rough_endoplasmic_reticulum', label: 'Rough Endoplasmic Reticulum' },
        { value: 'smooth_endoplasmic_reticulum', label: 'Smooth Endoplasmic Reticulum' },
        { value: 'vacuole', label: 'Vacuole' },
        { value: 'chloroplast', label: 'Chloroplast' },
    ];

  return (
    <>
        <div className=''>
            <div className="flex mb-3">
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
                        options={fractionOptions}
                        label='Fraction'
                        fieldName='fraction'
                        tooltip='The subcelluar component e.g. (Ribosome)'
                    />
                </div>
                <div className="mr-3">
                    <CustomField
                        name={name}
                        label='Organ'
                        fieldName='organ'
                        tooltip='The organ the cell fraction was derived from (e.g. heart)'
                    />
                </div>
                <div>
                    <CustomField
                        name={name}
                        label='Tissue'
                        fieldName='tissue'
                        tooltip='The tissue type the cell fraction was derived from'
                    />
                </div>
            </div>
            <div className="flex">
                <div className="mr-3">
                    <CustomField
                        name={name}
                        label='Cell type'
                        fieldName='cell_type'
                        tooltip='The cell type the cell fraction was derived from'
                    />
                </div>
                <div className="mr-3">
                    <CustomField
                        name={name}
                        label='Health status'
                        fieldName='health_status'
                        tooltip='Health status of the donor organism where the cell fraction was derived from (e.g. healthy, sick, patient with Diabetes type 2)'
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
                            tooltip='Additional information about the complex substance can be specified here'
                        />
                    )}
                />
            </div>
        </div>
    </>
  );
}

export default CellFraction;