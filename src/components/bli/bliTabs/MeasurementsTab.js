import FormWrapper from "../../buildingBlocks/FormWrapper";
import ArrayField from "../../buildingBlocks/ArrayField";
import UseDefault from "../../buildingBlocks/UseDefault";
import Measurements from "../measurements/Measurements";

function MeasurementsTab( { name } ) {

    const fieldName = 'measurements'

    UseDefault(`${name}.${fieldName}`, [{}] );

    return (
      <>
        <div className="-mt-3">
            <ArrayField
                name={name}
                label="Measurement"
                required={true}
                fieldName={fieldName}
                tooltip='List of measurement where each step from each sensor is considered a single measurement'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        headline={`Measurement ${index + 1}`}
                        tooltip='List of measurement where each step from each sensor is considered a single measurement'
                    >
                        <div>
                            <Measurements
                                name={`${arrayName}.${index}`}
                            />
                        </div>
                    </FormWrapper>
                )}
            />
        </div>
      </>
    );
  }
  
  export default MeasurementsTab;