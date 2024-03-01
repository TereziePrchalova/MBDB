import FormWrapper from "../buildingBlocks/FormWrapper";
import ArrayField from "../buildingBlocks/ArrayField";
import Measurement from "../measurement/Measurement";
import UseDefault from "../buildingBlocks/UseDefault";
import { useFormikContext } from "formik";

function MeasurementTab( { name } ) {

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
                renderChild={({ arrayName, index }) => (
                    <FormWrapper headline={`Measurement ${index + 1}`}>
                        <div>
                            <Measurement
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
  
  export default MeasurementTab;