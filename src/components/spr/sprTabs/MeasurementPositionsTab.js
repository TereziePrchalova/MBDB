import FormWrapper from "../../buildingBlocks/FormWrapper";
import ArrayField from "../../buildingBlocks/ArrayField";
import UseDefault from "../../buildingBlocks/UseDefault";
import MeasurementPositions from "../measurementPositions/MeasurementPositions";

function MeasurementPositionsTab({ name }) {
  const fieldName = "measurement_positions";

  UseDefault(`${name}.${fieldName}`, [{}]);

  return (
    <>
      <div className="-mt-3">
        <ArrayField
          name={name}
          label="Measurement position"
          required
          fieldName={fieldName}
          tooltip="Information about each of the positions where data was collected including reference positions"
          renderChild={({ arrayName, index }) => (
            <FormWrapper
              headline={`Measurement position ${index + 1}`}
              tooltip="Information about each of the positions where data was collected including reference positions"
            >
              <div>
                <MeasurementPositions name={`${arrayName}.${index}`} />
              </div>
            </FormWrapper>
          )}
        />
      </div>
    </>
  );
}

export default MeasurementPositionsTab;
