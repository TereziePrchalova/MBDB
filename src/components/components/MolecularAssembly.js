import CustomField from "../buildingBlocks/CustomField";
import ArrayField from "../buildingBlocks/ArrayField";
import MolecularWeight from "./MolecularWeight";
import Modification from "./Modification";
import FormWrapper from "../buildingBlocks/FormWrapper";
import EntitiesOfInterestTab from "../tabs/EntitiesOfInterest";

function MolecularAssembly( { name, values} ) {

  return (
    <>
        <div>
            <CustomField name={name} label='Name' fieldName='name' />
        </div>
        <div className="-mx-3">
            <MolecularWeight name={`${name}.molecular_weight`} values={values} />
        </div>
        <div>
            <ArrayField
                name={name}
                values={values}
                label='Chemical Modifications'
                fieldName='chemical_modifications'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper colorSchema='light' headline={`Chemical modifications ${index + 1}`}>
                        <Modification
                            name={`${arrayName}.${index}`}
                            values={values}
                            fieldName='chemical_modifications'
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