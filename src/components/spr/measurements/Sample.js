import ArrayField from "../../buildingBlocks/ArrayField";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import Protocol from "../../buildingBlocks/Protocol";
import { useFormikContext } from "formik";
import OptionField from "../../buildingBlocks/OptionField";
import CustomField from "../../buildingBlocks/CustomField";
import { getIn } from "formik";
import Temperature from "../../sharedComponents/Temperature";
import Analytes from "../../sharedComponents/Analytes";
import UseDefault from "../../buildingBlocks/UseDefault";

function Sample( { name } ) {

    const { values } = useFormikContext();

    UseDefault(values, `${name}.analytes`, [{}])

    const measurementStepValue = getIn(values, `metadata.method_specific_parameters.measurement_protocol`)

      let measurementStepOptions = [];

      if (measurementStepValue && measurementStepValue.length > 0) {
            measurementStepOptions = measurementStepValue.map(measurementStep => ({
                value: measurementStep.name,
                label: measurementStep.name,
            }));
        } else {
            measurementStepOptions = [{ label: 'Select Measurement step, if applicable' }];
        }

    const chemicalEnvironmentsValue = getIn(values, `metadata.general_parameters.chemical_environments`)

    let chemicalEnvironmentsOptions = [];

    if (chemicalEnvironmentsValue && chemicalEnvironmentsValue.length > 0) {
            chemicalEnvironmentsOptions = chemicalEnvironmentsValue.map(chemicalEnvironment => ({
                value: chemicalEnvironment.name,
                label: chemicalEnvironment.name,
            }));
        } else {
            chemicalEnvironmentsOptions = [{ label: 'Select Chemical environment, if applicable' }];
        }


  return (
    <>
        <div className="flex">
            <div>
                <OptionField
                    name={name}
                    label='Measurement step'
                    fieldName='measurement_step'
                    options={measurementStepOptions}
                />
            </div>
            <div>
                <OptionField
                    name={name}
                    label='Chemical environment'
                    fieldName='chemical_environment'
                    options={chemicalEnvironmentsOptions}
                />
            </div>
            <div className="-mt-3">
                <ArrayField
                    name={name}
                    maxItems={1}
                    label='Position'
                    fieldName='position'
                    tooltip='Position of the sample within the sample holder'
                    renderChild={({ arrayName, index }) => (
                        <CustomField
                            name={`${arrayName}.${index}`}
                            label='Position'
                            tooltip='Position of the sample within the sample holder'
                        />
                    )}
                />
            </div>
        </div>
        <div>
            <ArrayField
                name={name}
                maxItems={1}
                label='Temperature'
                fieldName='Temperature'
                tooltip='Temperature of the sample while being measured'
                renderChild={({ arrayName, index }) => (
                    <Temperature
                        name={`${arrayName}.${index}`}
                        tooltipHeader='Temperature of the sample while being measured'
                    />
                )}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                label='Analytes'
                fieldName='analytes'
                required={true}
                tooltip='List of names (ids) of entities (from the entities of interest defined in the general parameters) that was used to alter the behavior of the target(s) or entities present at varying concentrations for a series of measurements'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        headline={`Analytes ${index + 1}`}
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
                label='Preparational protocol'
                fieldName='preparational_protocol'
                tooltip='List of steps taken to prepare the sample'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        headline={`Preparational protocol ${index + 1}`}
                        tooltipHeader='List of steps taken to prepare the sample'
                    >
                        <Protocol
                            name={`${arrayName}.${index}`}
                        />
                    </FormWrapper>
                )}
            />
        </div>
    </>
  );
}

export default Sample;