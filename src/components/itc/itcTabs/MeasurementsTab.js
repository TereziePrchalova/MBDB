import FormWrapper from "../../buildingBlocks/FormWrapper";
import ArrayField from "../../buildingBlocks/ArrayField";
import UseDefault from "../../buildingBlocks/UseDefault";
import Measurements from "../measurements/Measurements";

function MeasurementsTab({ name }) {
  const fieldName = "measurements";

  UseDefault(`${name}.${fieldName}`, [{}]);

  return (
    <>
      <div className="-mt-3">
        <ArrayField
          name={name}
          label="Measurement"
          required
          fieldName={fieldName}
          tooltip="List of the information about each measurement. This includes target(s), ligand(s), chemical environment, and the position of the sample within the instrument"
          renderChild={({ arrayName, index }) => (
            <FormWrapper
              headline={`Measurement ${index + 1}`}
              tooltip="List of the information about each measurement. This includes target(s), ligand(s), chemical environment, and the position of the sample within the instrument"
            >
              <div>
                <Measurements name={`${arrayName}.${index}`} />
              </div>
            </FormWrapper>
          )}
        />
      </div>
    </>
  );
}

export default MeasurementsTab;
