import CustomField from "../buildingBlocks/CustomField";
import ArrayField from "../buildingBlocks/ArrayField";
import MolecularWeight from "../components/MolecularWeight";
import Modification from "../components/Modification";
import FormWrapper from "../buildingBlocks/FormWrapper";
import Components from "../components/Components";

function MolecularAssembly( { name } ) {

  return (
    <>
        <div className="mb-3">
            <CustomField
                name={name}
                label='Name'
                fieldName='name'
                width='w-full'
                tooltip='Short descriptive name (id) of the entity; must be unique within a record (e.g. Lysozyme, Serum from Patient 1). This name is referenced in the measurement description to identify the entities present in measured sample'
            />
        </div>
        <div className="mb-3">
            <MolecularWeight
                name={`${name}.molecular_weight`}
                colorSchema='light'
                tooltipHeader='The molecular weight of the molecular assembly'
            />
        </div>
        <div>
            <Components 
                name={name} 
                colorSchema='light'
                colorSchemaProtocol='light'
                tooltip='Description of the individual components (e.g. polypeptide, heme, lipids, metal ions etc.) the molecular assembly is composed of (e.g. Hemoglobin alpha) and how many copies of each component were present'
            />
        </div>
        <div>
            <ArrayField
                name={name}
                label='Chemical Modification'
                fieldName='chemical_modifications'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper colorSchema='light' headline={`Chemical modification ${index + 1}`}>
                        <Modification
                            name={`${arrayName}.${index}`}
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div className="flex">
            <div className="mr-3">
                <ArrayField
                    name={name}
                    label='External Database'
                    fieldName='external_databases'
                    tooltip='List of identifiers to records in external databases containing information about the polymer can be specified here (e.g UNIPROT:Q8KRF6)'
                    renderChild={({ arrayName, index }) => (
                        <CustomField
                            name={arrayName}
                            index={index}
                            label={`External database ${index + 1}`}
                            width='w-[15rem]'
                            tooltip='List of identifiers to records in external databases containing information about the polymer can be specified here (e.g UNIPROT:Q8KRF6)'
                        />
                    )}
                />
            </div>
            <div>
                <ArrayField
                    name={name}
                    label='Additional specification'
                    fieldName='additional_specifications'
                    tooltip='Additional information about the chemical can be specified here (e.g. RNase free water, recrystallization, desalting)'
                    renderChild={({ arrayName, index }) => (
                        <CustomField
                            name={arrayName}
                            index={index}
                            label={`Additional specification ${index + 1}`}
                            width='w-[15rem]'
                            tooltip='Additional information about the chemical can be specified here (e.g. RNase free water, recrystallization, desalting)'
                        />
                    )}
                />
            </div>
        </div>
    </>
  );
}

export default MolecularAssembly;