import FormWrapper from "../../buildingBlocks/FormWrapper";
import ArrayField from "../../buildingBlocks/ArrayField";
import UseDefault from "../../buildingBlocks/UseDefault";
import { useFormikContext } from 'formik';
import Measurements from "../measurements/Measurements";

function MeasurementsTab( { name } ) {

    const { values } = useFormikContext();

    const fieldName = 'measurements'

    UseDefault(values, `${name}.${fieldName}`, [{}] );

    return (
      <>
        <div className="-mt-3">
            <ArrayField
                name={name}
                label="Measurement"
                required={true}
                fieldName={fieldName}
                tooltip='List of the plate types used for the measurements'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        headline={`Measurement ${index + 1}`}
                        tooltipHeader='List of the plate types used for the measurements'
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