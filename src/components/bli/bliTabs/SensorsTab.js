import FormWrapper from "../../buildingBlocks/FormWrapper";
import ArrayField from "../../buildingBlocks/ArrayField";
import UseDefault from "../../buildingBlocks/UseDefault";
import { useFormikContext } from 'formik';
import Sensors from "../sensors/Sensors";

function SensorsTab( { name } ) {

    const { values } = useFormikContext();

    const fieldName = 'sensors'

    UseDefault(values, `${name}.${fieldName}`, [{}] );

    return (
      <>
        <div className="-mt-3">
            <ArrayField
                name={name}
                label="Sensors"
                required={true}
                fieldName={fieldName}
                tooltip='List of the senors used for the measurements, reference sensors included'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        headline={`Sensors ${index + 1}`}
                        tooltipHeader='List of the senors used for the measurements, reference sensors included'
                    >
                        <div>
                            <Sensors
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
  
  export default SensorsTab;