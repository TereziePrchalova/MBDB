import ArrayField from "../../buildingBlocks/ArrayField";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import Protocol from "../../sharedComponents/Protocol";
import { useFormikContext } from "formik";
import OptionField from "../../buildingBlocks/OptionField";
import CustomField from "../../buildingBlocks/CustomField";
import { getIn } from "formik";
import Temperature from "../../sharedComponents/Temperature";
import UseDefault from "../../buildingBlocks/UseDefault";
import OptionalField from "../../buildingBlocks/OptionalField";
import CreateOptions from "../../buildingBlocks/CreateOptions";
import EntityAndConcentration from "../../sharedComponents/EntityAndConcentration";

function Sample({ name }) {
  const { values } = useFormikContext();

  UseDefault(`${name}.analytes`, [{}]);

  const measurementStepValue = getIn(
    values,
    `metadata.method_specific_parameters.measurement_protocol`
  );
  const measurementStepOptions = CreateOptions(
    measurementStepValue,
    "Select Measurement step, if applicable"
  );

  const chemicalEnvironmentsValue = getIn(
    values,
    `metadata.general_parameters.chemical_environments`
  );
  const chemicalEnvironmentsOptions = CreateOptions(
    chemicalEnvironmentsValue,
    "Select Chemical environment, if applicable"
  );

  return (
    <>
      <div className="flex">
        <div className="mr-3">
          <OptionField
            name={name}
            label="Measurement step"
            fieldName="measurement_step"
            required
            options={measurementStepOptions}
          />
        </div>
        <div className="mr-3">
          <OptionField
            name={name}
            label="Chemical environment"
            fieldName="chemical_environment"
            required
            options={chemicalEnvironmentsOptions}
          />
        </div>
        <div className="-mt-3">
          <OptionalField
            name={name}
            label="Position"
            fieldName="position"
            tooltip="Position of the sample within the sample holder"
            renderChild={({ optionalFieldName }) => (
              <CustomField
                name={optionalFieldName}
                label="Position"
                tooltip="Position of the sample within the sample holder"
              />
            )}
          />
        </div>
      </div>
      <div>
        <OptionalField
          name={name}
          label="Temperature"
          fieldName="Temperature"
          tooltip="Temperature of the sample while being measured"
          renderChild={({ optionalFieldName }) => (
            <Temperature
              name={optionalFieldName}
              tooltip="Temperature of the sample while being measured"
            />
          )}
        />
      </div>
      <div>
        <ArrayField
          name={name}
          label="Analytes"
          fieldName="analytes"
          required
          tooltip="List of names (ids) of entities (from the entities of interest defined in the general parameters) that was used to alter the behavior of the target(s) or entities present at varying concentrations for a series of measurements"
          renderChild={({ arrayName, index }) => (
            <FormWrapper headline={`Analytes ${index + 1}`}>
              <EntityAndConcentration name={`${arrayName}.${index}`} />
            </FormWrapper>
          )}
        />
      </div>
      <div>
        <ArrayField
          name={name}
          label="Preparational protocol"
          fieldName="preparational_protocol"
          tooltip="List of steps taken to prepare the sample"
          renderChild={({ arrayName, index }) => (
            <FormWrapper
              headline={`Preparational protocol ${index + 1}`}
              tooltip="List of steps taken to prepare the sample"
            >
              <Protocol name={`${arrayName}.${index}`} />
            </FormWrapper>
          )}
        />
      </div>
    </>
  );
}

export default Sample;
