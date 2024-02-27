import CustomField from "../buildingBlocks/CustomField";
import ArrayField from "../buildingBlocks/ArrayField";
import MolecularWeight from "../components/MolecularWeight";
import Modification from "../components/Modification";
import FormWrapper from "../buildingBlocks/FormWrapper";
import Components from "../components/Components";

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
                colorSchema='light'
                tooltipHeader='The molecular weight of the molecular assembly'
            />
        </div>
        <div>
            <Components 
                name={`${name}.components`} 
                values={values}
                colorSchema='light'
            />
        </div>
        <div>
            <ArrayField
                name={name}
                values={values}
                label='Chemical Modification'
                fieldName='chemical_modifications'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper colorSchema='light' headline={`Chemical modification ${index + 1}`}>
                        <Modification
                            name={`${arrayName}.${index}`}
                            values={values}
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div className="flex">
            <div className="mr-3">
                <ArrayField
                    name={name}
                    values={values}
                    label='External Database'
                    fieldName='external_databases'
                    renderChild={({ name, index }) => (
                        <CustomField
                            name={name}
                            index={index}
                            label={`External database ${index + 1}`}
                            fieldName='external_databases'
                        />
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
        </div>
    </>
  );
}

export default MolecularAssembly;