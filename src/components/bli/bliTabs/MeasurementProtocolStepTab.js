import FormWrapper from "../../buildingBlocks/FormWrapper";
import ArrayField from "../../buildingBlocks/ArrayField";
import UseDefault from "../../buildingBlocks/UseDefault";
import MeasurementProtocol from "../measurementProtocol/MeasurementProtocol";

function MeasurementProtocolStepTab({ name }) {
  const fieldName = "measurement_protocol";

  UseDefault(`${name}.${fieldName}`, [{}]);

  return (
    <>
      <div className="-mt-3">
        <ArrayField
          name={name}
          label="Measurement protocol step"
          required
          fieldName={fieldName}
          tooltip="List of the steps in the measurement protocol"
          renderChild={({ arrayName, index }) => (
            <FormWrapper
              headline={`Measurement protocol step ${index + 1}`}
              tooltip="List of the steps in the measurement protocol"
            >
              <div>
                <MeasurementProtocol name={`${arrayName}.${index}`} />
              </div>
            </FormWrapper>
          )}
        />
      </div>
    </>
  );
}

export default MeasurementProtocolStepTab;
