import CustomField from "../../buildingBlocks/CustomField";
import ArrayField from "../../buildingBlocks/ArrayField";
import MolecularWeight from "../../components/MolecularWeight";
import Modification from "../../components/Modification";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import Components from "../../components/Components";
import Concentration from "../../components/Concentration";

function MolecularAssembly( { name, values} ) {

  return (
    <>
        <div className="mb-3">
            <CustomField
                name={name}
                label='Name'
                fieldName='name'
                tooltip='Short descriptive name (id) of the entity; must be unique within a record (e.g. Lysozyme, Serum from Patient 1). This name is referenced in the measurement description to identify the entities present in measured sample'
            />
        </div>
        <div className="mb-3">
            <MolecularWeight
                name={`${name}.molecular_weight`}
                tooltipHeader='The molecular weight of the molecular assembly'
            />
        </div>
        <div className="mb-3">
            <Concentration
                name={`${name}.concentration`}
                tooltipHeader='The molecular weight of the molecular assembly'
            />
        </div>
        <div>
            <Components 
                name={`${name}.components`} 
                colorSchemaWrapper='light'
                molecularWeightColorSchema='light'
                tooltip='Description of the individual components (e.g. polypeptide, heme, lipids, metal ions etc.) the molecular assembly is composed of (e.g. Hemoglobin alpha) and how many copies of each component were present'
            />
        </div>
        <div>
            <ArrayField
                name={name}
                label='Chemical Modification'
                fieldName='chemical_modifications'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper headline={`Chemical modification ${index + 1}`}>
                        <Modification
                            name={`${arrayName}.${index}`}
                            colorSchema='light'
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
                    renderChild={({ arrayName, index }) => (
                        <CustomField
                            name={`${arrayName}.${index}`}
                            label={`External database ${index + 1}`}
                            width='w-[15rem]'
                        />
                    )}
                />
            </div>
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
                        />
                    )}
                />
            </div>
        </div>
    </>
  );
}

export default MolecularAssembly;