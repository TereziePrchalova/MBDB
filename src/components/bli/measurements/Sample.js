import ArrayField from "../../buildingBlocks/ArrayField";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import Protocol from "../../buildingBlocks/Protocol";
import { useFormikContext } from "formik";
import OptionField from "../../buildingBlocks/OptionField";
import CustomField from "../../buildingBlocks/CustomField";
import { getIn } from "formik";
import Temperature from "../../sharedComponents/Temperature";
import Analytes from "../../sharedComponents/Analytes"
import OptionalField from "../../buildingBlocks/OptionalField";

function Sample( { name, colorSchema } ) {

    const { values } = useFormikContext();

    const platesValue = getIn(values, `metadata.method_specific_parameters.plates`)

      let platesOptions = [];

      if (platesValue && platesValue.length > 0) {
            platesOptions = platesValue.map(plate => ({
                value: plate.name,
                label: plate.name,
            }));
        } else {
            platesOptions = [{ label: 'Select Plate, if applicable' }];
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
        <FormWrapper
            headline='Sample'
            colorSchema={colorSchema}
            tooltip='Sample the sensor was in contact with during the measurement'
        >
            <div className="flex">
                <div className="mr-3">
                    <OptionField
                        name={name}
                        label='Plate'
                        fieldName='plate'
                        options={platesOptions}
                    />
                </div>
                <div className="mr-3">
                    <CustomField
                        name={name}
                        fieldName='well_position'
                        label='Well position'
                        tooltip='The position the well (in the plate) where the sample was during the measurement'
                    
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
            </div>
            <div>
                <OptionalField
                    name={name}
                    label='Temperature'
                    fieldName='temperature'
                    tooltip='Temperature of the sample while being measured'
                    renderChild={({ optionalFieldName }) => (
                        <Temperature
                            name={optionalFieldName}
                            tooltip='Temperature of the sample while being measured'
                        />
                    )}
                />
            </div>
            <div>
                <ArrayField
                    name={name}
                    label='Analytes'
                    fieldName='analytes'
                    tooltip='List of names (ids) of entities (from the entities of interest defined in the general parameters) that was used to alter the behavior of the target(s) or entities present at varying concentrations for a series of measurements and their concentrations'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
                            headline={`Analytes ${index + 1}`}
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
                    label='Preparational protocol'
                    fieldName='preparational_protocol'
                    tooltip='List of steps taken to prepare the sample'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
                            headline={`Preparational protocol ${index + 1}`}
                            tooltip='List of steps taken to prepare the sample'
                        >
                            <Protocol
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