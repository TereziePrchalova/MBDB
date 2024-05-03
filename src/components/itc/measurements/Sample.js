import ArrayField from "../../buildingBlocks/ArrayField";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import { useFormikContext } from "formik";
import OptionField from "../../buildingBlocks/OptionField";
import { getIn } from "formik";
import Analytes from "../../sharedComponents/Analytes"
import CreateOptions from "../../buildingBlocks/CreateOptions";

function Sample( { name, colorSchema } ) {

    const { values } = useFormikContext();

    const chemicalEnvironmentsValue = getIn(values, `metadata.general_parameters.chemical_environments`);
    const chemicalEnvironmentsOptions = CreateOptions(chemicalEnvironmentsValue, 'Select Chemical environment, if applicable');

  return (
    <>
        <FormWrapper
            headline='Sample'
            colorSchema={colorSchema}
            tooltip='Sample the sensor was in contact with during the measurement'
        >
            <div className="flex">
                <div>
                    <OptionField
                        name={name}
                        label='Chemical environment'
                        fieldName='chemical_environment'
                        options={chemicalEnvironmentsOptions}
                        tooltip='Name (id) of the chemical environment of the sample (from the chemical environments defined in the general parameters'
                    />
                </div>
            </div>
            <div>
                <ArrayField
                    name={name}
                    label='Target in cell'
                    fieldName='target_in_cell'
                    required={true}
                    tooltip='List of names (ids) of entities (from the entities of interest defined in the general parameters) that was used to alter the behavior of the target(s) or entities present at varying concentrations for a series of measurements and their concentrations'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
                            headline={`Target in cell ${index + 1}`}
                            tooltip='List of names (ids) of entities (from the entities of interest defined in the general parameters) that was used to alter the behavior of the target(s) or entities present at varying concentrations for a series of measurements and their concentrations'
                        >
                            <Analytes
                                name={`${arrayName}.${index}`}
                            />
                        </FormWrapper>
                    )}
                />
            </div>
            <div>
                <ArrayField
                    name={name}
                    label='Target in syrigne'
                    fieldName='target_in_syrigne'
                    required={true}
                    tooltip='List of names (ids) of entities (from the entities of interest defined in the general parameters) that was used to alter the behavior of the target(s) or entities present at varying concentrations for a series of measurements and their concentrations'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
                            headline={`Target in syrigne ${index + 1}`}
                            tooltip='List of names (ids) of entities (from the entities of interest defined in the general parameters) that was used to alter the behavior of the target(s) or entities present at varying concentrations for a series of measurements and their concentrations'
                        >
                            <Analytes
                                name={`${arrayName}.${index}`}
                            />
                        </FormWrapper>
                    )}
                />
            </div>
        </FormWrapper>
    </>
  );
}

export default Sample;